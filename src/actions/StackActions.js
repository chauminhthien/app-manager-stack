import * as Constants from './../constants/StackContants';

export const setStack = (data) => {
  return { type: Constants.STACK_SET_DATA, data };
}

export const getStack = () => {
  return { type: Constants.STACK_GET_DATA };
}

export const insterStack = (data) => {
  
  return (dispatch, getState) =>{
    dispatch({ type: Constants.STACK_INSERT_DATA, data });
    let state = getState().stack;
    localStorage.setItem("stack", JSON.stringify(state));
  }

}