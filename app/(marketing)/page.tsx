import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KudoGrid | Your automated trust engine',
  description: 'Turn 5-star Google and Twitter reviews into beautiful, high-converting testimonial walls in 60 seconds.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KudoGrid',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const MascotImage = ({ className = '' }: { className?: string }) => (
  <img 
    src="/Kudo_Mascott.png" 
    alt="Kudo Mascot" 
    className={`${className} object-contain`} 
  />
);

const SkateboardMascot = ({ className = '' }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <MascotImage className="w-full h-full relative z-10" />
    {/* Skateboard */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-[#000] rounded-full z-0 transform -rotate-2">
      <div className="absolute -bottom-2 left-4 w-4 h-4 bg-[#4a5568] rounded-full border-2 border-black" />
      <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#4a5568] rounded-full border-2 border-black" />
    </div>
  </div>
);

const ReviewCard = ({ name, platform, content }: { name: string; platform: 'X' | 'Google'; content: string }) => (
  <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 max-w-sm w-full font-sans">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-lg border border-slate-200">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-sm text-[#111827]">{name}</div>
          <div className="flex text-[#1b8b3d] text-xs mt-0.5">★★★★★</div>
        </div>
      </div>
      <div className={`w-5 h-5 rounded-md flex items-center justify-center text-white text-[10px] font-bold ${platform === 'X' ? 'bg-slate-900' : 'bg-[#4285F4]'}`}>
        {platform === 'X' ? 'X' : 'G'}
      </div>
    </div>
    <div className="text-sm text-slate-600 leading-relaxed font-medium">&quot;{content}&quot;</div>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#111827] font-sans selection:bg-[#1b8b3d] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HEADER */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-0 pointer-events-none">
        <div className="bg-white rounded-full px-6 py-3 shadow-sm border border-slate-200 flex items-center gap-6 sm:gap-12 w-full max-w-[800px] mx-auto pointer-events-auto">
          <Link href="/" className="flex items-center gap-3">
            <MascotImage className="w-8 h-8" />
            <span className="font-extrabold text-xl tracking-tight text-[#111827]">KUDOGRID</span>
          </Link>
          <nav className="hidden md:flex flex-1" />
          <Link href="/login" className="bg-[#1b8b3d] hover:bg-[#156e30] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors whitespace-nowrap ml-auto">
            Get started
          </Link>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="pt-48 pb-24 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-[#111827]">
              Your automated <span className="text-[#1b8b3d]">trust engine.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              All the boring review collection you know you should do but never get round to. Turn 5-star Google and Twitter reviews into beautiful, high-converting testimonial walls in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/login" className="bg-[#1b8b3d] hover:bg-[#156e30] text-white font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto transition-colors text-center shadow-lg shadow-green-900/20">
                Hire Kudo
              </Link>
              <Link href="#demo" className="text-slate-600 font-bold hover:text-[#111827] px-6 py-4 transition-colors">
                See how it works &rarr;
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto relative flex justify-center lg:justify-end">
            <div className="relative">
              <MascotImage className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]" />
              
              {/* Hand-drawn annotation */}
              <div className="absolute -top-16 right-0 lg:-right-32 transform rotate-6 flex flex-col items-center">
                <span className="text-2xl text-[#111827] leading-none mb-2" style={{ fontFamily: "'Caveat', cursive" }}>
                  Kudo. He&apos;s got your back.
                </span>
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#111827] -ml-20">
                  <path d="M90 10 C60 20, 30 50, 15 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <path d="M10 65 L15 80 L30 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>

              {/* Floating Reviews */}
              <div className="absolute -bottom-10 -left-10 lg:-left-40 transform -rotate-6 z-20">
                <ReviewCard 
                  name="David Miller"
                  platform="Google"
                  content="This widget completely changed our landing page. Our conversion rates are up 12% since installing it."
                />
              </div>
              <div className="absolute bottom-16 -left-4 lg:-left-24 transform rotate-3 z-10 opacity-95 scale-95">
                <ReviewCard 
                  name="Sarah Jenkins"
                  platform="X"
                  content="Just dropped KudoGrid on my site and it pulled all my 5-star tweets instantly. Literal magic. 🤯"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: WHAT IS KUDOGRID */}
        <section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-200">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <p className="text-[#1b8b3d] text-sm font-bold tracking-widest uppercase mb-4">/01 · The Dead-Simple Widget</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">What is KudoGrid?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                KudoGrid connects to your X (Twitter) or Google accounts, scans for your best 4-5 star reviews, and automatically builds a beautiful Wall of Love for your site.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                No coding required. Just connect your accounts, pick a template, and copy one line of code onto your website. Kudo handles the rest, forever.
              </p>
            </div>
            <div className="flex-1 relative w-full flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-8 border-4 border-[#111827] shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] transform rotate-2 max-w-md w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-xl border-2 border-slate-200">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-lg">Mark Thompson</div>
                    <div className="flex text-[#1b8b3d]">★★★★★</div>
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  &quot;I didn&apos;t want to spend 3 hours coding a carousel. KudoGrid gave me a drop-in snippet that works flawlessly on mobile and desktop.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ONE WIDGET. EVERY TEMPLATE. */}
        <section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-200">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="flex-1 flex flex-col items-center">
              <SkateboardMascot className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mb-8" />
              <div className="text-3xl text-[#111827] transform -rotate-3" style={{ fontFamily: "'Caveat', cursive" }}>
                yeah, he does kickflips too.
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[#1b8b3d] text-sm font-bold tracking-widest uppercase mb-4">/02 · Conversion Optimized</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">One tool. Every template.</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                We do the design work. You get the conversions. Connect your tools and we&apos;ll automatically format your reviews into beautiful, high-performing UI components.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#1b8b3d] rounded-full flex items-center justify-center text-white shrink-0">✓</div>
                  <span className="font-bold">Animated carousels</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#1b8b3d] rounded-full flex items-center justify-center text-white shrink-0">✓</div>
                  <span className="font-bold">Static grid walls</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#1b8b3d] rounded-full flex items-center justify-center text-white shrink-0">✓</div>
                  <span className="font-bold">Endless scrolling marquee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#1b8b3d] rounded-full flex items-center justify-center text-white shrink-0">✓</div>
                  <span className="font-bold">Zero-code drop-in install</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: GREEN SETUP CARD */}
        <section id="demo" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto bg-[#1b8b3d] rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="flex-1 z-10 text-white">
              <p className="text-green-200 text-sm font-bold tracking-widest uppercase mb-4">— 1-MINUTE SETUP</p>
              <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">You build.<br/>We convert.</h2>
              <p className="text-lg text-green-50 mb-10 max-w-md font-medium leading-relaxed">
                1. Connect accounts.<br/>
                2. Pick a template.<br/>
                3. Copy the code snippet. Done.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link href="/login" className="bg-white text-[#1b8b3d] hover:bg-slate-50 font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto transition-colors text-center shadow-xl">
                  Try KudoGrid &rarr;
                </Link>
                <Link href="mailto:support@kudogrid.com" className="text-white hover:text-green-200 font-bold underline underline-offset-4 transition-colors">
                  or email support@kudogrid.com
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full z-10">
              <div className="bg-[#111827] rounded-3xl p-6 border-4 border-[#0f172a] shadow-2xl transform rotate-2 mx-auto max-w-md">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm text-slate-300">
                  <div className="text-emerald-400 mb-2">{/* 1. Drop this in your site */}</div>
                  <div className="mb-4">
                    <span className="text-pink-400">&lt;script</span> <span className="text-blue-300">src</span>=<span className="text-yellow-300">&quot;kudogrid.com/widget.js&quot;</span><span className="text-pink-400">&gt;&lt;/script&gt;</span>
                  </div>
                  <div className="text-emerald-400 mb-2">{/* 2. Place your Wall of Love */}</div>
                  <div>
                    <span className="text-pink-400">&lt;div</span> <span className="text-blue-300">id</span>=<span className="text-yellow-300">&quot;kudo-wall&quot;</span><span className="text-pink-400">&gt;&lt;/div&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-16 mt-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MascotImage className="w-8 h-8" />
              <span className="font-extrabold text-xl tracking-tight text-[#111827]">KUDOGRID</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs mb-8 font-medium">
              Turn your happiest customers into your most effective marketing channel automatically.
            </p>
            <p className="text-slate-400 text-sm font-bold">&copy; {new Date().getFullYear()} KudoGrid. All rights reserved.</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[#111827] uppercase tracking-widest text-xs">Product</span>
              <Link href="/login" className="text-sm font-bold text-slate-500 hover:text-[#1b8b3d]">Sign in</Link>
              <Link href="/login" className="text-sm font-bold text-slate-500 hover:text-[#1b8b3d]">Start free trial</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[#111827] uppercase tracking-widest text-xs">Legal</span>
              <Link href="/privacy" className="text-sm font-bold text-slate-500 hover:text-[#1b8b3d]">Privacy Policy</Link>
              <Link href="/terms" className="text-sm font-bold text-slate-500 hover:text-[#1b8b3d]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
