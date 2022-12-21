import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TodoReducer } from "./reducers/TodoReducers";

const reducer = combineReducers({
    // all reducers
    Todo: TodoReducer
})

const initialState = {};

const middeware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middeware))
);

export default store;