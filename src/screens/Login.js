import React, {Component} from "react";
import{View,Text,Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input,Button,Body,Title, Separator } from 'native-base'
import { Icon } from "react-native-elements";
 
export default class Login extends Component{
    static navigationOptions = {
        title: 'Bienvenido',
       
      }
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
               this.props.navigation.navigate('HomeView');
               console.log("success");
         }else {
            //   console.log("fail");
             //  this.props.navigation.navigate('Login')
          }
     }

    render(){

        return (
<Container>
     
        <Content>
            <View style={{alignItems:'center',margin:10}}>

              <Image
                style={{width: 70, height: 70 }}
                source={require('../img/logo-forestal-inicio-app.png')}
              />
              </View>
          <Form style={{marginBottom:10}}>
            <Item>
              <Input 
              onChangeText={(text) => this.setEmail(text)}
              placeholder="Usuario" />
            </Item>
            <Item last>
              <Input
               onChangeText={(text) => this.setPassword(text)} 
              placeholder="Contraseña" />
            </Item>
          </Form>
          <Button block primary
          style={{marginBottom:10, margin:10}}
           onPress= {this.login.bind(this)}
           >
           <Text> Entrar </Text></Button>
          <Button block  primary style={{marginBottom:10, margin:10}}><Text> Registro </Text></Button>
          
        </Content>
        <Button iconRight info small style={{bottom:10,marginLeft:'20%'}}>
       
            <Text style={{margin:5}} >Acerca de la aplicación</Text>
            <Icon style={{margin:5}}  name='more' />
          
          </Button>
      </Container>
        );

    }

}


