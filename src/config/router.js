import React from 'react';
import { Text } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

import HomeView from '../screens/HomeView';
import DataView from '../screens/DataView';
import Ini from '../screens/Ini';
import Login from '../screens/Login';
import Register from '../screens/Register';


import Config from '../screens/Dragwer/Config';
import Save from '../screens/Dragwer/Save';




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
  }
 
},
   {
  headerMode: 'none',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
   
    title: 'Config',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
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


export const dragw = DrawerNavigator({
  Home:{screen: Tabs
  },
  Config: {screen: Config},
  Save: {screen: Save},
},

{
     
     contentOptions: {
     
     style: {
       flex: 1,
       paddingTop: 15,
     }
   }


});

export const LogReg = StackNavigator ({
    Login:{
      screen: Login,
    },

    Tabs:{
      screen: dragw,
   
    },

    Register:{
      screen: Register

    },
 
    

}, 

 
);



