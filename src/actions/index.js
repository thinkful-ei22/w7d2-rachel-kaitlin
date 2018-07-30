export const SET_GUESS = "SET_GUESS";
export const NEW_GAME = "NEW_GAME";
export const SHOW_INFO = "SHOW_INFO";

export const setGuess = (num) => {
  return {
    type: SET_GUESS,
    num
  }
}

export const newGame = () => {
  return {
    type: NEW_GAME
  }

}

export const showInfo = () => {
  return {
    type: SHOW_INFO
  }
}