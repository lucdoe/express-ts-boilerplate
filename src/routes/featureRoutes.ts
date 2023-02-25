import { featureController } from 'controllers/featureControllers'
import { Router } from 'express'
import { featureMiddleware } from 'middlewares/featureMiddlewares'

const featureRoute: Router = Router()

featureRoute.get('/', featureMiddleware, featureController)

export default featureRoute
