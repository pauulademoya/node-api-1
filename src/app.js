import express from 'express'
import vatimetroRoutes from './routes/vatimetro.routes.js'


const app = express()

app.use('/api',vatimetroRoutes)

export default app;