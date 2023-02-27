import compression from 'compression'
import cors from 'cors'
import express, { Application, json, urlencoded } from 'express'
import helmet from 'helmet'
import featureRouter from 'routes/featureRoutes'
import {
  sanitizeBodys,
  sanitizeHeadersAndQueryParams,
} from 'src/middlewares/sanitization'

const app: Application = express()

app.use(sanitizeHeadersAndQueryParams)
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(json({ limit: '20mb' }))
app.use(urlencoded({ extended: true, limit: '20mb' }))
app.use(sanitizeBodys)

app.use('/feature', featureRouter)

export default app
