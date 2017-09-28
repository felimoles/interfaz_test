import React, {Component} from "react";
import{View,Text} from 'react-native';

export default class dataView extends Component{
    constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload'

        };
      }


    render(){

        return (

            <Text> dataView </Text>

        );

    }

}