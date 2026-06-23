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

const MascotSVG = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#000" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="#1b8b3d">
      <path d="M 40 100 L 90 100 C 90 100, 95 40, 115 30 C 135 20, 150 40, 130 75 C 130 75, 160 70, 180 75 C 200 80, 205 95, 190 110 C 205 115, 205 130, 190 145 C 205 150, 200 170, 185 180 C 170 190, 120 195, 40 190 Z" />
      <path d="M 170 110 L 130 110" fill="none" strokeWidth="12" />
      <path d="M 175 145 L 135 145" fill="none" strokeWidth="12" />
      <circle cx="95" cy="120" r="8" fill="#000" stroke="none" />
      <circle cx="125" cy="115" r="8" fill="#000" stroke="none" />
      <path d="M 90 145 Q 115 165 145 140" strokeWidth="10" fill="none" />
    </g>
    <g stroke="#000" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M 100 195 L 100 235 L 115 235" />
      <path d="M 140 195 L 140 235 L 155 235" />
    </g>
  </svg>
);

const SkateboardMascot = ({ className = '' }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <MascotSVG className="w-full h-full relative z-10" />
    {/* Skateboard */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-[#000] rounded-full z-0 transform -rotate-2">
      <div className="absolute -bottom-2 left-4 w-4 h-4 bg-[#4a5568] rounded-full border-2 border-black" />
      <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#4a5568] rounded-full border-2 border-black" />
    </div>
  </div>
);

const NotificationCard = ({ text, time, platform }: { text: string; time: string; platform: 'X' | 'Google' }) => (
  <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-100 max-w-sm w-full font-sans">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <div className={`w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold ${platform === 'X' ? 'bg-slate-900' : 'bg-[#4285F4]'}`}>
          {platform === 'X' ? 'X' : 'G'}
        </div>
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">New Review</span>
      </div>
      <span className="text-xs text-slate-400">{time}</span>
    </div>
    <div className="font-bold text-sm text-[#111827] mb-1">KudoGrid</div>
    <div className="text-sm text-slate-600 leading-relaxed">{text}</div>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#111827] font-sans selection:bg-[#1b8b3d] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HEADER */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white rounded-full px-6 py-3 shadow-sm border border-slate-200 flex items-center gap-12 w-full max-w-[800px]">
          <Link href="/" className="flex items-center gap-2">
            <MascotSVG className="w-8 h-8" />
            <span className="font-extrabold text-xl tracking-tight text-[#111827]">KUDOGRID</span>
          </Link>
          <nav className="hidden md:flex flex-1" />
          <Link href="/login" className="bg-[#1b8b3d] hover:bg-[#156e30] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Get started
          </Link>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="pt-48 pb-24 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#1b8b3d]"></span>
              The Zero-Code Widget
            </div>
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
              <MascotSVG className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]" />
              
              {/* Hand-drawn annotation */}
              <div className="absolute -top-12 -right-12 lg:-right-24 transform rotate-12 flex flex-col items-center">
                <span className="text-2xl text-[#111827] leading-none mb-2" style={{ fontFamily: "'Caveat', cursive" }}>
                  Kudo. He&apos;s got your back.
                </span>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#111827] rotate-45">
                  <path d="M5 9l4-4 4 4" />
                  <path d="M9 5v14" />
                </svg>
              </div>

              {/* Floating Notifications */}
              <div className="absolute -bottom-10 -left-10 lg:-left-32 transform -rotate-6 z-20">
                <NotificationCard 
                  platform="Google"
                  time="2m ago"
                  text="Synced 14 new 5-star reviews from Google Business Profile. Wall of Love updated."
                />
              </div>
              <div className="absolute bottom-16 -left-4 lg:-left-20 transform rotate-3 z-10 opacity-90 scale-95">
                <NotificationCard 
                  platform="X"
                  time="1h ago"
                  text="Found 3 new mentions on X. Added to the carousel template queue."
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
                    S
                  </div>
                  <div>
                    <div className="font-bold text-lg">Sarah Jenkins</div>
                    <div className="flex text-[#1b8b3d]">★★★★★</div>
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  &quot;I installed KudoGrid in 2 minutes. Our conversion rate instantly jumped 14%. The zero-code embed is exactly what we needed.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ONE WIDGET. EVERY TEMPLATE. */}
        <section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-200">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="flex-1 flex flex-col items-center">
              <SkateboardMascot className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mb-8" />
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
              <MascotSVG className="w-8 h-8" />
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
