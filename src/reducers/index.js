import { SET_GUESS } from '../actions';

const initialState = {
  userGuess: '',
  feedback: 'Cold as ice',
  guesses: [0, 5, 12],
  answer: 50
}

export const gameReducer = (state=initialState, action) => {
  if (action.type === SET_GUESS) {
    return Object.assign({}, state, {
      userGuess: action.num,
      feedback: state.feedback,
      guesses: state.guesses
      // [...initialState.guesses, action.num]
    });
  }
  return state;
}