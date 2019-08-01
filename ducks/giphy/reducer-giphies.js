import { actionTypes } from './actions'
import nprogress from 'nprogress'
import { message, Modal } from 'antd'

/**
 * Initial state list giphy
 *
 */
const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    
    case actionTypes.LOAD_GIPHIES: {
      return state
    }

    case actionTypes.LOAD_GIPHIES_SUCCESS: {
      
      return {
        ...state,
        ...action.data
      };
    }
  
    default:
      return state
  }
}

export default reducer
