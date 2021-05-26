const initialState = {
  user: "Frankie"
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_USER":
      return { ...state, user: "Joe"} 
    default:
      return state 
  }
} 

export default rootReducer;