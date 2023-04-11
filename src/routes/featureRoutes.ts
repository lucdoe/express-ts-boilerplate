import { Router } from 'express'
import {
  featureController,
  upgradeAccountRoute,
} from '../controllers/featureControllers'
import { featureMiddleware } from '../middlewares/featureMiddlewares'

const featureRouter: Router = Router()

featureRouter.get('/', featureMiddleware, featureController)
featureRouter.post('/account/upgrade', upgradeAccountRoute())

export default featureRouter
