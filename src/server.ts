import {
  type ErrorRequestHandler,
  type NextFunction,
  type Request,
  type Response,
} from 'express'
import { type Server } from 'http'
import app from './app'

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json('Not Found.')
})

app.use(
  async (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    console.error(err)
    res.status(500).json('Something went wrong.')
  },
)

const port: string | number = process.env.APP_PORT || 3000

const server: Server = app.listen(port, async () => {
  console.log(`\n  ------ Server started :${port} ------`)
})

export default server
