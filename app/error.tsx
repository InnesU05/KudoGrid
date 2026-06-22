'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 text-center font-sans">
      <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center font-bold text-2xl tracking-tighter mb-6 rounded-full">
        !
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Something went wrong</h1>
      <p className="text-slate-500 mb-8 max-w-md">
        An unexpected error occurred. Our servers have been notified and we are looking into it.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-slate-900 text-white font-bold px-6 py-3 hover:bg-slate-800 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="bg-white border border-slate-200 text-slate-700 font-bold px-6 py-3 hover:bg-slate-50 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
