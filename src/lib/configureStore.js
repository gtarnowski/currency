import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

// Reducers
import converterReducers from '../containers/Converter/reducers'
import compareReducers from '../containers/Compare/reducers'

// Sagas
import converterSagas from '../containers/Converter/saga'
import compareSagas from '../containers/Compare/saga'

const combinedReducers = combineReducers({
  converter: converterReducers,
  compare: compareReducers
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

function* rootSaga () {
  yield all([
    converterSagas(),
    compareSagas()
  ])
}

sagaMiddleware.run(rootSaga)
