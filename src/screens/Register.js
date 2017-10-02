import React, {Component} from "react";
import{View,Text} from 'react-native';

 export default class Register extends Component{
        constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload'

        };
      }


    render(){

        return (

            <Text> Registro</Text>

        );

    }

}


