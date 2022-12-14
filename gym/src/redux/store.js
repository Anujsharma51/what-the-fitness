import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import { gymReducer } from "./reducer";

import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  gymReducer,
  composeEnhancers(applyMiddleware(thunk))
);
