import { ADD_SCORE, ADD_REBOUND, ADD_ASSIST, ADD_FOUL, RESET } from "../types";

const initialState = {
    teamA: {
        score: 0,
        rebound: 0,
        assist: 0,
        foul: 0,
    },
    teamB: {
        score: 0,
        rebound: 0,
        assist: 0,
        foul: 0,
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_SCORE:
            if (action.payload.team === "teamA") {
                return {
                    ...state,
                    teamA: {
                        ...state.teamA,
                        score: state.teamA.score + action.payload.score,
                    },
                };
            }else{
                return {
                    ...state,
                    teamB: {
                        ...state.teamB,
                        score: state.teamB.score + action.payload.score,
                    },
                };
            }

        case ADD_REBOUND:
            if (action.payload.team === "teamA") {
                return {
                    ...state,
                    teamA: {
                        ...state.teamA,
                        rebound: state.teamA.rebound + action.payload.rebound,
                    },
                };
            }else{
                return {
                    ...state,
                    teamB: {
                        ...state.teamB,
                        rebound: state.teamB.rebound + action.payload.rebound,
                    },
                };
            }
        case ADD_ASSIST:
            if (action.payload.team === "teamA") {
                return {
                    ...state,
                    teamA: {
                        ...state.teamA,
                        assist: state.teamA.assist + action.payload.assist,
                    },
                };
            }else{
                return {
                    ...state,
                    teamB: {
                        ...state.teamB,
                        assist: state.teamB.assist + action.payload.assist,
                    },
                };
            }
        case ADD_FOUL:
            if (action.payload.team === "teamA") {
                return {
                    ...state,
                    teamA: {
                        ...state.teamA,
                        foul: state.teamA.foul + action.payload.foul,
                    },
                };
            }else{
                return {
                    ...state,
                    teamB: {
                        ...state.teamB,
                        foul: state.teamB.foul + action.payload.foul,
                    },
                };
            }
        case RESET:
            return initialState;
        default:
            return state;
    }
}
