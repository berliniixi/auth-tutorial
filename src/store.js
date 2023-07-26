// Redux store with middleware and the Redux DevTools Extension, providing powerful debugging capabilities
//and enabling asynchronous action handling with the thunk middleware.

import { legacy_createStore as createSore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const store = createSore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
