'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { submitReviewAction } from '@/app/actions/submitReview';

export default function ReviewForm({ workspaceSlug }: { workspaceSlug: string }) {
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError(null);
    const result = await submitReviewAction(formData, workspaceSlug, rating);
    
    if (result.error) {
      setError(result.error);
    } else if (result.success) {
      setIsSuccess(true);
    }
    setIsSubmitting(false);
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-2">Thank you!</h2>
        <p className="text-slate-600">Your review has been successfully submitted.</p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-50 text-red-700 border border-red-200 text-sm">
          {error}
        </div>
      )}

      {/* Rating Selection */}
      <div>
        <label className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-3">Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setRating(i)}
              className="p-1 hover:scale-110 transition-transform"
              aria-label={`Rate ${i} stars`}
            >
              <Star 
                className={`w-8 h-8 transition-colors ${
                  i <= rating 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-slate-300 hover:text-yellow-400 hover:fill-yellow-400'
                }`} 
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-2">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-2">Role & Company</label>
          <input
            id="role"
            name="role"
            type="text"
            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors"
            placeholder="CEO, Acme Corp"
          />
        </div>
      </div>

      <div>
        <label htmlFor="review" className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-2">Your Review</label>
        <textarea
          id="review"
          name="review"
          required
          rows={4}
          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors resize-y"
          placeholder="What did you like most about working with us?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 text-white font-bold tracking-wide uppercase py-4 hover:bg-emerald-700 transition-colors flex items-center justify-center disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}
