import { Router } from 'express'
import { featureController } from '../controllers/featureControllers'
import { featureMiddleware } from '../middlewares/featureMiddlewares'

const featureRouter: Router = Router()

featureRouter.get('/', featureMiddleware, featureController)

export default featureRouter
