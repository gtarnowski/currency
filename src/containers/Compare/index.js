import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import {
  makeSelectCurrency,
  makeSelectEndDate,
  makeSelectStartDate,
  makeSelectCompareResults
} from './selectors'
import {
  compareGetCompare,
} from './actions'
import CompareControls from '../../components/CompareControls'
import EmptyContent from '../../components/EmptyContent'
import Chart from '../../components/Chart'

class Compare extends Component {
  componentDidUpdate(
    { startDate: prevStartDate, endDate: prevEndDate, currency: prevCurrency },
    prevState,
    snapshot
  ) {
    const { onSubmit, startDate, endDate, currency } = this.props
    if (startDate && endDate && currency)
      if (
        startDate !== prevStartDate ||
        endDate !== prevEndDate ||
        currency !== prevCurrency
      ) {
        onSubmit()
      }
  }

  render() {
    const {
      results
    } = this.props
    return (
      <div>
        <CompareControls />
        {results ? (
          <Chart data={results.rates} />
        ) : (
          <EmptyContent
            title="No results found"
            subtitle="Try to change currency or date range"
            icon="search"
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currency: makeSelectCurrency(),
  startDate: makeSelectStartDate(),
  endDate: makeSelectEndDate(),
  results: makeSelectCompareResults()
})

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(compareGetCompare())
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Compare)
