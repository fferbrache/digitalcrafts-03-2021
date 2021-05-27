const initialState = {
  fakeData: [{username: "frankieferb", height: "5.8"}]
}

// export const reducer = (state=initialState, action) => {
//   switch(action.type) {
//     case "INSERT_OBJECT":
//       return { fakeData: [{username: "Joe", height: "7.1"}] }
//     default:
//       return state
//   }
// };
function reducer(state=initialState, action) {
  switch(action.type) {
    case "INSERT_OBJECT":
      return { fakeData: [{username: "Joe", height: "7.1"}] }
    default:
      return state
  }
};

export default reducer;

