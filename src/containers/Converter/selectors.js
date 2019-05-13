import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

export const selectConvertState = state => fromJS(state.converter)

export const makeSelectAmount = () =>
  createSelector(
    selectConvertState,
    state => state && state.get('amount')
  )

export const makeSelectFromCurrency = () =>
  createSelector(
    selectConvertState,
    state => state && state.get('from')
  )

export const makeSelectToCurrency = () =>
  createSelector(
    selectConvertState,
    state => state && state.get('to').toJS()
  )

export const makeSelectConvertResult = () =>
  createSelector(
    selectConvertState,
    state => state && state.get('convertResult').toJS()
  )
