import { Router } from 'express'
import Product from '../models/Product.js'
import { connectDB } from '../config/db.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    await connectDB()
    const { category } = req.query
    const filter = category && category !== 'all' ? { category } : {}
    const products = await Product.find(filter).sort({ createdAt: 1 })
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    await connectDB()
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json(product)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
