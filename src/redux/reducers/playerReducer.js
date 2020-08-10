import {
    ADD_PLAYER_SCORE,
    ADD_PLAYER_REBOUND,
    ADD_PLAYER_ASSIST,
    ADD_PLAYER_FOUL,
    RESET_PLAYER,
    CHANGE_NAME,
} from "../types";

const initialState = {
    playersA: {
        playerOne: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player1",
        },
        playerTwo: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player2",
        },
        playerThree: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player3",
        },
        playerFour: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player4",
        },
        playerFive: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player5",
        },
        playerSix: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player6",
        },
        playerSeven: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player7",
        },
        playerEight: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player8",
        },
        playerNine: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player9",
        },
        playerTen: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player10",
        },
        playerEleven: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player11",
        },
        playerTwelve: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player12",
        },
    },
    playersB: {
        playerOne: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player1",
        },
        playerTwo: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player2",
        },
        playerThree: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player3",
        },
        playerFour: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player4",
        },
        playerFive: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player5",
        },
        playerSix: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player6",
        },
        playerSeven: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player7",
        },
        playerEight: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player8",
        },
        playerNine: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player9",
        },
        playerTen: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player10",
        },
        playerEleven: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player11",
        },
        playerTwelve: {
            score: 0,
            rebound: 0,
            assist: 0,
            foul: 0,
            name: "Player12",
        },
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYER_SCORE:
            if (action.payload.team === "teamA") {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerOne: {
                                    ...state.playersA.playerOne,
                                    score:
                                        state.playersA.playerOne.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwo: {
                                    ...state.playersA.playerTwo,
                                    score:
                                        state.playersA.playerTwo.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerThree: {
                                    ...state.playersA.playerThree,
                                    score:
                                        state.playersA.playerThree.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFour: {
                                    ...state.playersA.playerFour,
                                    score:
                                        state.playersA.playerFour.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFive: {
                                    ...state.playersA.playerFive,
                                    score:
                                        state.playersA.playerFive.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSix: {
                                    ...state.playersA.playerSix,
                                    score:
                                        state.playersA.playerSix.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSeven: {
                                    ...state.playersA.playerSeven,
                                    score:
                                        state.playersA.playerSeven.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEight: {
                                    ...state.playersA.playerEight,
                                    score:
                                        state.playersA.playerEight.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerNine: {
                                    ...state.playersA.playerNine,
                                    score:
                                        state.playersA.playerNine.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTen: {
                                    ...state.playersA.playerTen,
                                    score:
                                        state.playersA.playerTen.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEleven: {
                                    ...state.playersA.playerEleven,
                                    score:
                                        state.playersA.playerEleven.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwelve: {
                                    ...state.playersA.playerTwelve,
                                    score:
                                        state.playersA.playerTwelve.score +
                                        action.payload.score,
                                },
                            },
                        };
                    default:
                        return state;
                }
            } else {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerOne: {
                                    ...state.playersB.playerOne,
                                    score:
                                        state.playersB.playerOne.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwo: {
                                    ...state.playersB.playerTwo,
                                    score:
                                        state.playersB.playerTwo.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerThree: {
                                    ...state.playersB.playerThree,
                                    score:
                                        state.playersB.playerThree.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFour: {
                                    ...state.playersB.playerFour,
                                    score:
                                        state.playersB.playerFour.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFive: {
                                    ...state.playersB.playerFive,
                                    score:
                                        state.playersB.playerFive.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSix: {
                                    ...state.playersB.playerSix,
                                    score:
                                        state.playersB.playerSix.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSeven: {
                                    ...state.playersB.playerSeven,
                                    score:
                                        state.playersB.playerSeven.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEight: {
                                    ...state.playersB.playerEight,
                                    score:
                                        state.playersB.playerEight.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerNine: {
                                    ...state.playersB.playerNine,
                                    score:
                                        state.playersB.playerNine.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTen: {
                                    ...state.playersB.playerTen,
                                    score:
                                        state.playersB.playerTen.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEleven: {
                                    ...state.playersB.playerEleven,
                                    score:
                                        state.playersB.playerEleven.score +
                                        action.payload.score,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwelve: {
                                    ...state.playersB.playerTwelve,
                                    score:
                                        state.playersB.playerTwelve.score +
                                        action.payload.score,
                                },
                            },
                        };
                    default:
                        return state;
                }
            }
        case ADD_PLAYER_REBOUND:
            if (action.payload.team === "teamA") {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerOne: {
                                    ...state.playersA.playerOne,
                                    rebound:
                                        state.playersA.playerOne.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwo: {
                                    ...state.playersA.playerTwo,
                                    rebound:
                                        state.playersA.playerTwo.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerThree: {
                                    ...state.playersA.playerThree,
                                    rebound:
                                        state.playersA.playerThree.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFour: {
                                    ...state.playersA.playerFour,
                                    rebound:
                                        state.playersA.playerFour.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFive: {
                                    ...state.playersA.playerFive,
                                    rebound:
                                        state.playersA.playerFive.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSix: {
                                    ...state.playersA.playerSix,
                                    rebound:
                                        state.playersA.playerSix.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSeven: {
                                    ...state.playersA.playerSeven,
                                    rebound:
                                        state.playersA.playerSeven.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEight: {
                                    ...state.playersA.playerEight,
                                    rebound:
                                        state.playersA.playerEight.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerNine: {
                                    ...state.playersA.playerNine,
                                    rebound:
                                        state.playersA.playerNine.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTen: {
                                    ...state.playersA.playerTen,
                                    rebound:
                                        state.playersA.playerTen.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEleven: {
                                    ...state.playersA.playerEleven,
                                    rebound:
                                        state.playersA.playerEleven.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwelve: {
                                    ...state.playersA.playerTwelve,
                                    rebound:
                                        state.playersA.playerTwelve.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    default:
                        return state;
                }
            } else {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerOne: {
                                    ...state.playersB.playerOne,
                                    rebound:
                                        state.playersB.playerOne.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwo: {
                                    ...state.playersB.playerTwo,
                                    rebound:
                                        state.playersB.playerTwo.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerThree: {
                                    ...state.playersB.playerThree,
                                    rebound:
                                        state.playersB.playerThree.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFour: {
                                    ...state.playersB.playerFour,
                                    rebound:
                                        state.playersB.playerFour.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFive: {
                                    ...state.playersB.playerFive,
                                    rebound:
                                        state.playersB.playerFive.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSix: {
                                    ...state.playersB.playerSix,
                                    rebound:
                                        state.playersB.playerSix.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSeven: {
                                    ...state.playersB.playerSeven,
                                    rebound:
                                        state.playersB.playerSeven.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEight: {
                                    ...state.playersB.playerEight,
                                    rebound:
                                        state.playersB.playerEight.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerNine: {
                                    ...state.playersB.playerNine,
                                    rebound:
                                        state.playersB.playerNine.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTen: {
                                    ...state.playersB.playerTen,
                                    rebound:
                                        state.playersB.playerTen.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEleven: {
                                    ...state.playersB.playerEleven,
                                    rebound:
                                        state.playersB.playerEleven.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwelve: {
                                    ...state.playersB.playerTwelve,
                                    rebound:
                                        state.playersB.playerTwelve.rebound +
                                        action.payload.rebound,
                                },
                            },
                        };
                    default:
                        return state;
                }
            }
        case ADD_PLAYER_ASSIST:
            if (action.payload.team === "teamA") {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerOne: {
                                    ...state.playersA.playerOne,
                                    assist:
                                        state.playersA.playerOne.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwo: {
                                    ...state.playersA.playerTwo,
                                    assist:
                                        state.playersA.playerTwo.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerThree: {
                                    ...state.playersA.playerThree,
                                    assist:
                                        state.playersA.playerThree.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFour: {
                                    ...state.playersA.playerFour,
                                    assist:
                                        state.playersA.playerFour.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFive: {
                                    ...state.playersA.playerFive,
                                    assist:
                                        state.playersA.playerFive.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSix: {
                                    ...state.playersA.playerSix,
                                    assist:
                                        state.playersA.playerSix.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSeven: {
                                    ...state.playersA.playerSeven,
                                    assist:
                                        state.playersA.playerSeven.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEight: {
                                    ...state.playersA.playerEight,
                                    assist:
                                        state.playersA.playerEight.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerNine: {
                                    ...state.playersA.playerNine,
                                    assist:
                                        state.playersA.playerNine.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTen: {
                                    ...state.playersA.playerTen,
                                    assist:
                                        state.playersA.playerTen.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEleven: {
                                    ...state.playersA.playerEleven,
                                    assist:
                                        state.playersA.playerEleven.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwelve: {
                                    ...state.playersA.playerTwelve,
                                    assist:
                                        state.playersA.playerTwelve.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    default:
                        return state;
                }
            } else {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerOne: {
                                    ...state.playersB.playerOne,
                                    assist:
                                        state.playersB.playerOne.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwo: {
                                    ...state.playersB.playerTwo,
                                    assist:
                                        state.playersB.playerTwo.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerThree: {
                                    ...state.playersB.playerThree,
                                    assist:
                                        state.playersB.playerThree.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFour: {
                                    ...state.playersB.playerFour,
                                    assist:
                                        state.playersB.playerFour.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFive: {
                                    ...state.playersB.playerFive,
                                    assist:
                                        state.playersB.playerFive.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSix: {
                                    ...state.playersB.playerSix,
                                    assist:
                                        state.playersB.playerSix.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSeven: {
                                    ...state.playersB.playerSeven,
                                    assist:
                                        state.playersB.playerSeven.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEight: {
                                    ...state.playersB.playerEight,
                                    assist:
                                        state.playersB.playerEight.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerNine: {
                                    ...state.playersB.playerNine,
                                    assist:
                                        state.playersB.playerNine.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTen: {
                                    ...state.playersB.playerTen,
                                    assist:
                                        state.playersB.playerTen.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEleven: {
                                    ...state.playersB.playerEleven,
                                    assist:
                                        state.playersB.playerEleven.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwelve: {
                                    ...state.playersB.playerTwelve,
                                    assist:
                                        state.playersB.playerTwelve.assist +
                                        action.payload.assist,
                                },
                            },
                        };
                    default:
                        return state;
                }
            }
        case ADD_PLAYER_FOUL:
            if (action.payload.team === "teamA") {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerOne: {
                                    ...state.playersA.playerOne,
                                    foul:
                                        state.playersA.playerOne.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwo: {
                                    ...state.playersA.playerTwo,
                                    foul:
                                        state.playersA.playerTwo.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerThree: {
                                    ...state.playersA.playerThree,
                                    foul:
                                        state.playersA.playerThree.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFour: {
                                    ...state.playersA.playerFour,
                                    foul:
                                        state.playersA.playerFour.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFive: {
                                    ...state.playersA.playerFive,
                                    foul:
                                        state.playersA.playerFive.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSix: {
                                    ...state.playersA.playerSix,
                                    foul:
                                        state.playersA.playerSix.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSeven: {
                                    ...state.playersA.playerSeven,
                                    foul:
                                        state.playersA.playerSeven.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEight: {
                                    ...state.playersA.playerEight,
                                    foul:
                                        state.playersA.playerEight.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerNine: {
                                    ...state.playersA.playerNine,
                                    foul:
                                        state.playersA.playerNine.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTen: {
                                    ...state.playersA.playerTen,
                                    foul:
                                        state.playersA.playerTen.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEleven: {
                                    ...state.playersA.playerEleven,
                                    foul:
                                        state.playersA.playerEleven.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwelve: {
                                    ...state.playersA.playerTwelve,
                                    foul:
                                        state.playersA.playerTwelve.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    default:
                        return state;
                }
            } else {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerOne: {
                                    ...state.playersB.playerOne,
                                    foul:
                                        state.playersB.playerOne.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwo: {
                                    ...state.playersB.playerTwo,
                                    foul:
                                        state.playersB.playerTwo.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerThree: {
                                    ...state.playersB.playerThree,
                                    foul:
                                        state.playersB.playerThree.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFour: {
                                    ...state.playersB.playerFour,
                                    foul:
                                        state.playersB.playerFour.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFive: {
                                    ...state.playersB.playerFive,
                                    foul:
                                        state.playersB.playerFive.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSix: {
                                    ...state.playersB.playerSix,
                                    foul:
                                        state.playersB.playerSix.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSeven: {
                                    ...state.playersB.playerSeven,
                                    foul:
                                        state.playersB.playerSeven.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEight: {
                                    ...state.playersB.playerEight,
                                    foul:
                                        state.playersB.playerEight.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerNine: {
                                    ...state.playersB.playerNine,
                                    foul:
                                        state.playersB.playerNine.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTen: {
                                    ...state.playersB.playerTen,
                                    foul:
                                        state.playersB.playerTen.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEleven: {
                                    ...state.playersB.playerEleven,
                                    foul:
                                        state.playersB.playerEleven.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwelve: {
                                    ...state.playersB.playerTwelve,
                                    foul:
                                        state.playersB.playerTwelve.foul +
                                        action.payload.foul,
                                },
                            },
                        };
                    default:
                        return state;
                }
            }
        case CHANGE_NAME:
            if (action.payload.team === "teamA") {
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerOne: {
                                    ...state.playersA.playerOne,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwo: {
                                    ...state.playersA.playerTwo,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerThree: {
                                    ...state.playersA.playerThree,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFour: {
                                    ...state.playersA.playerFour,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerFive: {
                                    ...state.playersA.playerFive,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSix: {
                                    ...state.playersA.playerSix,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerSeven: {
                                    ...state.playersA.playerSeven,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEight: {
                                    ...state.playersA.playerEight,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerNine: {
                                    ...state.playersA.playerNine,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTen: {
                                    ...state.playersA.playerTen,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerEleven: {
                                    ...state.playersA.playerEleven,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersA: {
                                ...state.playersA,
                                playerTwelve: {
                                    ...state.playersA.playerTwelve,
                                    name: action.payload.name,
                                },
                            },
                        };
                    default:
                        return state;
                }
            }else{
                switch (action.payload.player) {
                    case "player1":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerOne: {
                                    ...state.playersB.playerOne,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player2":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwo: {
                                    ...state.playersB.playerTwo,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player3":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerThree: {
                                    ...state.playersB.playerThree,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player4":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFour: {
                                    ...state.playersB.playerFour,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player5":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerFive: {
                                    ...state.playersB.playerFive,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player6":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSix: {
                                    ...state.playersB.playerSix,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player7":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerSeven: {
                                    ...state.playersB.playerSeven,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player8":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEight: {
                                    ...state.playersB.playerEight,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player9":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerNine: {
                                    ...state.playersB.playerNine,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player10":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTen: {
                                    ...state.playersB.playerTen,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player11":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerEleven: {
                                    ...state.playersB.playerEleven,
                                    name: action.payload.name,
                                },
                            },
                        };
                    case "player12":
                        return {
                            ...state,
                            playersB: {
                                ...state.playersB,
                                playerTwelve: {
                                    ...state.playersB.playerTwelve,
                                    name: action.payload.name,
                                },
                            },
                        };
                    default:
                        return state;
                }
            }
        case RESET_PLAYER:
            return initialState;
        default:
            return state;
    }
}
