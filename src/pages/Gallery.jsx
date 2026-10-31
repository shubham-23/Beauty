const images = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
]

export default function Gallery() {
  return (
    <div className="page">
      <header className="page-head">
        <div>
          <p className="eyebrow">Our work</p>
          <h1>Quiet luxury, captured</h1>
          <p className="muted">Editorial hair, luminous skin moments, and real-client transformations.</p>
        </div>
        <a className="btn-secondary" href="/services">Book the look</a>
      </header>

      <div className="masonry">
        {images.map((src, idx) => (
          <div key={src + idx} className="masonry-item">
            <img src={src} alt="Salon work" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
