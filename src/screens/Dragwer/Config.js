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
    title: 'Configuracion',
  
  }

    render(){

        return (
            <View>
            <Text> Configuración.</Text>

              <Text> Agregar Precios. </Text>
</View>
        );

    }

}