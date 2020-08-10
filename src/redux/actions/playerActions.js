import {
    ADD_PLAYER_SCORE,
    ADD_PLAYER_REBOUND,
    ADD_PLAYER_ASSIST,
    ADD_PLAYER_FOUL,
    RESET_PLAYER,
    CHANGE_NAME
} from "../types";

export const addPlayerScore = (score, team, player) => (dispatch) => {
    dispatch({ type: ADD_PLAYER_SCORE, payload: { score, team, player } });
};

export const addPlayerRebound = (rebound, team, player) => (dispatch) => {
    dispatch({ type: ADD_PLAYER_REBOUND, payload: { rebound, team, player } });
};

export const addPlayerAssist = (assist, team, player) => (dispatch) => {
    dispatch({ type: ADD_PLAYER_ASSIST, payload: { assist, team, player } });
};

export const addPlayerFoul = (foul, team, player) => (dispatch) => {
    dispatch({ type: ADD_PLAYER_FOUL, payload: { foul, team, player } });
};

export const playerReset = () => (dispatch) => {
    dispatch({ type: RESET_PLAYER });
};

export const changePlayerName = (name, team, player) => (dispatch) => {
    dispatch({ type: CHANGE_NAME, payload: { name, team, player } });
};
