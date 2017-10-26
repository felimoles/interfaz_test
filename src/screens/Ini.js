import React, {Component} from "react";
import{View,Text,Button} from 'react-native';

 export default class Ini extends Component{
        constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload'

        };
      }

       static navigationOptions = {
    title: 'Resultados',
  }
 a(){
        console.log("ad")
     }

    render(){

        return (
<View>
           
            
              <Button
              onPress={this.a.bind(this)}
  title="Procesar Datos"
  color="#841584"
  disabled={true}
 


              />


             <Text> </Text>
</View>
        );

    }

}


