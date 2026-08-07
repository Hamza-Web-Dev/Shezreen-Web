import express from 'express'
import cors from 'cors'
import projectRoutes from './routes/projects.js'
import messageRoutes from './routes/messages.js'

const app = express()

const clientUrl = process.env.CLIENT_URL
app.use(
  cors(
    clientUrl
      ? { origin: clientUrl.split(',').map((origin) => origin.trim()) }
      : {}
  )
)
app.use(express.json())

app.get('/api', (req, res) => {
  res.json({ message: 'Portfolio API is running' })
})

app.use('/api/projects', projectRoutes)
app.use('/api/messages', messageRoutes)

app.use((err, req, res, _next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong' })
})

export default app
