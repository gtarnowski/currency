import { createAction } from 'redux-act'

export const compareSetCurrency = createAction('COMPARE_SET_CURRENCY')
export const compareSetStartDate = createAction('COMPARE_SET_START_DATE')
export const compareSetEndDate = createAction('COMPARE_SET_END_DATE')
export const compareSetCompareResults = createAction(
  'COMPARE_SET_COMPARE_RESULTS'
)
export const compareGetCompare = createAction('COMPARE_GET_COMPARE')
