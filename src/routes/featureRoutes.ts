import { featureController } from 'controllers/featureControllers'
import { Router } from 'express'
import { featureMiddleware } from 'middlewares/featureMiddlewares'

const featureRouter: Router = Router()

featureRouter.get('/', featureMiddleware, featureController)

export default featureRouter
