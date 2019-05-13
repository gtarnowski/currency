import React from 'react'
import { Header, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import {
  makeSelectAmount,
  makeSelectConvertResult,
  makeSelectFromCurrency,
  makeSelectToCurrency
} from '../../containers/Converter/selectors'
import CurrencyDropDown from '../../components/CurrencyDropDown'
import './index.css'
import {
  converterSetAmount,
  converterSetFromCurrency,
  converterSetToCurrency
} from '../../containers/Converter/actions'

const ConverterControls = ({
  onChangeTo,
  onChangeFrom,
  onChangeAmount,
  amount,
  from,
  to
}) => {
  const onDefaultSearch = () => {
    onChangeTo(['USD', 'EUR', 'SGD'])
    onChangeFrom('GBP')
    onChangeAmount(200)
  }
  return (
    <div className="converter-controls">
      <Header as="h1">Convert</Header>
      <a href="#" onClick={onDefaultSearch}>
        <small>Default search</small>
      </a>
      <div className="converter-wrapper">
        <Input
          placeholder="Select Amount"
          type="number"
          className="amount"
          onChange={({ target: { value } }) => onChangeAmount(value)}
          value={amount}
        />
        <CurrencyDropDown
          selection
          placeholder="Select From"
          className="from"
          onChange={onChangeFrom}
          value={from}
        />
        <CurrencyDropDown
          multiple
          fluid
          selection
          placeholder="Select To"
          onChange={onChangeTo}
          value={to}
        />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  amount: makeSelectAmount(),
  to: makeSelectToCurrency(),
  from: makeSelectFromCurrency(),
  convertResult: makeSelectConvertResult()
})

const mapDispatchToProps = dispatch => ({
  onChangeFrom: payload => dispatch(converterSetFromCurrency(payload)),
  onChangeTo: payload => dispatch(converterSetToCurrency(payload)),
  onChangeAmount: payload => dispatch(converterSetAmount(payload))
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(ConverterControls)
