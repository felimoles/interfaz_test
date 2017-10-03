import React, {Component} from "react";
import{View,Text, Picker,StyleSheet} from 'react-native';

 export default class HomeView extends Component{
        constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload'

        };
      }


    render(){

        return (
            <Text> Selecciona tu ubicacion </Text>
                  
        );

    }

}


var styles = StyleSheet.create({

  container: {
  flex: 1,
flexDirection: 'column',
  backgroundColor:'white',
  // remove width and height to override fixed static size
  width: null,
  height:null,
},
  picker:{
    height:88
  }
});