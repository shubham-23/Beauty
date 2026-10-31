import { useState } from 'react'

const highlights = [
  { label: 'Signature facials', value: '1,200+' },
  { label: 'Bridal looks', value: '480+' },
  { label: 'Avg. rating', value: '4.9/5' },
]

export default function Home() {
  const [bookingMsg, setBookingMsg] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setBookingMsg('Thank you — your preferred slot is reserved. We will confirm shortly.')
    event.target.reset()
  }

  return (
    <div className="page">
      <section className="hero-block">
        <div className="hero-copy">
          <span className="pill">Calm beauty house</span>
          <h1>Glow rituals crafted for modern life</h1>
          <p>
            Serene Glow blends science-led skincare, meticulous styling, and warm hospitality. Step into a plush, artful
            salon experience with aromatherapeutic rooms, expert aestheticians, and cruelty-free essentials.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="/services">Explore services</a>
            <a className="btn-ghost" href="/contact">Talk to a concierge</a>
          </div>
          <div className="metrics">
            {highlights.map((item) => (
              <div key={item.label} className="metric">
                <div className="metric-value">{item.value}</div>
                <div className="metric-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card glass">
          <div className="card-head">
            <div>
              <p className="eyebrow">Featured ritual</p>
              <h3>Rose Quartz Renewal</h3>
              <p className="muted">
                75-minute signature facial with gua sha sculpting, LED boost, and a calming rose-mist finish.
              </p>
            </div>
            <div className="tag">90 mins</div>
          </div>
          <ul className="list">
            <li>Double cleanse with enzymatic polish</li>
            <li>Collagen mask + cryo-sculpt wand</li>
            <li>Neck, shoulder, and scalp massage</li>
            <li>Personalised home care plan</li>
          </ul>
          <div className="booking-box">
            <div>
              <p className="eyebrow">Book a seat</p>
              <h4>Private suite availability</h4>
              <p className="muted">Aesthetician-led sessions, herbal tea on arrival.</p>
            </div>
            <a className="btn-secondary" href="/contact">Request slot</a>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <p className="eyebrow">Menu preview</p>
            <h2>What we specialise in</h2>
            <p className="muted">Tailored programs for skin longevity, occasion styling, and restorative self-care.</p>
          </div>
          <a className="link" href="/services">View all services</a>
        </div>

        <div className="cards-grid">
          {[{ title: 'Skin studio', copy: 'Peels, barrier repair, LED therapy, and dermaplaning for resilient glow.' }, { title: 'Hair artistry', copy: 'Editorial cuts, glassy blowouts, keratin smoothing, and dimensional color.' }, { title: 'Bridal & events', copy: 'Trial-backed bridal glam, on-location teams, and concierge scheduling.' }, { title: 'Hands & feet', copy: 'Gel overlays, restorative pedis, and non-toxic lacquers with spa rituals.' }].map(
            (item) => (
              <div key={item.title} className="card gradient-card">
                <h4>{item.title}</h4>
                <p className="muted">{item.copy}</p>
                <span className="link">Discover</span>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="panel split">
        <div className="panel-left">
          <p className="eyebrow">Reservations</p>
          <h2>Book a calm, light-filled suite</h2>
          <p className="muted">
            Choose a date, time, and focus area. Our concierge will pair you with the right specialist and confirm within
            the hour.
          </p>
          <div className="chips">
            <span className="chip">Cruelty-free</span>
            <span className="chip">Derm-approved</span>
            <span className="chip">Aromatherapy</span>
            <span className="chip">Private rooms</span>
          </div>
        </div>

        <div className="panel-right glass">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input type="text" required />
            </label>
            <label>
              Service focus
              <select>
                <option>Skin therapy</option>
                <option>Haircut & style</option>
                <option>Bridal makeup</option>
                <option>Massage & wellness</option>
              </select>
            </label>
            <div className="form-row">
              <label>
                Date
                <input type="date" required />
              </label>
              <label>
                Time
                <input type="time" required />
              </label>
            </div>
            <button className="btn-primary" type="submit">Reserve</button>
            {bookingMsg && <div className="toast success">{bookingMsg}</div>}
          </form>
        </div>
      </section>
    </div>
  )
}
