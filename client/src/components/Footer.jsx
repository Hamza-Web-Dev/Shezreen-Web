import { brand } from '../config/site'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">{brand.name}</p>
        <p className="footer-tagline">{brand.tagline}</p>
        <div className="footer-nav">
          <a href="#collection">Collection</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
