import { useEffect, useState } from 'react'
import { brand } from '../config/site'

const links = [
  { href: '#collection', label: 'Collection' },
  { href: '#story', label: 'Our Story' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
          {brand.name}
        </a>

        <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${brand.contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="nav-enquire"
            onClick={() => setOpen(false)}
          >
            Enquire
          </a>
        </nav>

        <button
          type="button"
          className={`nav-toggle ${open ? 'nav-toggle-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
