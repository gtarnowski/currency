import { call, takeLatest, put, select } from 'redux-saga/effects'
import {
  compareSetCompareResults,
  compareGetCompare
} from './actions'
import {
  makeSelectCurrency,
  makeSelectEndDate,
  makeSelectStartDate
} from './selectors'
import { COMPARE_ENDPOINT_PATH } from '../../constants/endpoints'
import apiRequest from '../../lib/apiRequest'
import Compare from '../../api/compareModel'

export function* compareSaga() {
  const selectStartDate = yield call(makeSelectStartDate)
  const startDate = yield select(selectStartDate)
  const selectEndDate = yield call(makeSelectEndDate)
  const endDate = yield select(selectEndDate)
  const selectCurrency = yield call(makeSelectCurrency)
  const currency = yield select(selectCurrency)

  try {

    const requestUrl = `${COMPARE_ENDPOINT_PATH}${startDate}..${endDate}?to=${currency}`
    const { data } = yield call(apiRequest, requestUrl )
    const model = Compare.CreateCompareModel({ ...data, currency })
    yield put(compareSetCompareResults(model))
  } catch (e) {

  }

}

export default function* defaultSaga() {
  yield takeLatest(compareGetCompare, compareSaga)
}
