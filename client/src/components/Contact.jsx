import { brand } from '../config/site'

function Contact() {
  const items = [
    {
      label: 'WhatsApp',
      value: brand.contact.phone,
      href: `https://wa.me/${brand.contact.whatsapp}`,
    },
    { label: 'Email', value: brand.contact.email, href: `mailto:${brand.contact.email}` },
    { label: 'Instagram', value: '@shezreen', href: brand.contact.instagram },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title">We would love to hear from you</h2>
          <p className="section-sub">{brand.contact.address} · Orders made to order</p>
        </div>

        <div className="contact-grid">
          {items.map((i) => (
            <a key={i.label} className="contact-item" href={i.href} target="_blank" rel="noreferrer">
              <span className="contact-label">{i.label}</span>
              <span className="contact-value">{i.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
