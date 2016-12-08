import * as Types from './../actions/actionTypes.js';

const intialState = {
  messages: ['hello', 'goodbye'],
};

function messageReducer(state = intialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case Types.FETCH_MESSAGE:
      break;

    case Types.POST_MESSAGE:
      let newArr = Array.from(newState.messages);
      newArr.push(action.message);
      newState.messages = newArr;
      return newState;
      break;
  }
  return newState;
}

export default messageReducer;
