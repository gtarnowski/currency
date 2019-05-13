import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import isEqual from 'lodash/isEqual'
import { converterConvert } from './actions'
import {
  makeSelectAmount,
  makeSelectConvertResult,
  makeSelectFromCurrency,
  makeSelectToCurrency
} from './selectors'

import ConverterControls from '../../components/ConverterControls'
import ConverterResults from '../../components/ConverterResults'
import EmptyContent from '../../components/EmptyContent'

class Converter extends Component {
  componentDidUpdate(
    { from: prevFrom, to: prevTo, amount: prevAmount },
    prevState,
    snapshot
  ) {
    const { onSubmit, from, to, amount } = this.props
    if (from && amount && (to && to.length > 0)) {
      if (from !== prevFrom || amount !== prevAmount || !isEqual(to, prevTo)) {
        onSubmit()
      }
    }
  }

  render() {
    const { convertResult } = this.props
    return (
      <div>
        <ConverterControls />

        {convertResult.length > 0 ? (
          <ConverterResults
            convertResult={convertResult}
          />
        ) : (
          <EmptyContent
            title="No results found"
            subtitle="Try to change amount or date range"
            icon="search"
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  amount: makeSelectAmount(),
  to: makeSelectToCurrency(),
  from: makeSelectFromCurrency(),
  convertResult: makeSelectConvertResult()
})

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(converterConvert())
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(Converter)
