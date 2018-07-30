export const SET_GUESS = "SET_GUESS";

export const setGuess = (num) => {
  return {
    type: SET_GUESS,
    num
  }
}