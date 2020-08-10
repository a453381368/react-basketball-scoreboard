import { ADD_SCORE, ADD_REBOUND, ADD_ASSIST, ADD_FOUL, RESET } from "../types";

export const addScore = (score, team) => (dispatch) => {
    dispatch({ type: ADD_SCORE, payload: { score, team } });
};

export const addRebound = (rebound, team) => (dispatch) => {
    dispatch({ type: ADD_REBOUND, payload: { rebound, team } });
};

export const addAssist = (assist, team) => (dispatch) => {
    dispatch({ type: ADD_ASSIST, payload: { assist, team } });
};

export const addFoul = (foul, team) => (dispatch) => {
    dispatch({ type: ADD_FOUL, payload: { foul, team } });
};

export const reset = () => (dispatch) => {
    dispatch({ type: RESET });
};
