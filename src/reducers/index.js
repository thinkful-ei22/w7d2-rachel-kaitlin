import { SET_GUESS, NEW_GAME } from '../actions';

const initialState = {
  userGuess: '',
  feedback: 'Make A Guess',
  guesses: [],
  answer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state = initialState, action) => {
  if (action.type === SET_GUESS) {
    const difference = Math.abs(action.num - initialState.answer);

    let newFeedback;
    if (difference >= 50) {
      newFeedback = 'You are ice cold';
    } else if (difference >= 30) {
      newFeedback = 'You are cold';
    } else if (difference >= 10) {
      newFeedback = 'You are warm';
    } else if (difference >= 1) {
      newFeedback = 'You are hot';
    } else {
      newFeedback = 'You got it';
    }

    return Object.assign({}, state, {
      userGuess: action.num,
      feedback: newFeedback,
      guesses: [...state.guesses, action.num]
    });
  }
  if (action.type === NEW_GAME) {
    return Object.assign({}, state, {
      userGuess: '',
      feedback: 'Make A Guess',
      guesses: [],
      answer: Math.round(Math.random() * 100) + 1
    })
  }
  return state;
}

