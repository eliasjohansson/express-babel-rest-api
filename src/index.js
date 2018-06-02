import http from 'http'
import app from './config/express'
import { port } from './config/dotenv'
import mongoose from './config/mongoose'

export const server = http.Server(app)

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
  mongoose.connect()
})
