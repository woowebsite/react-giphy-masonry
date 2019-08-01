/* global fetch */

import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import { actionTypes } from './actions'
// import 'es6-promise/auto'
import 'isomorphic-unfetch'

import {
  loadGiphiesSuccess
} from './actions'

const TOKEN = 'qri3rCCasE7Exg8gakmSxmTUFhOzbLdn'
const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${TOKEN}`


/**
 * Load dumy giphy data
 *
 * @param  {id} the identify of layout
 * @param  {entityId} the entityId of module, Ex Account, Contact, etc..
 * @param  {pageType} the page type of screen, Ex LIST, DETAIL, DASHBOARD, NEW
 * @param  {content} json format
 */

function * loadGiphies () {
  try {
    const res = yield fetch(API_URL)
    const data = yield res.json()
    
    yield put(loadGiphiesSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}



export const giphySaga = [
  takeLatest(actionTypes.LOAD_GIPHIES, loadGiphies),
]
export default giphySaga
