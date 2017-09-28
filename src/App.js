
import React from 'react';
import {  AppRegistry,  Text,  View,  Button,  WebView,  StyleSheet,} from 'react-native';

import {DrawerNavigator,DrawerView,StackNavigator,TabNavigator} from 'react-navigation';

import HomeView from './screens/homeView';
import DataView from './screens/dataView';



const  tab_nav = TabNavigator(
    {
        HomeView:{screen: HomeView},
        DataView: {screen:DataView},

    },
    {
        tabBarPosition:'top',
        animationEnabled:true,
        lazyLoad: true,
        tabBarOptions:'bottom',
        backBehavior:'none',

    }
);

const appf_inter = StackNavigator({
 

Home: {screen: HomeView},
DataView: {screen: DataView},

  
  },
    
  {
    navigationOptions: {
      // label text
      //header:false,
     // headerTitle: titleAndIcon,
      swipeEnabled: true,
      animationEnabled: true,
    }

  });



AppRegistry.registerComponent('appf_inter', () => appf_inter);