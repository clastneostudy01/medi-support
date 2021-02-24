// React 관련 import
import React from "react";

// Redux 관련 import
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

// Container import
import Main from "./components/MainContainer"

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}