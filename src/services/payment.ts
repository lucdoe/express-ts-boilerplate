const isProduction = process.env['NODE_ENV'] === 'production'

const fakePaymentService: PaymentService = {
  chargeUserMonthly: async () => Promise.resolve(true),
}

const stripePaymentService: PaymentService = {
  chargeUserMonthly: async () => Promise.resolve(true),
}

export function getPaymentService(): PaymentService {
  return isProduction ? stripePaymentService : fakePaymentService
}
