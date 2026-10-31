const team = [
  {
    name: 'Anya Patel',
    role: 'Lead Aesthetician',
    bio: 'Specialises in barrier health, dermaplaning, and LED skin longevity protocols.',
    photo: 'https://images.unsplash.com/photo-1545996124-8f8a7d5f3ab1?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Maya Singh',
    role: 'Senior Stylist',
    bio: 'Architectural cuts, dimensional color, and glassy blowouts tailored to face shape.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Rina Kapoor',
    role: 'Makeup Director',
    bio: 'Editorial-to-bridal artistry with a focus on skin-first glow and timeless finish.',
    photo: 'https://images.unsplash.com/photo-1545996107-8f8b7d5f3ab3?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tara Verma',
    role: 'Nail Specialist',
    bio: 'Non-toxic gel systems, restorative pedicures, and sculpted overlays for lasting wear.',
    photo: 'https://images.unsplash.com/photo-1544005311-94ddf0286df1?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Team() {
  return (
    <div className="page">
      <header className="page-head">
        <div>
          <p className="eyebrow">Meet the artists</p>
          <h1>Hands that craft your glow</h1>
          <p className="muted">A multidisciplinary team blending science, artistry, and attentive hospitality.</p>
        </div>
      </header>

      <div className="team-grid">
        {team.map((member) => (
          <article key={member.name} className="team-card glass">
            <img src={member.photo} alt={member.name} />
            <div>
              <h3>{member.name}</h3>
              <p className="muted">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="cta-wide glass">
        <div>
          <p className="eyebrow">Careers</p>
          <h2>Join a calm, design-forward studio</h2>
          <p className="muted">We mentor stylists, aestheticians, and spa therapists who love detail and kindness.</p>
        </div>
        <a className="btn-primary" href="mailto:hello@sereneglow.com">Send portfolio</a>
      </div>
    </div>
  )
}
