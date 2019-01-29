/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import Index from "./screens/Index";
import { Provider } from 'react-redux';
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}


