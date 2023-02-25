import { Request, Response } from 'express'
import { featureService } from 'services/feautureServices'

export const featureController = async (req: Request, res: Response) => {
  try {
    const results = await featureService()

    res.status(200).json(results)
  } catch (err) {
    console.error(err)
    res.status(500).json('Something went wrong.')
  }
}
