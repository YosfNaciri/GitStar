import React, {Component} from 'react';
import  HomeScreen from '../Screens/HomeScreen'
import  SettingsScreen from '../Screens/SettingsScreen'
import  WebPage from '../Screens/WebPage'
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import NavComponent from '../components/BottomNav/NavComponent';
import AppHeader from '../components/Header/AppHeader';

//this is the main entry to our app
//the toptabnavigator is actually positioned at the bottom
//and it's basically the navigation bettween the home and the settings "Views".

//the stack navigator is for redirecting us to the webview of the repo we wanna see.


 BottomNavigator = createMaterialTopTabNavigator({
  Home: { 
    screen: HomeScreen,
  },

  Setting : {
    screen : SettingsScreen,}
  },
  {
    initialRouteName: 'Home',
    tabBarPosition : 'bottom',
    tabBarComponent :  props => <NavComponent {...props} />
    
  });

  AppNavigation = createStackNavigator({
    Home : {
      screen: BottomNavigator,
      navigationOptions: {
        header: props => <AppHeader {...props} />,
      },
    },
    WebView : {
      screen : WebPage,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#24292e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
      },
        title : "GitHub"
      },
    }
  });

export default createAppContainer(AppNavigation)

