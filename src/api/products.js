export async function fetchProducts(category = 'all') {
  const query = category && category !== 'all' ? `?category=${encodeURIComponent(category)}` : ''
  const res = await fetch(`/api/products${query}`)
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  return res.json()
}
