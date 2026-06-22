import { ExternalLink, Code, CreditCard, CheckCircle2, XCircle } from 'lucide-react';

// In a real app, we would fetch this via the Supabase Server Client
export default async function DashboardPage() {
  const workspaceSlug = 'your-workspace-slug';
  // Assuming standard domain or localhost
  const publicLink = `https://kudogrid.com/${workspaceSlug}/submit`;
  const embedCode = `<iframe src="https://kudogrid.com/api/widget/${workspaceSlug}" width="100%" height="600px" frameborder="0"></iframe>`;

  const reviews = [
    { id: 1, name: 'Alice Smith', role: 'Founder, TechFlow', rating: 5, text: 'KudoGrid changed how we collect feedback. Absolutely seamless.', approved: true },
    { id: 2, name: 'John Doe', role: 'CTO, DataSync', rating: 4, text: 'Great tool, simple to use. Highly recommended for fast setups.', approved: false },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-200">
      
      {/* Navbar */}
      <header className="border-b border-slate-200 px-8 py-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tighter">
            KG
          </div>
          <span className="font-semibold tracking-tight">kudogrid</span>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <CreditCard className="w-4 h-4" />
          MANAGE BILLING
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        
        {/* Zero-Touch Onboarding Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="border border-slate-200 p-6 flex flex-col h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Step 1</span>
              <h2 className="text-lg font-semibold mb-2">Collect Reviews</h2>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Share this link with your customers to start collecting testimonials.</p>
              
              <div className="flex bg-slate-50 border border-slate-200 items-center justify-between p-3 mt-auto">
                <code className="text-sm text-slate-800 truncate select-all">{publicLink}</code>
                <a href={`/${workspaceSlug}/submit`} target="_blank" className="text-slate-500 hover:text-slate-900 p-1 flex-shrink-0 ml-2">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-slate-200 p-6 flex flex-col h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Step 2</span>
              <h2 className="text-lg font-semibold mb-2">Embed Wall of Love</h2>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Paste this snippet anywhere on your website to display approved reviews.</p>
              
              <div className="flex bg-slate-50 border border-slate-200 items-center justify-between p-3 mt-auto">
                <code className="text-xs text-slate-800 truncate select-all">{embedCode}</code>
                <button className="text-slate-500 hover:text-slate-900 p-1 flex-shrink-0 ml-2" title="Copy to Clipboard">
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Table Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold tracking-tight">Recent Submissions</h2>
            <span className="text-sm font-medium text-slate-500">{reviews.length} total</span>
          </div>

          <div className="border border-slate-200 overflow-hidden overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[600px]">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-900">Customer</th>
                  <th className="px-6 py-4 font-semibold text-slate-900">Rating</th>
                  <th className="px-6 py-4 font-semibold text-slate-900 w-1/2">Review</th>
                  <th className="px-6 py-4 font-semibold text-slate-900 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {reviews.map((review) => (
                  <tr key={review.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <div className="font-medium text-slate-900">{review.name}</div>
                      <div className="text-slate-500 text-xs mt-1">{review.role}</div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="flex text-slate-400">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top text-slate-700">
                      {review.text}
                    </td>
                    <td className="px-6 py-4 align-top text-right">
                      {review.approved ? (
                        <button className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider border border-emerald-200 rounded-sm hover:bg-emerald-100 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Approved
                        </button>
                      ) : (
                        <button className="inline-flex items-center gap-1.5 text-slate-600 bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wider border border-slate-200 rounded-sm hover:border-slate-400 transition-colors hover:text-slate-900">
                          <XCircle className="w-3.5 h-3.5" />
                          Hidden
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {reviews.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                      No reviews collected yet. Share your link to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}
