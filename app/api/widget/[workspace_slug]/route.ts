import { NextResponse } from 'next/server';
import DOMPurify from 'isomorphic-dompurify';
import { createClient } from '@/lib/supabase/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ workspace_slug: string }> }
) {
  try {
    const workspaceSlug = (await params).workspace_slug;
    const supabase = await createClient();

    // 1. Get user_id for the workspace
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('workspace_slug', workspaceSlug)
      .single();

    if (userError || !userData) {
      return NextResponse.json({ error: 'Workspace not found' }, { status: 404 });
    }

    // 2. Fetch approved reviews for that user
    const { data: reviews, error: reviewsError } = await supabase
      .from('reviews')
      .select('id, customer_name, customer_role, rating, review_text, created_at')
      .eq('user_id', userData.id)
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    if (reviewsError) {
      return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }

    // 3. Sanitise review texts just in case (defense in depth, though we should sanitise on insert too)
    const sanitisedReviews = reviews.map((review) => ({
      ...review,
      customer_name: DOMPurify.sanitize(review.customer_name),
      customer_role: review.customer_role ? DOMPurify.sanitize(review.customer_role) : null,
      review_text: DOMPurify.sanitize(review.review_text),
    }));

    // 4. Generate the HTML response
    // We return a fully styled HTML document that can be iframed.
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>KudoGrid Wall of Love</title>
        <style>
          /* Minimalist embedded styling */
          * { box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background: transparent;
            margin: 0;
            padding: 16px;
            color: #0f172a;
          }
          .kudogrid-masonry {
            column-count: 1;
            column-gap: 16px;
          }
          @media (min-width: 640px) { .kudogrid-masonry { column-count: 2; } }
          @media (min-width: 1024px) { .kudogrid-masonry { column-count: 3; } }
          
          .kudogrid-card {
            break-inside: avoid;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            padding: 20px;
            margin-bottom: 16px;
          }
          
          .kudogrid-stars {
            color: #fbbf24;
            font-size: 16px;
            margin-bottom: 12px;
          }
          
          .kudogrid-text {
            font-size: 14px;
            line-height: 1.6;
            color: #334155;
            margin-bottom: 16px;
            white-space: pre-wrap;
          }
          
          .kudogrid-author {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .kudogrid-avatar {
            width: 32px;
            height: 32px;
            background-color: #f1f5f9;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 12px;
            color: #475569;
          }
          
          .kudogrid-author-details {
            display: flex;
            flex-direction: column;
          }
          
          .kudogrid-name {
            font-weight: 700;
            font-size: 13px;
          }
          
          .kudogrid-role {
            font-size: 12px;
            color: #64748b;
          }
        </style>
      </head>
      <body>
        <div class="kudogrid-masonry">
          ${sanitisedReviews.map(review => `
            <div class="kudogrid-card">
              <div class="kudogrid-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
              <div class="kudogrid-text">${review.review_text}</div>
              <div class="kudogrid-author">
                <div class="kudogrid-avatar">${review.customer_name.charAt(0).toUpperCase()}</div>
                <div class="kudogrid-author-details">
                  <span class="kudogrid-name">${review.customer_name}</span>
                  ${review.customer_role ? `<span class="kudogrid-role">${review.customer_role}</span>` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `;

    return new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*', // Crucial for iframes
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300', // Vercel Edge Caching
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
