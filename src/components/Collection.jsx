import { useEffect, useMemo, useState } from 'react'
import { categories, products as fallback } from '../data/products'
import { fetchProducts } from '../api/products'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

function Collection({ category, onCategoryChange }) {
  const [selected, setSelected] = useState(null)
  const [products, setProducts] = useState(fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetchProducts()
      .then((data) => {
        if (active && Array.isArray(data) && data.length) setProducts(data)
      })
      .catch(() => {
        if (active) setProducts(fallback)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  const visible = useMemo(
    () => (category === 'all' ? products : products.filter((p) => p.category === category)),
    [products, category],
  )

  return (
    <section id="collection" className="section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">The Collection</p>
          <h2 className="section-title">New Season, New Statement</h2>
        </div>

        <div className="tabs" role="tablist" aria-label="Product categories">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={category === c.id}
              className={`tab ${category === c.id ? 'tab-active' : ''}`}
              onClick={() => onCategoryChange(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid">
          {visible.map((p) => (
            <ProductCard key={p._id || p.id} product={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        {loading && <p className="grid-empty">Loading collection…</p>}
        {!loading && visible.length === 0 && <p className="grid-empty">Nothing here yet — check back soon.</p>}
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

export default Collection
