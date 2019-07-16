import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const middlewares = [];

const sagaMiddlewere = createSagaMiddleware();

middlewares.push(sagaMiddlewere);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...middlewares);

const store = createStore(reducer, composer);

sagaMiddlewere.run(rootSaga);

export default store;
