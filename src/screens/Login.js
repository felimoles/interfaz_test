import React, {Component} from "react";
import{View,Text} from 'react-native';
import {FormLabel,FormInput,Button, Divider} from 'react-native-elements';
 
 
export default class Login extends Component{
        constructor(props) {
        super(props);
   
        this.state = {
        showText: true,
               input:'login',
               password:''

        };
      }
           setPassword(pass) {
          this.setState({password:pass});
     }
     setEmail(input) {
          this.setState({input:input});
     }
     register(){
         this.props.navigation.navigate('Register');
     }

     login(a,b){
            console.log(a,b);
          if(this.state.password == this.state.input){
               this.props.navigation.navigate('Tabs');
               console.log("success");
          }else {
               console.log("fail");
               //this.props.navigation.navigate('Login')
          }
     }

    render(){

        return (
            <View>
     <FormLabel>Email</FormLabel>
                    <FormInput style={{
                         margin: 15,
                         height: 40,
                         borderColor: '#7a42f4',
                         borderWidth: 1
                    }} onChangeText={(text) => this.setEmail(text)}
                    />
                    <FormLabel>Contraseña</FormLabel>

                    <FormInput style={{
                         margin: 15,
                         height: 40,
                         borderColor: '#7a42f4',
                         borderWidth: 1
                    }} onChangeText={(text) => this.setPassword(text)} secureTextEntry={this.state.showText}
                    />

                    <Text onPress={() => {
                         this.setState({
                              'showText': !this.state.showText
                         })
                    }}>Mostrar Contraseña</Text>
                    <Text> </Text>

                    <Button title='Entrar' onPress= {this.login.bind(this,"test",this.input)}/>
                    <Text> </Text>
                     <Button title='Registro' onPress= {this.register.bind(this)}/>
                        </View>
        );

    }

}


