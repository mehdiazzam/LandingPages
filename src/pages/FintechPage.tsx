import { type FC } from 'react'
import GlobalHeader from '../components/GlobalHeader'
import styles from './FintechPage.module.css'

interface Props {
  onBack: () => void
}

const FintechPage: FC<Props> = ({ onBack }) => {
  

  const marqueeItems = [
    'Instant Settlement', 'Global Coverage', 'SOC-2 Certified',
    'Sub-2ms Latency', 'Open API', '99.99% Uptime',
  ]

  return (
    <div className={styles.page}>
      <GlobalHeader
        title="Fintech landing page"
        subtitle="Vaultr payments infrastructure for modern finance."
        accent="#c8f04e"
        tone="dark"
        compact
        onBack={onBack}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.heroEyebrow}>// Infrastructure for modern finance</p>
          <h1 className={styles.heroHeadline}>
            Move<br />
            <em>money</em><br />
            at the<br />
            speed of<br />
            code.
          </h1>
          <p className={styles.heroSub}>
            Vaultr is the programmable money layer built for developers.
            Sub-millisecond settlements, global coverage, and APIs
            that actually make sense.
          </p>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroChartArea}>
            <div className={styles.chartLabel}>Portfolio performance — 12M</div>
            <div className={styles.chartWrapper}>
              <svg width="100%" height="100%" viewBox="0 0 500 240" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c8f04e" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c8f04e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="60"  x2="500" y2="60"  stroke="#1e1e1e" strokeWidth="1"/>
                <line x1="0" y1="120" x2="500" y2="120" stroke="#1e1e1e" strokeWidth="1"/>
                <line x1="0" y1="180" x2="500" y2="180" stroke="#1e1e1e" strokeWidth="1"/>
                <path d="M0,200 C40,180 60,160 100,130 C140,100 160,110 200,90 C240,70 260,80 300,55 C340,30 380,40 420,25 C450,14 480,18 500,10 L500,240 L0,240 Z" fill="url(#chartGrad)"/>
                <path d="M0,200 C40,180 60,160 100,130 C140,100 160,110 200,90 C240,70 260,80 300,55 C340,30 380,40 420,25 C450,14 480,18 500,10" fill="none" stroke="#c8f04e" strokeWidth="1.5"/>
                <circle cx="500" cy="10" r="4" fill="#c8f04e"/>
                <circle cx="500" cy="10" r="8" fill="none" stroke="#c8f04e" strokeWidth="1" opacity="0.4"/>
                <text x="4" y="58"  fontFamily="Space Mono" fontSize="9" fill="#444">$180K</text>
                <text x="4" y="118" fontFamily="Space Mono" fontSize="9" fill="#444">$120K</text>
                <text x="4" y="178" fontFamily="Space Mono" fontSize="9" fill="#444">$60K</text>
                <text x="0"   y="235" fontFamily="Space Mono" fontSize="9" fill="#444">JAN</text>
                <text x="120" y="235" fontFamily="Space Mono" fontSize="9" fill="#444">MAR</text>
                <text x="250" y="235" fontFamily="Space Mono" fontSize="9" fill="#444">JUN</text>
                <text x="380" y="235" fontFamily="Space Mono" fontSize="9" fill="#444">SEP</text>
                <text x="460" y="235" fontFamily="Space Mono" fontSize="9" fill="#444">DEC</text>
              </svg>
            </div>
          </div>
          <div className={styles.tickerRow}>
            {[
              { label: 'BTC/USD', value: '$68,240', delta: '+2.4%', pos: true },
              { label: 'ETH/USD', value: '$3,812', delta: '−0.8%', pos: false },
              { label: 'Portfolio', value: '$214K', delta: '+18.3%', pos: true },
            ].map((t) => (
              <div key={t.label} className={styles.tickerItem}>
                <div className={styles.tickerLabel}>{t.label}</div>
                <div className={styles.tickerValue}>{t.value}</div>
                <div className={`${styles.tickerDelta} ${!t.pos ? styles.neg : ''}`}>{t.delta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeInner} >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item} <span>✓</span>
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES GRID */}
      <section className={styles.gridSection}>
        {[
          {
            num: '01 —', title: 'Unified\nLedger API',
            body: 'A single programmable ledger for every transaction type. Debits, credits, transfers — reconciled in real-time across any currency.',
            icon: (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="7" height="7" stroke="#c8f04e" strokeWidth="1"/>
                <rect x="11" y="2" width="7" height="7" stroke="#555" strokeWidth="1"/>
                <rect x="2" y="11" width="7" height="7" stroke="#555" strokeWidth="1"/>
                <rect x="11" y="11" width="7" height="7" stroke="#555" strokeWidth="1"/>
              </svg>
            ),
          },
          {
            num: '02 —', title: 'Real-Time\nRisk Engine',
            body: 'ML-driven fraud detection that scores every transaction in under 50ms. Configurable rules, zero false-positive frustration.',
            icon: (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#c8f04e" strokeWidth="1"/>
                <path d="M10 6 L10 10 L14 12" stroke="#c8f04e" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            num: '03 —', title: 'Smart\nRouting',
            body: 'Dynamically routes payments through the cheapest, fastest rail available. Stripe, ACH, SWIFT, SEPA — all in one abstraction.',
            icon: (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 16 L10 4 L18 16" stroke="#c8f04e" strokeWidth="1" strokeLinejoin="round"/>
                <path d="M5 12 L10 8 L15 12" stroke="#555" strokeWidth="1" strokeLinejoin="round"/>
              </svg>
            ),
          },
        ].map((cell) => (
          <div key={cell.num} className={styles.gridCell}>
            <div className={styles.cellNum}>{cell.num}</div>
            <div className={styles.cellIcon}>{cell.icon}</div>
            <h3 className={styles.cellTitle}>{cell.title.split('\n').map((l, i) => <span key={i}>{l}<br/></span>)}</h3>
            <p className={styles.cellBody}>{cell.body}</p>
            <div className={styles.cellAccent}/>
          </div>
        ))}
      </section>

      {/* STATS */}
      <section className={styles.statBand}>
        {[
          { num: '$4.2B', desc: 'Processed monthly' },
          { num: '1.8ms', desc: 'Avg. settlement time' },
          { num: '190+', desc: 'Countries supported' },
          { num: '99.99%', desc: 'Uptime SLA' },
        ].map((s) => (
          <div key={s.num} className={styles.statCell}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statDesc}>{s.desc}</span>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Build<br />without<br /><em>limits.</em>
        </h2>
        <div className={styles.ctaRight}>
          <p className={styles.ctaText}>
            Join 2,400+ teams who've replaced their patchwork payment stack with Vaultr.
            Go live in days, not months. No minimums, no lock-in.
          </p>
          <a href="#" className={styles.ctaBtn}>Start building <span>→</span></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>VAULTR_ ©2025</div>
        <div className={styles.footerLegal}>Financial infrastructure for developers. Not a bank.</div>
      </footer>
    </div>
  )
}

export default FintechPage
