import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './config/db.js'
import { fileURLToPath } from 'url'

dotenv.config()

connectDB()

export default app

const isDirectRun = process.argv[1] === fileURLToPath(import.meta.url)
if (isDirectRun) {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
