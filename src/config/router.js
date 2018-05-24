import React from 'react';
import { Text } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

import HomeView from '../screens/HomeView';
import DataView from '../screens/DataView';
import Ini from '../screens/Ini';
import Login from '../screens/Login';
import Register from '../screens/Register';



export const LogReg = StackNavigator ({
    Login:{
      screen: Login,
    },

    HomeView:{
      screen: HomeView,
   
    },

    Register:{
      screen: Register

    },
    Ini:{
      screen: Ini

    },
    DataView:{
      screen:DataView
    }
    

},

 
);



