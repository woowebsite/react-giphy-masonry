export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
  LOAD_MENU: 'LOAD_MENU',
  LOAD_MENU_SUCCESS: 'LOAD_MENU_SUCCESS',
  LOAD_LAYOUT: 'LOAD_LAYOUT',
  LOAD_LAYOUT_SUCCESS: 'LOAD_LAYOUT_SUCCESS',
  SET_SELECTED_MENU: 'SET_SELECTED_MENU',
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function increment () {
  return {type: actionTypes.INCREMENT}
}

export function decrement () {
  return {type: actionTypes.DECREMENT}
}

export function reset () {
  return {type: actionTypes.RESET}
}

export function startClock () {
  return {type: actionTypes.START_CLOCK}
}

export function tickClock (isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}

export function loadLayout (packageName, moduleName, pageType) {
  return {
    type: actionTypes.LOAD_LAYOUT,
    packageName,
    moduleName,
    pageType
  }
}
export function loadLayoutSuccess (data, pageType) {
  return {
    type: actionTypes.LOAD_LAYOUT_SUCCESS,
    data,
    pageType
  }
}

export function loadMenu(res) {
  return {type: actionTypes.LOAD_MENU, res}
}
export function loadMenuSuccess (data) {
  return {
    type: actionTypes.LOAD_MENU_SUCCESS,
    data
  }
}
export function setSelectedMenu(selectedMenu) {
  return {
    type: actionTypes.SET_SELECTED_MENU,
    selectedMenu,
  }
}