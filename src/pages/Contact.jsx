import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.target.reset()
  }

  return (
    <div className="page">
      <header className="page-head">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>We are here to plan your perfect visit</h1>
          <p className="muted">Concierge support for events, group bookings, and tailored programs.</p>
        </div>
      </header>

      <div className="contact-grid">
        <div className="contact-card glass">
          <h3>Visit the studio</h3>
          <p className="muted">45 Central Avenue, Suite 4, City</p>
          <div className="map-placeholder">Map placeholder</div>
          <div className="contact-lines">
            <div>
              <span className="muted">Call</span>
              <p>+91 98765 43210</p>
            </div>
            <div>
              <span className="muted">Email</span>
              <p>hello@sereneglow.com</p>
            </div>
            <div>
              <span className="muted">Hours</span>
              <p>Tue - Sun · 10am - 8pm</p>
            </div>
          </div>
        </div>

        <div className="contact-card glass">
          <h3>Send a note</h3>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input type="text" required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Bridal, group booking, or skin goals" />
            </label>
            <button className="btn-primary" type="submit">Send message</button>
            {submitted && <div className="toast success">Thanks — we will respond within one business day.</div>}
          </form>
        </div>
      </div>

      <div className="cta-wide gradient-card">
        <div>
          <p className="eyebrow">Follow along</p>
          <h2>See behind-the-scenes rituals</h2>
          <p className="muted">Daily care tips, new menu drops, and serene playlists.</p>
        </div>
        <div className="socials">
          <a href="https://instagram.com" className="chip">Instagram</a>
          <a href="https://facebook.com" className="chip">Facebook</a>
          <a href="https://wa.me/1234567890" className="chip">WhatsApp</a>
        </div>
      </div>
    </div>
  )
}
