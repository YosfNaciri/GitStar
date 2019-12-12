/**
 * @format
 */
import React from 'react';
import {AppRegistry,StatusBar, ColorPropType} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import * as color from './src/colors/Colors'
import { store } from './src/store/Store';


const RNRedux = () => (
    <Provider store={store}>
          <StatusBar backgroundColor = {color.STATUS_BAR_COLOR} barStyle="dark-content" />
              <App/>
    </Provider>

);

AppRegistry.registerComponent(appName, () => RNRedux);
