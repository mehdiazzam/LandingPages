import { type FC } from 'react'
import GlobalHeader from '../components/GlobalHeader'
import styles from './RestaurantPage.module.css'

interface Props {
  onBack: () => void
}

const RestaurantPage: FC<Props> = ({ onBack }) => {
  const seasons = [
    { name: 'Spring', color: '#a8c8a0', items: ['White asparagus', 'Ramson', 'Morels', 'Lamb'] },
    { name: 'Summer', color: '#e8a87c', items: ['Courgette blossom', 'Heirloom tomatoes', 'Sea lavender', 'Lobster'] },
    { name: 'Autumn', color: '#c87941', items: ['Cèpe mushroom', 'Quince', 'Venison', 'Truffle'] },
    { name: 'Winter', color: '#8aabb0', items: ['Celeriac', 'Aged gouda', 'Smoked eel', 'Endive'] },
  ]

  const menuItems = [
    { name: 'White asparagus velouté', desc: 'smoked eel · hazelnut oil · chive', price: '€28' },
    { name: 'Dry-aged Limousin', desc: 'bone marrow · watercress · morel jus', price: '€54' },
    { name: 'Rhubarb & labne', desc: 'sablé · elderflower · freeze-dried rose', price: '€16' },
  ]

  return (
    <div className={styles.page}>
      <GlobalHeader
        title="Restaurant landing page"
        subtitle="Farro farm to table dining and seasonal storytelling."
        accent="#c4683a"
        tone="light"
        compact
        onBack={onBack}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTag}>Farm-to-table · Amsterdam</div>
          <h1 className={styles.heroHeadline}>
            Honest<br />
            <em>food,</em><br />
            rooted<br />
            in season.
          </h1>
          <div className={styles.heroInfoRow}>
            {[
              { label: 'Location', val: 'Jordaan,\nAmsterdam' },
              { label: 'Open', val: 'Tue – Sun\n18:00 – 23:30' },
              { label: 'Format', val: 'Tasting menu\nà la carte' },
            ].map((item) => (
              <div key={item.label}>
                <div className={styles.infoLabel}>{item.label}</div>
                <div className={styles.infoVal}>
                  {item.val.split('\n').map((l, i) => <span key={i}>{l}<br/></span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroPlate}>
            <div className={styles.plateWrap}>
              <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.plateSvg}>
                <circle cx="140" cy="140" r="128" stroke="#d5c9b5" strokeWidth="0.5" strokeDasharray="4 8"/>
                <circle cx="140" cy="140" r="110" stroke="#c9c4b8" strokeWidth="0.5"/>
                <path d="M140 30 Q148 60 140 80 Q132 60 140 30" fill="#7a8c6e" opacity="0.5"/>
                <path d="M140 200 Q148 220 140 250 Q132 220 140 200" fill="#7a8c6e" opacity="0.5"/>
                <path d="M30 140 Q60 148 80 140 Q60 132 30 140" fill="#7a8c6e" opacity="0.5"/>
                <path d="M200 140 Q220 148 250 140 Q220 132 200 140" fill="#7a8c6e" opacity="0.5"/>
                <circle cx="140" cy="140" r="76" stroke="#c4683a" strokeWidth="0.8" opacity="0.4"/>
                <circle cx="140" cy="140" r="62" fill="#ede5d5" stroke="#d5c9b5" strokeWidth="0.5"/>
              </svg>
              <div className={styles.plateCenterText}>
                <span className={styles.plateSeason}>spring</span>
                <span className={styles.plateNum}>7</span>
                <span className={styles.plateCourses}>courses</span>
              </div>
            </div>
          </div>
          <div className={styles.menuStrip}>
            <div className={styles.menuStripTitle}>Tonight's highlights</div>
            <div className={styles.menuStripItems}>
              {menuItems.map((item) => (
                <div key={item.name} className={styles.menuStripItem}>
                  <div>
                    <div className={styles.dishName}>{item.name}</div>
                    <div className={styles.dishDesc}>{item.desc}</div>
                  </div>
                  <div className={styles.dishPrice}>{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <div className={styles.aboutSeasonTag}>Our philosophy</div>
          <div className={styles.aboutQuote}>
            "We let the field decide what ends up on the plate."
          </div>
          <div className={styles.aboutSig}>— Chef Lianne van der Berg</div>
        </div>
        <div className={styles.aboutRight}>
          <h2 className={styles.aboutTitle}>
            Where the farm<br />
            <em>meets</em> the kitchen.
          </h2>
          <p className={styles.aboutBody}>
            Every dish at Farro begins forty kilometres north, on the polders of Noord-Holland.
            We source daily, cook honestly, and let ingredients speak with as little interference
            as possible. No freezers. No shortcuts. Just soil, time, and craft.
          </p>
          <div className={styles.aboutFacts}>
            {[
              { num: '3', label: 'Farm partners' },
              { num: '40km', label: 'Max distance' },
              { num: '12+', label: 'Years open' },
            ].map((f) => (
              <div key={f.label}>
                <span className={styles.factNum}>{f.num}</span>
                <span className={styles.factLabel}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL */}
      <section className={styles.seasonalStrip}>
        {seasons.map((s) => (
          <div key={s.name} className={styles.seasonCard}>
            <div className={styles.seasonDot} style={{ background: s.color }}/>
            <div className={styles.seasonName}>{s.name}</div>
            <ul className={styles.seasonItems}>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBgText}>Farro</div>
        <p className={styles.ctaEyebrow}>Reservations</p>
        <h2 className={styles.ctaHeading}>
          A table for<br />every occasion.
        </h2>
        <div className={styles.hoursGrid}>
          {[
            { day: 'Tue – Thu', time: '18:00 – 22:30' },
            { day: 'Fri – Sat', time: '17:30 – 23:30' },
            { day: 'Sunday', time: '17:00 – 22:00' },
          ].map((h) => (
            <div key={h.day} className={styles.hoursItem}>
              <div className={styles.hoursDay}>{h.day}</div>
              <div className={styles.hoursTime}>{h.time}</div>
            </div>
          ))}
        </div>
        <a href="#" className={styles.ctaLink}>make a reservation →</a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>Farro</div>
        <div className={styles.footerAddress}>
          Westerstraat 88, Jordaan<br />
          1015 MN Amsterdam<br />
          +31 20 123 4567
        </div>
      </footer>
    </div>
  )
}

export default RestaurantPage
