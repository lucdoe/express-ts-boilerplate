import { Request, Response } from 'express'
import { getPaymentService } from 'services/payment'
import { featureService } from '../services/feautureServices'

export const featureController = async (req: Request, res: Response) => {
  try {
    const results = await featureService()

    res.status(200).json(results)
  } catch (err) {
    console.error(err)
    res.status(500).json('Something went wrong.')
  }
}

export function upgradeAccountRoute(paymentService = getPaymentService()) {
  return async function (req: Request, res: Response) {
    const userID = '123-456-789-012'
    const premiumPlanCost = 100

    const result = await paymentService.chargeUserMonthly(
      userID,
      premiumPlanCost,
    )

    return res.status(200).json(result)
  }
}
