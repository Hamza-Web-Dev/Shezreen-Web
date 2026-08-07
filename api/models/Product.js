import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true, index: true },
    event: { type: String },
    price: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, default: '' },
  },
  { timestamps: true },
)

export default mongoose.models.Product || mongoose.model('Product', productSchema)
