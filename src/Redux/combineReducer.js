import { combineReducers } from "redux";
import { todoReducer } from "./reducer/TodoReducer";

export const reducer=combineReducers({todo:todoReducer})