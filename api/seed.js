import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Product from './models/Product.js'
import { products } from '../src/data/products.js'

dotenv.config()

async function seed() {
  const uri = process.env.MONGO_URI

  if (!uri) {
    console.error('MONGO_URI is not set. Copy .env.example to .env.local and add your connection string.')
    process.exit(1)
  }

  await mongoose.connect(uri, { dbName: 'shezreen' })
  await Product.deleteMany({})
  const docs = await Product.insertMany(products)
  console.log(`Seeded ${docs.length} products into MongoDB`)
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
