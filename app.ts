import cors from 'cors'
import express, { json, urlencoded, type Express } from 'express'
import helmet from 'helmet'
import featureRoute from 'routes/featureRoutes'

const app: Express = express()

app.use(cors())
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: true, limit: '50mb' }))

app.use('/feature', featureRoute)

export default app
