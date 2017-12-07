import * as Constants from './../constants/StackContants';

let initialState = {
  data : []
};
  
const reducer = (state = initialState, action) => {
  switch(action.type){
    case Constants.STACK_SET_DATA:
      return {
        ...state,
        data: action.data
      }
    case Constants.STACK_GET_DATA:
      return {
        ...state
      }
    case Constants.STACK_INSERT_DATA:
      {
        let Stack = [ ...state.data ] ;
        console.log(Stack);
        Stack.push(action.data);
        return{
          data : Stack
        }
      }
    default:
      return state;
  }
}

export default reducer;