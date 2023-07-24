import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import UserReducer from "./reducer/userReducer";

const store = createStore(
    UserReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;