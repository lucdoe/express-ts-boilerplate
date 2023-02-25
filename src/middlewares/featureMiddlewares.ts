import { NextFunction, Request, Response } from 'express'

export const featureMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log('featureMiddleware')
    next()
  } catch (err) {
    console.error(err)
    res.status(500).json('Something went wrong.')
  }
}
