import React, {Component} from "react";
import{View,Text} from 'react-native';

export default class Config extends Component{
    constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload'

        };
      }
       static navigationOptions = {
    title: 'Datos Guardados',
  
  }

    render(){

        return (
            <View>
            <Text> Mis datos.</Text>

              <Text> Lista de datos guardados. </Text>
</View>
        );

    }

}