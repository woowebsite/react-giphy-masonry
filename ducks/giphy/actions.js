export const actionTypes = {
  FAILURE: `FAILURE`,
  LOAD_GIPHIES: `LOAD_GIPHIES`,
  LOAD_GIPHIES_SUCCESS: `LOAD_GIPHIES_SUCCESS`,
}

export function failure(msg) {
  return {
    type: actionTypes.FAILURE,
    msg
  }
}

export function loadGiphies() {
  return {
    type: actionTypes.LOAD_GIPHIES
  }
}

export function loadGiphiesSuccess(data) {
  return {
    type: actionTypes.LOAD_GIPHIES_SUCCESS,
    data
  }
}