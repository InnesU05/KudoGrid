import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

let ratelimit: Ratelimit | undefined;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  // 5 requests per 10 minutes for extreme strictness on the submission route
  ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(5, '10 m'),
    analytics: true,
  });
}

export async function proxy(request: NextRequest) {
  // 1. Rate Limiting for Public Submission Routes (POST only)
  if (request.method === 'POST' && request.nextUrl.pathname.includes('/submit')) {
    const xff = request.headers.get('x-forwarded-for');
    const ip = xff ? xff.split(',')[0].trim() : '127.0.0.1';
    
    if (ratelimit) {
      try {
        const { success, limit, reset, remaining } = await ratelimit.limit(`ratelimit_${ip}`);

        if (!success) {
          return new NextResponse(
            JSON.stringify({ error: 'Too many requests. Please try again later.' }),
            {
              status: 429,
              headers: {
                'Content-Type': 'application/json',
                'X-RateLimit-Limit': limit.toString(),
                'X-RateLimit-Remaining': remaining.toString(),
                'X-RateLimit-Reset': reset.toString(),
              },
            }
          );
        }
      } catch (error) {
        // Fallback: If Upstash is down or errors, allow the request to pass through
        console.error('Rate limiting failed:', error);
      }
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
