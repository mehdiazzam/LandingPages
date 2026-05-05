import { type FC, useState } from 'react'
import GlobalHeader from './GlobalHeader'
import styles from './Hub.module.css'

type PageId = 'fintech' | 'restaurant' | 'music'

interface HubProps {
  onSelect: (page: PageId) => void
}

const pages: {
  id: PageId
  index: string
  brand: string
  tagline: string
  description: string
  industry: string
  palette: string[]
  accent: string
  bg: string
  textPrimary: string
  textSecondary: string
  borderColor: string
  font: string
  tags: string[]
  preview: React.ReactNode
}[] = [
  {
    id: 'fintech',
    index: '01',
    brand: 'Vaultr',
    tagline: 'Move money at the speed of code.',
    description: 'Data-first interface with precise charts, sharp typography, and muted depth for institutional clarity.',
    industry: 'Fintech · Payments Infrastructure',
    palette: ['#c8f04e', '#0a0a0a', '#1a1a1a'],
    accent: '#c8f04e',
    bg: '#080808',
    textPrimary: '#f0ede6',
    textSecondary: '#555',
    borderColor: '#1e1e1e',
    font: "'Space Mono', monospace",
    tags: ['Dark', 'Brutalist', 'Editorial'],
    preview: (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
        <defs>
          <linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8f04e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c8f04e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="50" x2="320" y2="50" stroke="#1e1e1e" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="320" y2="100" stroke="#1e1e1e" strokeWidth="0.5" />
        <path d="M0,140 C40,125 70,110 100,90 C130,70 155,78 185,60 C215,42 240,30 270,16 C290,8 305,10 320,4" fill="none" stroke="#c8f04e" strokeWidth="1.5" />
        <path d="M0,140 C40,125 70,110 100,90 C130,70 155,78 185,60 C215,42 240,30 270,16 C290,8 305,10 320,4 L320,160 L0,160 Z" fill="url(#fg1)" />
        <circle cx="320" cy="4" r="4" fill="#c8f04e" />
        <circle cx="320" cy="4" r="8" fill="none" stroke="#c8f04e" strokeWidth="1" opacity="0.35" />
        <text x="8" y="48" fontFamily="Space Mono" fontSize="8" fill="#333">$180K</text>
        <text x="8" y="98" fontFamily="Space Mono" fontSize="8" fill="#333">$90K</text>
        <text x="0"   y="156" fontFamily="Space Mono" fontSize="8" fill="#333">JAN</text>
        <text x="146" y="156" fontFamily="Space Mono" fontSize="8" fill="#333">JUN</text>
        <text x="290" y="156" fontFamily="Space Mono" fontSize="8" fill="#333">DEC</text>
        <rect x="200" y="20" width="60" height="28" rx="2" fill="#111" stroke="#1e1e1e" strokeWidth="0.5"/>
        <text x="230" y="31" textAnchor="middle" fontFamily="Space Mono" fontSize="7" fill="#555">PORTFOLIO</text>
        <text x="230" y="43" textAnchor="middle" fontFamily="Space Mono" fontSize="9" fill="#c8f04e">+18.3%</text>
      </svg>
    ),
  },
  {
    id: 'restaurant',
    index: '02',
    brand: 'Farro',
    tagline: 'Honest food, rooted in season.',
    description: 'Warm editorial rhythm with organic textures, soft serif voice, and calm seasonal storytelling.',
    industry: 'Restaurant · Farm-to-Table',
    palette: ['#c4683a', '#3d2b1a', '#f5f0e8'],
    accent: '#c4683a',
    bg: '#f5f0e8',
    textPrimary: '#3d2b1a',
    textSecondary: '#8b6b4a',
    borderColor: '#d5c9b5',
    font: "'Fraunces', serif",
    tags: ['Light', 'Organic', 'Editorial'],
    preview: (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
        <circle cx="160" cy="80" r="68" stroke="#d5c9b5" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="160" cy="80" r="54" stroke="#c9c4b8" strokeWidth="0.5" />
        <path d="M160 20 Q167 44 160 58 Q153 44 160 20" fill="#7a8c6e" opacity="0.55" />
        <path d="M160 102 Q167 116 160 140 Q153 116 160 102" fill="#7a8c6e" opacity="0.55" />
        <path d="M96 80 Q116 86 130 80 Q116 74 96 80" fill="#7a8c6e" opacity="0.55" />
        <path d="M190 80 Q204 86 224 80 Q204 74 190 80" fill="#7a8c6e" opacity="0.55" />
        <circle cx="160" cy="80" r="32" fill="#ede5d5" stroke="#d5c9b5" strokeWidth="0.5" />
        <text x="160" y="76" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="11" fill="#8b6b4a" fontStyle="italic">spring</text>
        <text x="160" y="92" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="20" fill="#3d2b1a" fontWeight="600">7</text>
        <text x="160" y="101" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="7" fill="#8b6b4a">courses</text>
      </svg>
    ),
  },
  {
    id: 'music',
    index: '03',
    brand: 'NEXUS',
    tagline: 'SYSTEM ACTIVE // 13.08.2045',
    description: 'Y2K retro rave aesthetic featuring classic OS window borders, CRT overlays, and monospace glitch text.',
    industry: 'Underground Rave · Cyberpunk',
    palette: ['#ccff00', '#00ffff', '#ff00ff'],
    accent: '#ccff00',
    bg: '#000000',
    textPrimary: '#ffffff',
    textSecondary: '#808080',
    borderColor: '#dfdfdf',
    font: "'IBM Plex Mono', monospace",
    tags: ['Y2K', 'Retro', 'Glitch'],
    preview: (
      <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
        <g transform="translate(40, 20)">
          {/* OS Window Frame */}
          <rect x="0" y="0" width="240" height="120" fill="#c0c0c0" stroke="#dfdfdf" strokeWidth="2" />
          <path d="M 0 120 L 240 120 L 240 0" stroke="#000000" strokeWidth="2" fill="none" />
          
          {/* Title Bar */}
          <rect x="4" y="4" width="232" height="16" fill="#0000a0" />
          <text x="8" y="15" fontFamily="IBM Plex Mono" fontSize="8" fill="#ffffff" fontWeight="bold">nexus_core.exe</text>
          
          {/* Title Buttons */}
          <rect x="220" y="6" width="12" height="12" fill="#c0c0c0" stroke="#dfdfdf" strokeWidth="1"/>
          
          {/* Inner Window */}
          <rect x="4" y="24" width="232" height="92" fill="#000000" />
          <path d="M 4 116 L 236 116 L 236 24" stroke="#dfdfdf" strokeWidth="2" fill="none" />
          
          {/* Glitch Content Dummy */}
          <text x="120" y="70" fontFamily="IBM Plex Mono" fontSize="24" fill="#ffffff" fontWeight="bold" textAnchor="middle">NEXUS</text>
          <text x="121" y="70" fontFamily="IBM Plex Mono" fontSize="24" fill="#ccff00" fontWeight="bold" textAnchor="middle" opacity="0.8">NEXUS</text>
          <text x="119" y="70" fontFamily="IBM Plex Mono" fontSize="24" fill="#ff00ff" fontWeight="bold" textAnchor="middle" opacity="0.8">NEXUS</text>
          
          {/* Loading Bar Mockup */}
          <rect x="40" y="90" width="160" height="6" fill="#222" />
          <rect x="40" y="90" width="100" height="6" fill="#ccff00" />
        </g>
      </svg>
    ),
  },
]

const Hub: FC<HubProps> = ({ onSelect }) => {
  const [hovered, setHovered] = useState<PageId | null>(null)

  const active = hovered ? pages.find(p => p.id === hovered) : null

  return (
    <div className={styles.hub}>
      <GlobalHeader
        title="Landing pages"
        subtitle="Three design systems with their own type, color, and motion rules. Choose a page to explore."
        meta="Collection 2025"
        accent="#c8f04e"
        tone="dark"
      />

      {/* CARDS GRID */}
      <main className={styles.cardGrid}>
        {pages.map((page) => (
          <div key={page.id} className={styles.cardRow}>
            <article
              className={`${styles.card} ${hovered === page.id ? styles.cardActive : ''} ${hovered && hovered !== page.id ? styles.cardDimmed : ''}`}
              style={{ '--card-accent': page.accent, '--card-bg': page.bg, '--card-border': page.borderColor } as React.CSSProperties}
              onClick={() => onSelect(page.id)}
              onMouseEnter={() => setHovered(page.id)}
              onMouseLeave={() => setHovered(null)}
            >
            {/* Index + arrow row */}
            <div className={styles.cardTopRow}>
              <span className={styles.cardIndex} style={{ color: page.accent, fontFamily: page.id === 'music' ? "'IBM Plex Mono', monospace" : "'Space Mono', monospace" }}>
                {page.index}
              </span>
              <div className={styles.cardArrowWrap}>
                <svg className={styles.cardArrowSvg} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Preview viz */}
            <div className={styles.cardPreview} style={{ background: page.bg }}>
              <div className={styles.cardPreviewInner}>
                {page.preview}
              </div>
              {/* Overlay shimmer on hover */}
              <div className={styles.cardPreviewOverlay} />
            </div>

            {/* Brand + meta */}
            <div className={styles.cardBody}>
              <div className={styles.cardIndustry} style={{ color: page.textSecondary, fontFamily: "'Space Mono', monospace" }}>
                {page.industry}
              </div>
              <h2
                className={styles.cardBrand}
                style={{
                  fontFamily: page.font,
                  color: page.textPrimary,
                  fontStyle: page.id === 'restaurant' ? 'italic' : 'normal',
                  fontWeight: page.id === 'restaurant' ? 300 : page.id === 'music' ? 400 : 800,
                  letterSpacing: page.id === 'music' ? '0.08em' : '-0.02em',
                }}
              >
                {page.brand}
              </h2>
              <p className={styles.cardTagline} style={{ color: page.textSecondary }}>
                {page.tagline}
              </p>
            </div>

            {/* Palette + tags footer */}
            <div className={styles.cardFooter} style={{ borderColor: page.borderColor }}>
              <div className={styles.cardPalette}>
                {page.palette.map((color) => (
                  <div
                    key={color}
                    className={styles.paletteDot}
                    style={{ background: color, border: color === '#f5f0e8' ? '1px solid #d5c9b5' : 'none' }}
                    title={color}
                  />
                ))}
              </div>
              <div className={styles.cardTags}>
                {page.tags.map((tag) => (
                  <span
                    key={tag}
                    className={styles.cardTag}
                    style={{ color: page.accent, borderColor: `${page.accent}33` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

              {/* Hover accent line */}
              <div className={styles.cardAccentLine} style={{ background: page.accent }} />
            </article>
            <aside className={styles.cardSummary} style={{ '--summary-accent': page.accent } as React.CSSProperties}>
              <span className={styles.cardSummaryLabel}>Overview</span>
              <p className={styles.cardSummaryText}>{page.description}</p>
            </aside>
          </div>
        ))}
      </main>

      {/* BOTTOM STATUS BAR */}
      <footer className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusDot} style={{ background: active ? active.accent : '#333' }} />
          <span className={styles.statusText}>
            {active
              ? `Previewing ${active.brand} — click to open`
              : 'Hover a card to preview · Click to open'
            }
          </span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>React 19</span>
          <span className={styles.statusDivider}>·</span>
          <span className={styles.statusItem}>Vite 8</span>
          <span className={styles.statusDivider}>·</span>
          <span className={styles.statusItem}>TypeScript 5</span>
          <span className={styles.statusDivider}>·</span>
          <span className={styles.statusItem}>CSS Modules</span>
        </div>
      </footer>
    </div>
  )
}

export default Hub