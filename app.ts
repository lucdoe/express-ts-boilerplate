import cors from 'cors'
import express, { Application, json, urlencoded } from 'express'
import helmet from 'helmet'
import featureRouter from 'routes/featureRoutes'

const app: Application = express()

app.use(cors())
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: true, limit: '50mb' }))

app.use('/feature', featureRouter)

export default app
