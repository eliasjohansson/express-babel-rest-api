import app from './config/express'
import { port } from './config/dotenv'
import mongoose from './config/mongoose'

mongoose.connect()

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
