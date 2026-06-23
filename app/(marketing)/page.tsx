import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './landing.module.css';

export const metadata: Metadata = {
  title: 'KudoGrid | Your Automated Wall of Love',
  description: 'Turn 5-star Google reviews and Twitter social proof into beautiful, animated testimonial walls in seconds. The ultimate B2B SaaS review widget.',
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

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image src="/Kudo_Mascott.png" alt="KudoGrid Logo" width={36} height={36} />
          KudoGrid
        </Link>
        <Link href="/login" className={styles.btnPrimary}>
          Get started
        </Link>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.headline}>Your automated<br />wall of love.</h1>
          <p className={styles.subheadline}>
            Stop manually screenshotting tweets and copying text. KudoGrid instantly grabs your best 5-star Google reviews and X (Twitter) social proof, turning them into a beautiful, high-converting animated testimonial wall. No-code testimonial embed in seconds.
          </p>
          <div className={styles.heroActions}>
            <Link href="/login" className={styles.btnPrimary}>Get started for free</Link>
            <Link href="#demo" className={styles.btnSecondary}>See how it works</Link>
          </div>
        </div>
        
        <div className={styles.heroRight}>
          <Image src="/Kudo_Mascott.png" alt="Kudo the Mascot" width={400} height={400} className={styles.mascotHero} priority />
          <div className={styles.arrowAnnotation}>
            Kudo pulls your best reviews!
          </div>
          
          <div className={`${styles.reviewCard} ${styles.reviewCard1}`}>
            <div className={styles.reviewHeader}>
              <div className={styles.reviewer}>
                <div className={styles.avatar}>S</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Sarah Jenkins</div>
                  <div className={styles.stars}>★★★★★</div>
                </div>
              </div>
              <div className={`${styles.platformIcon} ${styles.iconGoogle}`}>G</div>
            </div>
            <div className={styles.reviewText}>
              &quot;KudoGrid completely changed our landing page. Conversion rates are up 12% since installing it!&quot;
            </div>
          </div>
          
          <div className={`${styles.reviewCard} ${styles.reviewCard2}`}>
            <div className={styles.reviewHeader}>
              <div className={styles.reviewer}>
                <div className={styles.avatar}>D</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>David Miller</div>
                  <div className={styles.stars}>★★★★★</div>
                </div>
              </div>
              <div className={`${styles.platformIcon} ${styles.iconX}`}>X</div>
            </div>
            <div className={styles.reviewText}>
              &quot;Just dropped KudoGrid on my site and it pulled all my 5-star tweets instantly. Literal magic. 🤯&quot;
            </div>
          </div>
        </div>
      </header>

      {/* Geo Banner */}
      <div className={styles.geoBanner}>
        Trusted by fast-growing SaaS startups and local service businesses in London and worldwide.
      </div>

      {/* Value Prop / Feature Grid */}
      <section className={styles.valueProp}>
        <div className={styles.valueLeft}>
          <Image src="/Kudo_Mascott.png" alt="Kudo Mascot Skateboard" width={300} height={300} className={styles.mascotHero} />
        </div>
        <div className={styles.valueRight}>
          <h2 className={styles.sectionHeadline}>One widget.<br />Every platform.</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.featureText}>Connects in seconds</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.featureText}>Animated layouts</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.featureText}>Auto-syncs new reviews</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.featureText}>Mobile-responsive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className={styles.detailSection}>
        <div className={styles.detailLeft}>
          <span className={styles.eyebrow}>High-converting</span>
          <h2 className={styles.sectionHeadline}>Turn praise into profit.</h2>
          <p className={styles.paragraph}>
            Your future customers want to know that others trust you. KudoGrid provides a zero-code testimonial embed that aggregates your best Google Reviews and Twitter mentions into a stunning UI. Stop losing leads due to a lack of social proof.
          </p>
        </div>
        <div className={styles.detailRight}>
          <div className={styles.uiMockup}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            </div>
            <div style={{ background: '#F3F4F6', height: '16px', borderRadius: '4px', width: '40%', marginBottom: '16px' }} />
            <div style={{ background: '#E5E7EB', height: '12px', borderRadius: '4px', width: '100%', marginBottom: '8px' }} />
            <div style={{ background: '#E5E7EB', height: '12px', borderRadius: '4px', width: '90%', marginBottom: '24px' }} />
            <div style={{ background: '#268E51', height: '40px', borderRadius: '8px', width: '120px' }} />
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className={styles.setupSection} id="demo">
        <div className={styles.setupBlock}>
          <div className={styles.setupLeft}>
            <h2 className={styles.setupHeadline}>Setup in<br />60 seconds.</h2>
            <ul className={styles.setupList}>
              <li><span>1.</span> Sign up for an account</li>
              <li><span>2.</span> Pay and unlock premium tools</li>
              <li><span>3.</span> Connect Google Reviews or X</li>
              <li><span>4.</span> Select a gorgeous template</li>
              <li><span>5.</span> Paste the snippet on your site</li>
            </ul>
            <Link href="/login" style={{ backgroundColor: 'white', color: '#268E51', padding: '16px 32px', borderRadius: '9999px', fontWeight: 800, textDecoration: 'none', display: 'inline-block' }}>
              Start Building &rarr;
            </Link>
          </div>
          <div className={styles.setupRight}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}></div>
                <div className={styles.phoneReview}>
                  <div className={styles.phoneLine}></div>
                  <div className={styles.phoneLine}></div>
                  <div className={styles.phoneLine}></div>
                </div>
                <div className={styles.phoneReview}>
                  <div className={styles.phoneLine}></div>
                  <div className={styles.phoneLine}></div>
                  <div className={styles.phoneLine}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <Image src="/Kudo_Mascott.png" alt="KudoGrid Logo" width={36} height={36} />
                KudoGrid
              </div>
              <p style={{ opacity: 0.8, lineHeight: 1.6, fontWeight: 500 }}>
                The automated social proof widget for B2B SaaS. Embed Google reviews widget and Twitter social proof instantly.
              </p>
            </div>
            
            <div className={styles.footerLinks}>
              <div className={styles.linkColumn}>
                <span className={styles.linkTitle}>Product</span>
                <Link href="#demo" className={styles.footerLink}>Features</Link>
                <Link href="/login" className={styles.footerLink}>Pricing</Link>
                <Link href="/login" className={styles.footerLink}>Get Started</Link>
              </div>
              <div className={styles.linkColumn}>
                <span className={styles.linkTitle}>Company</span>
                <Link href="#" className={styles.footerLink}>About Us</Link>
                <Link href="#" className={styles.footerLink}>Contact</Link>
              </div>
              <div className={styles.linkColumn}>
                <span className={styles.linkTitle}>Resources</span>
                <Link href="#" className={styles.footerLink}>Blog</Link>
                <Link href="#" className={styles.footerLink}>Help Center</Link>
                <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <div>&copy; {new Date().getFullYear()} KudoGrid. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="#" className={styles.footerLink}>Twitter</Link>
              <Link href="#" className={styles.footerLink}>LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
