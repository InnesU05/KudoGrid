import ReviewForm from './ReviewForm';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

export default async function SubmitReviewPage({ params }: { params: Promise<{ workspace_slug: string }> }) {
  // Wait for params in Next.js 15
  const workspaceSlug = (await params).workspace_slug;

  const supabase = await createClient();
  const { data: userData } = await supabase
    .from('users')
    .select('id')
    .eq('workspace_slug', workspaceSlug)
    .single();

  if (!userData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Leave a Review</h1>
          <p className="text-slate-500 text-sm">Your feedback helps us improve.</p>
        </div>

        <ReviewForm workspaceSlug={workspaceSlug} />
      </div>
    </div>
  );
}
