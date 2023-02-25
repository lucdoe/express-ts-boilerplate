import cors from 'cors'
import express, { json, urlencoded, type Express } from 'express'
import helmet from 'helmet'

const app: Express = express()

app.use(cors())
app.use(helmet())
// allow to parse incoming bodies in JSON and URL-encoded
// formats, and make them available in the req.body object
app.use(json())
app.use(
  urlencoded({
    extended: true,
  })
)

export default app
