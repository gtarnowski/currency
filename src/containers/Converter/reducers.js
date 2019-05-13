import { fromJS } from 'immutable'
import { createReducer } from 'redux-act'
import {
  converterSetConvertResult,
  converterSetFromCurrency,
  converterSetToCurrency,
  converterSetAmount
} from './actions'

const initialState = fromJS({
  amount: '',
  from: null,
  to: [],
  convertResult: []
})

const methods = {
  [converterSetAmount]: (state, payload) => state.set('amount', payload),
  [converterSetFromCurrency]: (state, payload) => state.set('from', payload),
  [converterSetToCurrency]: (state, payload) =>
    state.set('to', fromJS(payload)),
  [converterSetConvertResult]: (state, payload) =>
    state.set('convertResult', fromJS(payload))
}

export default createReducer(methods, initialState)
