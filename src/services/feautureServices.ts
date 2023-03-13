import { findFeature } from '../database/featureDB'

export const featureService = async () => {
  try {
    return await findFeature()
  } catch (err) {
    console.error(err)
    return 'Something went wrong.'
  }
}
