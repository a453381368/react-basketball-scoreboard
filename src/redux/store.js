import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import scoreReducer from "./reducers/scoreReducer";
import playerReducer from "./reducers/playerReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    scoreboard: scoreReducer,
    playerboard: playerReducer,
});

const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware))
);

export default store;
