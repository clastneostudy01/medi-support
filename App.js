import 'react-native-gesture-handler';

// React 관련 import
import React from "react";

// Redux 관련 import
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

// Redux saga 관련 import
import rootSaga from './redux/sagas'
import createSagaMiddleware from 'redux-saga'

// Container import
import Main from "./components/MainContainer"


const sagaMiddleWare = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)


export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}