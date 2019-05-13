import { call, takeLatest, put, select } from 'redux-saga/effects'
import { converterConvert, converterSetConvertResult } from './actions'
import {
  makeSelectFromCurrency,
  makeSelectToCurrency,
  makeSelectAmount
} from './selectors'
import apiRequest from '../../lib/apiRequest'
import { CONVERT_ENDPOINT_PATH } from '../../constants/endpoints'
import Converter from '../../api/converterModel'
import { composeCurrenciesQuery } from '../../lib/currency'

const API_KEY = process.env.REACT_APP_API_KEY_CURRCONV

export function* convertCurrencySaga() {
  const selectFromCurrency = yield call(makeSelectFromCurrency)
  const fromCurrency = yield select(selectFromCurrency)
  const selectToCurrency = yield call(makeSelectToCurrency)
  const toCurrency = yield select(selectToCurrency)
  const selectAmount = yield call(makeSelectAmount)
  const amount = yield select(selectAmount)
  try {
    const response = yield call(apiRequest, CONVERT_ENDPOINT_PATH, {
      apiKey: API_KEY,
      q: composeCurrenciesQuery(fromCurrency, toCurrency)
    })
    const data = Converter.ComposeConverterData({ response, amount })
    yield put(converterSetConvertResult(data))
  } catch (e) {
    console.log(e)
  }
}

export default function* defaultSaga() {
  yield takeLatest(converterConvert, convertCurrencySaga)
}
