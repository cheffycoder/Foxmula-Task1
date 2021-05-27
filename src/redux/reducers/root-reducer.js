import IncrementReducer from "./increment-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
  {
    data : IncrementReducer,
  });

  export default rootReducer;