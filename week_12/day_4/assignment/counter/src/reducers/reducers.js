import { ADD, SUBTRACT } from '../action-types/action-types';

const initialState = {
  counter: 0
}

function counter(state=initialState, action) {
  switch(action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1}; 

    case SUBTRACT:
      return { ...state, counter: state.counter - 1};

    default:
      return state
  }
}

export default counter;