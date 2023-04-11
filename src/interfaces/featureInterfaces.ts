interface PaymentService {
  chargeUserMonthly: (userId: string, monthlyAmount: number) => Promise<boolean>
}
