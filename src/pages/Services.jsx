const services = [
  {
    title: 'Skin longevity lab',
    desc: 'Advanced facials, dermaplaning, LED, and barrier repair plans built for long-term radiance.',
    detail: '75-120 mins · from $120',
  },
  {
    title: 'Hair architecture',
    desc: 'Precision cuts, glass blowouts, keratin smoothing, and tonal color tailored to your features.',
    detail: '60-150 mins · from $90',
  },
  {
    title: 'Bridal story',
    desc: 'Trials, on-location teams, timeline planning, and photo-ready artistry for your events.',
    detail: 'Custom packages',
  },
  {
    title: 'Massage & body',
    desc: 'Aromatherapeutic massages, scalp renewal, hot-stone calm, and detox body polishes.',
    detail: '60-120 mins · from $110',
  },
  {
    title: 'Hands & feet spa',
    desc: 'Non-toxic lacquers, gel overlays, restorative pedicures, and paraffin softening.',
    detail: '45-90 mins · from $55',
  },
  {
    title: 'Brows & lashes',
    desc: 'Brow shaping, lamination, lash lifts, and tints for an effortless wake-up glow.',
    detail: '30-75 mins · from $40',
  },
]

export default function Services() {
  return (
    <div className="page">
      <header className="page-head">
        <div>
          <p className="eyebrow">Our craft</p>
          <h1>Services designed for luminous, lived-in beauty</h1>
          <p className="muted">Layered rituals, expert guidance, and thoughtful aftercare for every visit.</p>
        </div>
        <a className="btn-secondary" href="/contact">Plan a visit</a>
      </header>

      <div className="service-grid">
        {services.map((item) => (
          <article key={item.title} className="service-card glass">
            <div className="service-body">
              <h3>{item.title}</h3>
              <p className="muted">{item.desc}</p>
            </div>
            <div className="service-meta">
              <span>{item.detail}</span>
              <button className="ghost-btn" type="button">See menu</button>
            </div>
          </article>
        ))}
      </div>

      <div className="cta-wide gradient-card">
        <div>
          <p className="eyebrow">Need guidance?</p>
          <h2>Complimentary 15-minute skin and hair consultations</h2>
          <p className="muted">Chat with our lead aesthetician to tailor a regimen that respects your schedule and goals.</p>
        </div>
        <a className="btn-primary" href="/contact">Book consult</a>
      </div>
    </div>
  )
}
