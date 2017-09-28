import React, {Component} from "react";
import{View,Text} from 'react-native';

export default class homeView extends Component{
        constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload'

        };
      }


    render(){
           const {navigate} = this.props.navigation;
  const msg2 = `More coming soon!`;
        return (

            <Text> homeView </Text>

        );

    }

}