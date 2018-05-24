import React, {Component} from "react";
import{View,Text} from 'react-native';
import { Container,Card,CardItem, Header, Content, Body, Form, Item, Input,Button,Label,Title, Separator, List,ListItem,Left,Right, Icon } from 'native-base'
 export default class Ini extends Component{
        constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload'

        };
      }

       static navigationOptions = {
    title: 'Productos',
    header:null
  }
 a(){
        console.log("ad");
     }

    render(){

        return (
            <Container>
            <Header>
            <Body>
            <Title>Descripción de productos</Title>
          </Body>
          </Header>
            <Content>
        
              <Form>
             
                <Item fixedLabel>
                  <Label>Producto</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Largo</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Diametro</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Precio</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Calidad</Label>
                  <Input />
                </Item>
                
                <Separator />

                           <Item fixedLabel>
                  <Label>Producto</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Largo</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Diametro</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Precio</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Calidad</Label>
                  <Input />
                </Item>
              </Form>
          
             
            </Content>
          </Container>
        );

    }

}


