import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productsRouter from './routes/products.js'
import { connectDB } from './config/db.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ name: 'Shezreen API', status: 'ok' })
})

app.use('/products', productsRouter)

export default app

const isVercel = process.env.VERCEL === '1'
const isProduction = process.env.NODE_ENV === 'production'

if (!isVercel && !isProduction) {
  const port = process.env.PORT || 5000
  connectDB()
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.warn('MongoDB not connected:', err.message))
  app.listen(port, () => console.log(`Shezreen API running on http://localhost:${port}`))
}
