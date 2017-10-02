import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeView from '../screens/HomeView';
import DataView from '../screens/DataView';
import Ini from '../screens/Ini';
import Login from '../screens/Login';
import Register from '../screens/Register';



export const Tabs = TabNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: {
      tabBarLabel: 'Arbol',

    },
  },
  DataView: {
    screen: DataView,
    navigationOptions: {
      tabBarLabel: 'Producto',

    },
  },

   Ini: {
    screen: Ini,
    navigationOptions: {
      tabBarLabel: 'Resultados',

    },
  },
},
    {
       tabBarOptions:{
           activeTintColor:'white',
           labelStyle:{
               fontSize:12,
           },
           style:{
               backgroundColor: '#088A68'
           }
       }

    }

);

export const LogReg = StackNavigator ({
    Login:{
      screen: Login,
    },

    Tabs:{
      screen: Tabs,

    },

    Register:{
      screen: Register

    }
    

}
);