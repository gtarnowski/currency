import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

export const selectCompareState = state => fromJS(state.compare)

export const makeSelectCurrency = () =>
  createSelector(
    selectCompareState,
    state => state && state.get('currency')
  )

export const makeSelectStartDate = () =>
  createSelector(
    selectCompareState,
    state => state && state.get('startDate')
  )

export const makeSelectEndDate = () =>
  createSelector(
    selectCompareState,
    state => state && state.get('endDate')
  )
export const makeSelectCompareResults = () =>
  createSelector(
    selectCompareState,
    state => state && state.get('compareResults')
  )
