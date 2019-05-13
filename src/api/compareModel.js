// @flow
import map from 'lodash/map'

interface Rates {
  date: string,
  rate: number
}

interface ComposeRatesType {
  rates: any,
  currency: string
}

export default class Compare {
  baseRate: string
  startDate: string
  endDate: string
  rates: Rates[]

  constructor() {
    this.baseRate = ''
    this.startDate = ''
    this.endDate = ''
    this.rates = []
  }

  static CreateCompareModel(data: any) {
    const { base, end_date, start_date, rates, currency } = data
    const compareModel: Compare = new Compare()
    compareModel.baseRate = base
    compareModel.endDate = end_date
    compareModel.startDate = start_date
    compareModel.rates = Compare.ComposeRates({ rates, currency })
    return compareModel
  }

  static ComposeRates({ rates, currency }: ComposeRatesType) {
    return  map(rates, (rate, rateDate) => ({
      date: rateDate,
      rate: rate[currency]
    }))
  }
}
