import { Star } from 'lucide-react';

export default async function SubmitReviewPage({ params }: { params: Promise<{ workspace_slug: string }> }) {
  // Wait for params in Next.js 15
  const workspaceSlug = (await params).workspace_slug;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Leave a Review</h1>
          <p className="text-slate-500 text-sm">Your feedback helps us improve.</p>
        </div>

        <form className="space-y-6">
          {/* Rating Selection */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide text-slate-700 mb-3">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  className="p-1 hover:scale-110 transition-transform"
                  aria-label={`Rate ${i} stars`}
                >
                  <Star className="w-8 h-8 text-slate-300 hover:text-yellow-400 hover:fill-yellow-400 transition-colors" />
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
            className="w-full bg-emerald-600 text-white font-bold tracking-wide uppercase py-4 hover:bg-emerald-700 transition-colors flex items-center justify-center"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
