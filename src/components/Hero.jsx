import { brand } from '../config/site'

function Hero() {
  return (
    <section id="top" className="hero" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/products/bridal-1.webp')` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Handcrafted Elegance</p>
        <h1 className="hero-title">{brand.name}</h1>
        <p className="hero-tagline">{brand.tagline}</p>
        <div className="hero-cta">
          <a href="#collection" className="btn btn-gold">
            Explore the Collection
          </a>
          <a
            href={`https://wa.me/${brand.contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
      <a href="#collection" className="hero-scroll" aria-label="Scroll to collection">
        <span>Scroll</span>
      </a>
    </section>
  )
}

export default Hero
