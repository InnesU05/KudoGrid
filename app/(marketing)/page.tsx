import type { Metadata } from 'next';
import Link from 'next/link';
import { LayoutGrid, Code, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'KudoGrid | Turn your best reviews into your best salespeople',
  description: 'Automatically pull 5-star reviews from Google, Twitter, and custom forms into beautiful, animated UI widgets for your website.',
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

const Mascot = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kudo Mascot">
    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 19.5492 5.53934 22.7388 8.05886 24.9042L6 28L9.93291 26.6888C11.7588 27.5348 13.8188 28 16 28Z" fill="#0f172a" />
    <circle cx="12" cy="15" r="1.5" fill="white" />
    <circle cx="20" cy="15" r="1.5" fill="white" />
    <path d="M13 19C13 19 14.5 21 16 21C17.5 21 19 19 19 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 0L17.5 3L21 3.5L18 6L19 9.5L16 7.5L13 9.5L14 6L11 3.5L14.5 3L16 0Z" fill="#10b981" />
  </svg>
);

const TwitterCard = ({ name, handle, text }: { name: string; handle: string; text: string }) => (
  <div className="w-80 flex-shrink-0 bg-white border border-slate-200 p-6 shadow-sm rounded-none">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
        {name.charAt(0)}
      </div>
      <div>
        <div className="flex items-center gap-1">
          <span className="font-bold text-slate-900 text-sm">{name}</span>
          <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
        </div>
        <div className="text-slate-500 text-xs">@{handle}</div>
      </div>
    </div>
    <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
  </div>
);

const GoogleCard = ({ name, text }: { name: string; text: string }) => (
  <div className="w-80 flex-shrink-0 bg-white border border-slate-200 p-6 shadow-sm rounded-none">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">
          {name.charAt(0)}
        </div>
        <div>
          <span className="font-bold text-slate-900 text-sm block">{name}</span>
          <span className="text-slate-400 text-xs">a day ago</span>
        </div>
      </div>
      <svg className="w-5 h-5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    </div>
    <div className="flex text-emerald-600 mb-3 text-lg">★★★★★</div>
    <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
  </div>
);

const MOCK_REVIEWS = [
  <TwitterCard key="1" name="Sarah Jenkins" handle="sjenkins_dev" text="I installed KudoGrid in 2 minutes. Our conversion rate instantly jumped 14%. The zero-code embed is actually zero code." />,
  <GoogleCard key="2" name="Marcus Aurelius" text="Incredible micro-SaaS. Cleanest widgets I've ever seen, completely destroyed the bloated alternatives we were paying $50/mo for." />,
  <TwitterCard key="3" name="David Chen" handle="davidchen" text="Finally a wall of love that doesn't look like it was built in 2012. The minimalist templates fit perfectly into our brand." />,
  <GoogleCard key="4" name="Elena Rust" text="The ROI is absurd. Set it up once, and now 5-star Google reviews automatically stream onto our checkout page." />,
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Mascot />
            <span className="font-bold tracking-tight text-xl">KudoGrid</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="#features" className="hover:text-slate-900 transition-colors">Features</Link>
            <Link href="#demo" className="hover:text-slate-900 transition-colors">Integrations</Link>
            <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
              Log in
            </Link>
            <Link href="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 py-2.5 transition-colors">
              Start for free
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Turn your best reviews into your <span className="text-emerald-600">best salespeople.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Automatically pull 5-star reviews from Google, Twitter, and custom forms into beautiful, animated UI widgets for your website. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-8 py-4 w-full sm:w-auto transition-colors text-center">
                Build your Wall of Love — Free
              </Link>
              <p className="text-sm text-slate-400 font-medium mt-2 sm:mt-0">No credit card required.</p>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto relative">
            {/* Minimalist Dashboard Mock */}
            <div className="relative z-10 bg-white border border-slate-200 shadow-xl p-4 w-full max-w-md mx-auto lg:ml-auto flex flex-col gap-4">
              <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                <span className="font-bold text-sm">Dashboard</span>
                <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1">Widget Active</span>
              </div>
              <div className="h-24 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 text-sm">
                Connect Google Business
              </div>
              <div className="h-24 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 text-sm">
                Connect Twitter
              </div>
            </div>

            {/* Fading Marquee Strip */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-32 lg:-right-48 w-[600px] h-[400px] -z-10 opacity-40 lg:opacity-100 rotate-12 mask-image-fade">
              <div className="flex gap-4 animate-marquee hover:pause whitespace-nowrap pt-12">
                {[...MOCK_REVIEWS, ...MOCK_REVIEWS].map((review, i) => (
                  <div key={i} className="inline-block whitespace-normal">{review}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-12 border-y border-slate-100 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by conversion-obsessed founders</p>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale">
              {/* Minimalist Geometric Logomarks */}
              <svg width="120" height="30" viewBox="0 0 120 30" fill="currentColor" className="text-slate-900"><path d="M0 15L15 0H30L15 15L30 30H15L0 15Z" /><text x="40" y="22" className="font-bold text-xl" fill="currentColor">ACME</text></svg>
              <svg width="120" height="30" viewBox="0 0 120 30" fill="currentColor" className="text-slate-900"><circle cx="15" cy="15" r="10"/><circle cx="25" cy="15" r="10"/><text x="45" y="22" className="font-bold text-xl" fill="currentColor">NEXUS</text></svg>
              <svg width="120" height="30" viewBox="0 0 120 30" fill="currentColor" className="text-slate-900"><rect x="0" y="5" width="20" height="20" /><rect x="10" y="0" width="20" height="20" fill="white" stroke="currentColor" strokeWidth="2"/><text x="45" y="22" className="font-bold text-xl" fill="currentColor">OASIS</text></svg>
              <svg width="120" height="30" viewBox="0 0 120 30" fill="currentColor" className="text-slate-900"><path d="M0 30L15 0L30 30H0Z" /><text x="40" y="22" className="font-bold text-xl" fill="currentColor">PEAK</text></svg>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Set up once. Sell forever.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Skip the manual copy-pasting. We built a system that actively hunts for your best reviews and serves them to your visitors instantly.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-slate-50 p-10 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">1. Connect</h3>
              <p className="text-slate-600 leading-relaxed">Sync your Google, Twitter, or send custom collection links. We automatically filter out anything under 4 stars.</p>
            </article>

            <article className="bg-slate-50 p-10 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                <LayoutGrid className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">2. Choose a Template</h3>
              <p className="text-slate-600 leading-relaxed">Pick from animated scrolling walls, minimalist static grids, or elegant carousel sliders.</p>
            </article>

            <article className="bg-slate-50 p-10 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">3. Drop it in</h3>
              <p className="text-slate-600 leading-relaxed">Copy one single line of code. Works flawlessly on WordPress, Webflow, Framer, and custom React sites.</p>
            </article>
          </div>
        </section>

        {/* LIVE DEMO MARQUEE */}
        <section id="demo" className="py-24 bg-slate-900 overflow-hidden">
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">See it in action</h2>
            <p className="text-slate-400">This is exactly what your customers will see on your site.</p>
          </div>
          
          <div className="flex gap-6 animate-marquee hover:pause whitespace-nowrap">
            {[...MOCK_REVIEWS, ...MOCK_REVIEWS, ...MOCK_REVIEWS].map((review, i) => (
              <div key={i} className="inline-block whitespace-normal">{review}</div>
            ))}
          </div>
          <div className="flex gap-6 animate-marquee hover:pause whitespace-nowrap mt-6" style={{ animationDirection: 'reverse' }}>
            {[...MOCK_REVIEWS, ...MOCK_REVIEWS, ...MOCK_REVIEWS].reverse().map((review, i) => (
              <div key={i} className="inline-block whitespace-normal">{review}</div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-slate-600">Start free. Upgrade when your revenue grows.</p>
            
            <div className="mt-8 inline-flex bg-slate-50 border border-slate-200 p-1">
              <button className="px-6 py-2 bg-white border border-slate-200 shadow-sm font-bold text-sm text-slate-900">Monthly</button>
              <button className="px-6 py-2 font-bold text-sm text-slate-500 hover:text-slate-900">Yearly <span className="text-emerald-600 ml-1">-20%</span></button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Hobby Card */}
            <div className="border border-slate-200 p-10 flex flex-col bg-white hover:border-slate-300 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Hobby</h3>
              <p className="text-slate-500 mb-6 h-12">Perfect for validating a new idea.</p>
              <div className="text-4xl font-extrabold mb-8">$0<span className="text-lg font-normal text-slate-400">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Up to 100 manual reviews
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  1 active widget
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Basic static grid template
                </li>
              </ul>
              <Link href="/login" className="w-full py-4 border border-slate-900 text-slate-900 font-bold text-center hover:bg-slate-50 transition-colors">Get Started</Link>
            </div>

            {/* Pro Card */}
            <div className="border-2 border-emerald-600 p-10 flex flex-col bg-white relative shadow-lg">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-emerald-600 text-white font-bold text-xs px-3 py-1 uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-slate-500 mb-6 h-12">For serious founders optimizing for conversion.</p>
              <div className="text-4xl font-extrabold mb-8">$19<span className="text-lg font-normal text-slate-400">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Unlimited manual reviews
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Auto-sync Twitter & Google
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Unlimited active widgets
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Animated marquee & carousels
                </li>
              </ul>
              <Link href="/login" className="w-full py-4 bg-emerald-600 text-white font-bold text-center hover:bg-emerald-700 transition-colors">Start 14-Day Free Trial</Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mascot className="w-8 h-8" />
              <span className="font-bold text-lg text-slate-900">KudoGrid</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs mb-8">
              Building trust shouldn&apos;t be hard. Turn your happiest customers into your most effective marketing channel automatically.
            </p>
            <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} KudoGrid. All rights reserved.</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-slate-900 mb-2">Product</span>
              <Link href="#features" className="text-sm text-slate-500 hover:text-slate-900">Features</Link>
              <Link href="#pricing" className="text-sm text-slate-500 hover:text-slate-900">Pricing</Link>
              <Link href="#demo" className="text-sm text-slate-500 hover:text-slate-900">Templates</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-slate-900 mb-2">Legal</span>
              <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-900">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
