import React, {Component} from "react";
import{View,Text, Modal,Picker,StyleSheet,FlatList,ScrollView,TextInput,Platform,TouchableHighlight,Image} from 'react-native';
import ExpandableView from 'react-native-expandableview';
import { Container, Header, Content, Form, Item, Input,Button,Body,Title, Separator, List,ListItem,Left,Right, Icon } from 'native-base'
const Realm = require('realm');

 export default class HomeView extends Component{
  static navigationOptions = {
    title: 'Resultados',
    header: null
  }
        constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload',
         checked: true,
         realm: null,
         modalVisible: false,
         diam:'',
         altura:'',
         zona:'',
         arb:'',
         rects1:'',
         forms1:'',
         defects1:'',
         sanids1:'',
         rects2:'',
         forms2:'',
         defects2:'',
         sanids2:'',
         rects3:'',
         forms3:'',
         defects3:'',
         sanids3:'',
         rec:[{val:'1', txt:'Recto',check:false,check2:false,check3:false, src:require('../img/rectitud-recto/recto.png')},
              {val:'2', txt:'Curvatura Leve',check:false,check2:false,check3:false, src:require('../img/rectitud-recto/curvatura-leve.png')},
              {val:'3', txt:'Sinuoso',check:false,check2:false,check3:false, src:require('../img/rectitud-recto/sinuoso.png') }],
            
        forma:[{val:'1',txt:'Circular', check:false,check2:false,check3:false, src:require('../img/formas/circular.png'),},
                {val:'2',txt:'Deformada', check:false,check2:false,check3:false, src:require('../img/formas/deformada.png')},
                 {val:'3',txt:'Ovalada', check:false,check2:false,check3:false, src:require('../img/formas/ovada.png')}
        ],
        defectos:[{val:'1',txt:'Sin Daño',check:false,check2:false,check3:false,src:require('../img/Defectos/sin-dano.png')},
        {val:'2',txt:'Abolladura',check:false,check2:false,check3:false,src:require('../img/Defectos/abolladura.png')},
        {val:'2',txt:'Abultamiento',check:false,check2:false,check3:false,src:require('../img/Defectos/abultamiento.png')},
        {val:'3',txt:'Hongos / Pudrición',check:false,check2:false,check3:false,src:require('../img/Defectos/hongos-pudricion.png')},
        {val:'3',txt:'Cancer',check:false,check2:false,check3:false,src:require('../img/Defectos/cancer.png')}],
       
        sanidad:[{val:'1',txt:'Ovalada',check:false,check2:false,check3:false,src:require('../img/sanidad/sindano.png') },
        {val:'2',txt:'Ovalada',check:false,check2:false,check3:false,src:require('../img/sanidad/1a3danos.png') },
        {val:'3',txt:'Ovalada',check:false,check2:false,check3:false,src:require('../img/sanidad/ilimitado.png') }]
        };
      }

      next(){
         this.props.navigation.navigate('Ini');
     }
     desc(){
      this.props.navigation.navigate('DataView');
     }

     componentWillMount(){

  
     }


    render(){
      return(

        
      

        <Container>
          
        <Content>
        <View style={{alignItems:'center',margin:10}}>

<Image
  style={{width: 70, height: 70 }}
  source={require('../img/logo-forestal-inicio-app.png')}
/>
</View>
          <List>
            <ListItem onPress= {this.next.bind(this)}>
            <Left>
                <Text >Productos</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress= {this.desc.bind(this)}>
            <Left>
                <Text>Descripcion del arbol</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
            <Left>
                <Text>Procesar</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
      )
    }



}

var styles = StyleSheet.create({

  container: {
  flex: 1,
  top:20,
flexDirection: 'column',
  backgroundColor:'white',
  // remove width and height to override fixed static size
  width: null,
  height:null,
},
  picker:{
    height:55,
    margin:2,
    borderWidth:0,
    paddingTop: 2,
    borderColor:'red',
    backgroundColor:'transparent'
  },
  texttitle:{
    color:'rgba(0,0,0,1)',
    marginLeft:1
  },
  seccionview:{
    margin:1,
    borderWidth:1,
   // height:30,
    flex:1,
    borderColor:'rgba(0,0,0,1)'
  },
    modalCont:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.7)',
    justifyContent:'center',
    alignItems:'center',
  },
  modalList:{
    flex:1,
   width:300,
   backgroundColor:'rgba(255,255,255,0.7)', 
   justifyContent:'center',
   margin:20, 
   borderWidth:1,

   borderColor:'#067644'
  },
  boxIcon:{
    width: 55, height: 55,marginRight:10, backgroundColor: 'transparent',
  },

  boxIcon2:{
    width: 55, height: 55,marginRight:10,borderColor:'red',borderWidth:2, borderTopLeftRadius:1, borderTopRightRadius:1
  }
});