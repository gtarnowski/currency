// @flow
import MathJS from 'mathjs'
import get from 'lodash/get'
import map from 'lodash/map'

interface CreateType {
  amount: string;
  rate: number;
  from: string;
  to: string;
}

interface RateAmountType {
  amount: string;
  rate: number;
}

export default class Converter {
  amount: string
  from: string
  rate: number
  result: number
  to: string

  constructor() {
    this.amount = ''
    this.from = ''
    this.rate = 0
    this.result = 0
    this.to = ''
  }

  static ComposeConverterData({ response, amount }: any) {
    const results = get(response, 'data.results')
    if (results) {
      return map(results, ({ fr: from, to, val: rate }) =>
        Converter.CreateConverter({ from, to, rate, amount })
      )
    }
    return []
  }

  static CreateConverter(data: CreateType) {
    const { from, to, rate, amount } = data
    const convertModel = new Converter()
    convertModel.rate = rate
    convertModel.amount = amount
    convertModel.from = from
    convertModel.to = to
    convertModel.result = Converter.CalculateConversionResult({ rate, amount })
    return convertModel
  }

  static CalculateConversionResult({ rate, amount }: RateAmountType) {
    return MathJS.round(MathJS.multiply(rate, amount), 5)
  }
}
