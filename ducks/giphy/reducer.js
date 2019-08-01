import { combineReducers } from 'redux'
import giphy from './reducer-giphy'
import giphies from './reducer-giphies'

export default combineReducers({
    giphy,
    giphies
})