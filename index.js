/**
 * @format
 */

import React from 'react';
import {AppRegistry,StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import { store } from './src/store/Store';
import Navigation from './src/Navigation/BottomNavigation'

//the main entry point .

const RNRedux = () => (
    <Provider store={store}>
              <Navigation/>
    </Provider>

);

AppRegistry.registerComponent(appName, () => RNRedux);
