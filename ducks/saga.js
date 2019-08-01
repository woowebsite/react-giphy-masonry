/* global fetch */

import { all,  select, takeEvery } from 'redux-saga/effects'
// import 'es6-promise/auto'
import 'isomorphic-unfetch'
import giphySaga from './giphy/saga'

function* rootSaga() {
  yield all([
    ...giphySaga
  ])

  yield watchAndLog();

}
function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.group('ACTION', action.type)
    console.log('action', action)
    console.log('state after', state)
    console.groupEnd()
  })
}
export default rootSaga
