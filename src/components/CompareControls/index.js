import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import { defaultFormat } from '../../lib/formatDate'
import {
  makeSelectCurrency,
  makeSelectEndDate,
  makeSelectStartDate
} from '../../containers/Compare/selectors'
import {
  compareSetCurrency,
  compareSetEndDate,
  compareSetStartDate
} from '../../containers/Compare/actions'
import CurrencyDropDown from '../../components/CurrencyDropDown'
import './index.css'

const CompareControls = ({
  onChangeStartDate,
  onChangeEndDate,
  onChangeCurrency,
  currency,
  startDate,
  endDate
}) => {
  const onDefaultSearch = () => {
    onChangeStartDate('2015-03-26')
    onChangeEndDate('2016-06-13')
    onChangeCurrency('GBP')
  }
  return (
    <div className="compare-controls">
      <Header as="h1">Compare </Header>
      <a href="#" onClick={onDefaultSearch}>
        <small>Default search</small>
      </a>
      <div className="compare-wrapper">
        <SemanticDatepicker
          onDateChange={date => onChangeStartDate(defaultFormat(date))}
          selected={startDate}
        />
        <SemanticDatepicker
          onDateChange={date => onChangeEndDate(defaultFormat(date))}
          selected={endDate}
        />
        <CurrencyDropDown
          onChange={onChangeCurrency}
          placeholder="Select currency"
          value={currency}
          selection
        />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currency: makeSelectCurrency(),
  startDate: makeSelectStartDate(),
  endDate: makeSelectEndDate()
})

const mapDispatchToProps = dispatch => ({
  onChangeStartDate: payload => dispatch(compareSetStartDate(payload)),
  onChangeEndDate: payload => dispatch(compareSetEndDate(payload)),
  onChangeCurrency: payload => dispatch(compareSetCurrency(payload))
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(CompareControls)
