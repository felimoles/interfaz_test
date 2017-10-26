import React, {Component} from "react";
import{View,Text,Button} from 'react-native';
const Realm = require('realm');
export default class DataView extends Component{
    constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload',
         realm: null
        };
      }

       static navigationOptions = {
    title: 'Productos',
    
  }

  componentWillMount(){
    Realm.open({ schema: [{name: 'Dog', properties: {name: 'string'}}]}).then(
        
        realm => {
        this.setState({realm});
       let jf= this.state.realm.objects('Dog').length;
        console.log("dogopen", jf);
    })

  }
 next(){
         this.props.navigation.navigate('Ini');
     }

    render(){

        return (
            <View>
            <Text> Tabla de Datos  </Text>
              <Text> Debobinable </Text>
               <Text> Aserrable  </Text>
                <Text> Pulpable  </Text>
                 <Text> Combustible  </Text>
                 
                         <Button title='Continuar' onPress= {this.next.bind(this)}/>
</View>
        );

    }

}