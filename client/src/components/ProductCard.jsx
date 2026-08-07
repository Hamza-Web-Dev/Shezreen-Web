import { categoryLabels } from '../config/site'

function ProductCard({ product, onOpen }) {
  return (
    <article className="card">
      <button type="button" className="card-media" onClick={onOpen} aria-label={`View ${product.name}`}>
        <img className="card-img" src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} loading="lazy" />
        <span className="card-overlay">
          <span className="card-view">View Details</span>
        </span>
      </button>
      <div className="card-info">
        <p className="card-cat">
          {categoryLabels[product.category]}
          {product.event ? ` · ${product.event}` : ''}
        </p>
        <h3 className="card-name">{product.name}</h3>
        <p className="card-price">{product.price}</p>
      </div>
    </article>
  )
}

export default ProductCard
