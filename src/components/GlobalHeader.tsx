import { type CSSProperties, type FC } from 'react'
import styles from './GlobalHeader.module.css'

type HeaderTone = 'dark' | 'light'

interface GlobalHeaderProps {
  title: string
  subtitle?: string
  meta?: string
  accent?: string
  tone?: HeaderTone
  compact?: boolean
  onBack?: () => void
  backLabel?: string
  brand?: string
}

const addAlpha = (hex: string, alpha: string) => {
  if (hex.startsWith('#') && hex.length === 7) {
    return `${hex}${alpha}`
  }
  return hex
}

const GlobalHeader: FC<GlobalHeaderProps> = ({
  title,
  subtitle,
  meta,
  accent = '#c8f04e',
  tone = 'dark',
  compact = false,
  onBack,
  backLabel = 'Back',
  brand = 'Studio',
}) => {
  const accentSoft = addAlpha(accent, '26')
  const accentGlow = addAlpha(accent, '14')

  return (
    <header
      className={`${styles.header} ${compact ? styles.compact : ''}`}
      data-tone={tone}
      style={
        {
          '--header-accent': accent,
          '--header-accent-soft': accentSoft,
          '--header-accent-glow': accentGlow,
        } as CSSProperties
      }
    >
      <div className={styles.topRow}>
        {onBack ? (
          <button className={styles.backButton} onClick={onBack} type="button">
            <span className={styles.backArrow} aria-hidden="true">{'<-'}</span>
            {backLabel}
          </button>
        ) : (
          <div className={styles.brand}>{brand}</div>
        )}
        {meta ? <div className={styles.meta}>{meta}</div> : null}
      </div>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
    </header>
  )
}

export default GlobalHeader
