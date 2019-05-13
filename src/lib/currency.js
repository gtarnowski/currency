// @flow
import React from 'react'
import currencies from '../constants/currencies'
import Flag from '../components/Flag'

export default currencies.map(currencyCode => {
  const lowerCasedCurrency = currencyCode.toLowerCase()
  return {
    key: lowerCasedCurrency,
    text: currencyCode,
    value: currencyCode,
    content: <Flag currencyCode={lowerCasedCurrency} flagName={currencyCode} />
  }
})

export const composeCurrenciesQuery = (from: string, to: string[]) =>
  to.map(toCurrency => `${from}_${toCurrency}`).join()
