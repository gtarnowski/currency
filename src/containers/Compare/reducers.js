import { fromJS } from 'immutable'
import { createReducer } from 'redux-act'
import {
  compareSetCurrency,
  compareSetEndDate,
  compareSetStartDate,
  compareSetCompareResults
} from './actions'

const initialState = fromJS({
  startDate: null,
  endDate: null,
  currency: null,
  compareResult: {}
})

const methods = {
  [compareSetCurrency]: (state, payload) => state.set('currency', payload),
  [compareSetEndDate]: (state, payload) => state.set('endDate', payload),
  [compareSetStartDate]: (state, payload) => state.set('startDate', payload),
  [compareSetCompareResults]: (state, payload) =>
    state.set('compareResults', fromJS(payload))
}

export default createReducer(methods, initialState)
