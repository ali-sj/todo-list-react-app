import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./combineReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlware=[thunk]
const initialState={todo:localStorage.getItem('todoList')?JSON.parse(localStorage.getItem('todoList')):[]}
export const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlware)))