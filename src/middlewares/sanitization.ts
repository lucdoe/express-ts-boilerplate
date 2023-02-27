import { NextFunction, Request, Response } from 'express'
import { body, header, param, query } from 'express-validator'

export const sanitizeHeadersAndQueryParams = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  Object.keys(req.headers).forEach((key) => {
    header(key).trim()
    header(key).escape()
  })

  Object.keys(req.query).forEach((key) => {
    query(key).trim()
    query(key).escape()
  })

  Object.keys(req.params).forEach((key) => {
    param(key).trim()
    param(key).escape()
  })

  next()
}

export const sanitizeBodys = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  Object.keys(req.body).forEach((key) => {
    body(key).trim()
    body(key).escape()
  })

  next()
}
