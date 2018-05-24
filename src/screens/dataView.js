import React, {Component} from "react";
import{View,Text,FlatList,TouchableHighlight, TextInput} from 'react-native';
import { Container,Card,CardItem, Header, Content, Body, Form, Item, Input,Button,Label,Title, Separator, List,ListItem,Left,Right, Icon,Picker } from 'native-base';
export default class DataView extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selected1: "key1"
        };
      }
      onValueChange(value) {
        this.setState({
          selected1: value
        });
      }

       static navigationOptions = {
    title: 'Productos',
    header:null
  }

  componentWillMount(){
      
    /*Realm.open({ schema: [{name: 'Dog', properties: {name: 'string'}}]}).then(
        
        realm => {
        this.setState({realm});
       let jf= this.state.realm.objects('Dog').length;
        console.log("dogopen", jf);
    })*/

  }





    render(){

        return (
            <Container>
               <Header>
            <Body>
            <Title>Descripción de arbol</Title>
          </Body>
          </Header>
            <Content>
            <Form>
              <Text>Selecciona tu zona</Text>
              <Picker
                iosHeader="Selecciona tu ubicación"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Valle Secano" value="key0" />
                <Picker.Item label="Secano" value="key1" />
                <Picker.Item label="Precordillera" value="key2" />
             
              </Picker>
              <Text>Selecciona tu especie</Text>
              <Picker
                iosHeader="Selecciona tu ubicación"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Roble" value="key0" />
                <Picker.Item label="Coihue" value="key1" />
             
              </Picker>

               <Item fixedLabel>
                  <Label>Diametro</Label>
                  <Input />
                </Item>

                 <Item fixedLabel>
                  <Label>Altura del Arbol</Label>
                  <Input />
                </Item>
                <Item fixedLabel>
                  <Label>Altura del Tocon</Label>
                  <Input />
                </Item>
            </Form>
          </Content>
        </Container>   
        );

    }

}