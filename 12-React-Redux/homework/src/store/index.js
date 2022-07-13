import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
  window.DEV
);


export default store;


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // composeWithDevTools(),