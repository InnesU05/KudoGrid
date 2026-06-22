import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="border-b border-slate-200 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tighter">
            KG
          </div>
          <span className="font-semibold tracking-tight">kudogrid</span>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            LOG IN
          </Link>
          <Link href="/dashboard" className="text-sm font-bold bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 transition-colors">
            START FREE
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900">
          Collect reviews. <br className="hidden md:block"/> Embed trust.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The dead-simple way to gather customer testimonials with a public link and display a high-converting Wall of Love on your own website in seconds.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard" className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 font-bold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-slate-500 font-medium">No credit card required.</p>
        </div>
      </section>

      {/* Product Demo / Example Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">See how it works</h2>
            <p className="text-slate-600">Zero tutorials needed. Just two simple steps.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Step 1: Collect */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Step 1</span>
              <h3 className="text-2xl font-bold mb-4">Share your unique link</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Send your customers to a clean, high-converting submission form. No login required for them, just pure feedback collection.
              </p>
              
              {/* Mock Form Visual */}
              <div className="bg-white border border-slate-200 p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
                </div>
                <div className="h-20 bg-slate-50 border border-slate-200 p-3 mb-4 text-sm text-slate-400 flex items-start">
                  "KudoGrid is exactly what we needed..."
                </div>
                <div className="h-10 bg-emerald-600 w-full flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:bg-emerald-700 transition-colors">
                  SUBMIT REVIEW
                </div>
              </div>
            </div>

            {/* Step 2: Embed */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Step 2</span>
              <h3 className="text-2xl font-bold mb-4">Embed the Wall of Love</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Copy and paste a single snippet of HTML into your website. Approved reviews instantly appear in a responsive, beautiful grid.
              </p>
              
              {/* Mock Widget Visual */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-slate-200 p-5 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-slate-800 fill-current" />)}
                  </div>
                  <p className="text-sm text-slate-700 mb-4">"The easiest tool I've used this year. Setup took 3 minutes and it looks incredibly professional on our site."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-200 rounded-full" />
                    <div>
                      <p className="text-xs font-bold">Sarah Jenkins</p>
                      <p className="text-xs text-slate-500">CMO, TechStart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center font-bold text-[10px] tracking-tighter">
              KG
            </div>
            <span className="font-semibold text-sm tracking-tight text-slate-500">© 2026 KudoGrid</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
