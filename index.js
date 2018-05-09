import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./src/reducers/index";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

let reactNativeReduxStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
  
AppRegistry.registerComponent('tripful', () => reactNativeReduxStore);
