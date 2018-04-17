import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import basicWebReducers from "../reducers/basicWebReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      basicWeb: basicWebReducers
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
