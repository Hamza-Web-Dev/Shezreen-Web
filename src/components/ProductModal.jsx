import { brand, categoryLabels } from '../config/site'

function ProductModal({ product, onClose }) {
  const enquiry = encodeURIComponent(
    `Hi Shezreen! I'd like to enquire about ${product.name} (${categoryLabels[product.category]}${product.event ? ` - ${product.event}` : ''}).`,
  )
  const waLink = `https://wa.me/${brand.contact.whatsapp}?text=${enquiry}`

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={product.name} onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="modal-media">
          <img className="modal-img" src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} />
        </div>
        <div className="modal-body">
          <p className="modal-cat">
            {categoryLabels[product.category]}
            {product.event ? ` · ${product.event}` : ''}
          </p>
          <h2 className="modal-title">{product.name}</h2>
          <p className="modal-price">{product.price}</p>
          <p className="modal-desc">{product.description}</p>
          <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-gold btn-block">
            Enquire on WhatsApp
          </a>
          <p className="modal-note">Made to order · Worldwide delivery available</p>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
