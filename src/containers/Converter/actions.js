import { createAction } from 'redux-act'

export const converterConvert = createAction('CONVERTER_CONVERT')
export const converterSetAmount = createAction('CONVERTER_SET_AMOUNT')
export const converterSetFromCurrency = createAction(
  'CONVERTER_SET_FROM_CURRENCY'
)
export const converterSetToCurrency = createAction('CONVERTER_SET_TO_CURRENCY')
export const converterSetConvertResult = createAction(
  'CONVERTER_SET_CONVERT_RESULT'
)
