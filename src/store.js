import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { createLogger } from 'redux-logger';


const logger = createLogger();
const middlewares = [];
middlewares.push(logger);
middlewares.push(thunk);

let enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

let store = () => {
  return createStore(
    rootReducer,
    enhancer
  );
}
export default store;