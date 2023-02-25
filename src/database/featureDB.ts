export const findFeature = async () => {
  try {
    const features = ['feature1', 'feature2', 'feature3']
    return features
  } catch (err) {
    console.error(err)
    return 'Something went wrong.'
  }
}
