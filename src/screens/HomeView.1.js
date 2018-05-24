import React, {Component} from "react";
import{View,Text, Modal,Picker,StyleSheet,FlatList,ScrollView,TextInput,Button,Platform,TouchableHighlight,Image} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import ExpandableView from 'react-native-expandableview';
const Realm = require('realm');

 export default class HomeView extends Component{
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

       static navigationOptions = {
    title: 'Arbol',
  
  }
      next(){
         this.props.navigation.navigate('DataView');
     }

     componentWillMount(){
        
        
         /*  Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}],
      path: 'test23.realm'
    }).then(realm => {
      realm.write(() => {
          realm.create('Dog', {name: 'Rex'});
           let allData = realm.objects('Dog');
    realm.delete(allData);  
      });
      this.setState({ realm });
     
    });*/
  
     }
     rect(n,v){
      console.log(n,v);
        let {rec} = this.state;
          rec[n].check = !rec[n].check;
          console.log(rec[n].check);
          this.setState(rec)

        if(n == 0){
          this.setState({rects1:rec[0].txt})
        rec[1].check = false;
        rec[2].check = false;

     }else if(n==1){
        this.setState({rects1:rec[1].txt})
        rec[0].check = false;
        rec[2].check = false;


     }else if(n == 2){
        this.setState({rects1:rec[2].txt})
        rec[0].check = false;
        rec[1].check = false;

     }
     
    }

     form(n,v){
      console.log(n,v);
        let {forma} = this.state;
          forma[n].check = !forma[n].check;
          //console.log(rec[n].check);
          this.setState(forma)

        if(n == 0){
          console.log("1");
          this.setState({forms1:forma[0].txt})
        forma[1].check = false;
        forma[2].check = false;
        
       
        
     }else if(n==1){
        this.setState({forms1:forma[1].txt})
       console.log("2");
       forma[0].check = false;
        forma[2].check = false;
      
      

     }else if(n == 2){
        this.setState({forms1:forma[2].txt})
      console.log("3");
      forma[0].check = false;
        forma[1].check = false;
     }

     
    }

         defec(n,v){
      console.log(n,v);
        let {defectos} = this.state;
          defectos[n].check = !defectos[n].check;
          //console.log(rec[n].check);
          this.setState(defectos)

        if(n == 0){
          console.log("1");
          this.setState({defects1:defectos[0].txt})
        defectos[1].check = false;
        defectos[2].check = false;
     
        
     }else if(n==1){
        this.setState({defects1:defectos[1].txt})
       console.log("2");
       defectos[0].check = false;
        defectos[2].check = false;

     }else if(n == 2){
        this.setState({defects1:defectos[2].txt})
      console.log("3");
      defectos[0].check = false;
        defectos[1].check = false;       

     }else if(n == 3){
        this.setState({defects1:defectos[3].txt})
      console.log("3");
      defectos[0].check = false;
        defectos[1].check = false;

     }else if(n == 4){
        this.setState({defects1:defectos[4].txt})
      console.log("3");
      defectos[0].check = false;
        defectos[1].check = false;
     }

     
    }

        sanid(n,v){
      console.log(n,v);
        let {sanidad} = this.state;
          sanidad[n].check = !sanidad[n].check;
          //console.log(rec[n].check);
          this.setState(sanidad)

        if(n == 0){
          console.log("1");
          this.setState({sanids1:sanidad[0].txt})
        sanidad[1].check = false;
        sanidad[2].check = false;
      
     }else if(n==1){
        this.setState({sanids1:sanidad[1].txt})
       console.log("2");
       sanidad[0].check = false;
        sanidad[2].check = false;
     }else if(n == 2){
        this.setState({sanids1:sanidad[2].txt})
      console.log("3");
      sanidad[0].check = false;
        sanidad[1].check = false;
     }

     
    }


      setModalVisible(visible) {
         this.setState({modalVisible: visible});
      }

       renderItemRec({item,index}){
        console.log(item.val);
        let {rec} = this.state;
        console.log(rec[index].check);
         return(
           <View>
           
           <TouchableHighlight
          onPress={() => this.rect(index,'1')}
          underlayColor={"transparent"}
          >
             
          <View >
          
          <Image source={rec[index].src} style={rec[index].check == true ? styles.boxIcon2 : styles.boxIcon}/>
            </View>
          </TouchableHighlight>
         
             </View>
         )
       }

              renderItemForm({item,index}){
        console.log(item.val);
        let {forma} = this.state;
        //console.log(rec[index].check);
         return(
           <View>
           
           <TouchableHighlight
          onPress={() => this.form(index,'1')}
          underlayColor={"transparent"}
          >
             
          <View >
          
          <Image source={forma[index].src} style={forma[index].check == true ? styles.boxIcon2 : styles.boxIcon}/>
            </View>
          </TouchableHighlight>
         
             </View>
         )
       }

              renderItemDefec({item,index}){
        console.log(item.val);
        let {defectos} = this.state;
        //console.log(rec[index].check);
         return(
           <View>
           
           <TouchableHighlight
          onPress={() => this.defec(index,'1')}
          underlayColor={"transparent"}
          >
             
          <View >
          
          <Image source={defectos[index].src} style={defectos[index].check == true ? styles.boxIcon2 : styles.boxIcon}/>
            </View>
          </TouchableHighlight>
         
             </View>
         )
       }
           renderItemSanid({item,index}){
        console.log(item.val);
        let {sanidad} = this.state;
        //console.log(rec[index].check);
         return(
           <View>
           
           <TouchableHighlight
          onPress={() => this.sanid(index,'1')}
          underlayColor={"transparent"}
          >
             
          <View >
          
          <Image source={sanidad[index].src} style={sanidad[index].check == true ? styles.boxIcon2 : styles.boxIcon}/>
            </View>
          </TouchableHighlight>
         
             </View>
         )
       }
    render(){
      
      const info = this.state.realm
     
      ? 'N: ' + this.state.realm.objects('Dog').length
      : 'Loading...';
       
         
        return (
           
            <View > 
              <ScrollView>
              <Text style={styles.texttitle}>Ingresa tu Zona:</Text>
              
                 <Picker style={[styles.picker]}
                   mode={'dropdown'}
        itemStyle={{height: 88}}
  selectedValue={this.state.zona}
  onValueChange={(itemValue, itemIndex) => this.setState({zona: itemValue})}>
  <Picker.Item label="Secano Costero" value="Sr_Pr" />
  <Picker.Item label="Secano Interior" value="Si" />
   <Picker.Item label="Valle Secano" value="Vs" />
    <Picker.Item label="Precordillera" value="Pr" />
</Picker>

       


<Text style={styles.texttitle}> Selecciona tu Especie: </Text>
        <Picker
        mode={'dropdown'}
        style={[styles.picker]}
        itemStyle={{height: 88}}
  selectedValue={this.state.arb}
  onValueChange={(itemValue2, itemIndex) => this.setState({arb: itemValue2})}>
  <Picker.Item label="Roble" value="Ro" />
  <Picker.Item label="Raulí" value="Ra" />
    <Picker.Item label="Coigüe" value="Co" />
    
</Picker>
 <Text style={styles.texttitle}>Diametro del arbol </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Centimetros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
        underlineColorAndroid={'transparent'}
        />

 <Text style={styles.texttitle}>Altura del arbol </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Metros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
         underlineColorAndroid={'transparent'}
        />

     
         <Text style={styles.texttitle}>Altura del tocon </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Metros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
         underlineColorAndroid={'transparent'}
        />
               <TouchableHighlight
                    onPress={() => this.setModalVisible(true)}
                  underlayColor="transparent"
                 >
                 <View>
                    <View style={styles.seccionview}>
                      <Text style={styles.texttitle}>Seccion 1</Text>
                      <Text>Altura: {this.state.altura}</Text>
              
                        <Text>Rectitud: {this.state.rects1} </Text>
               

                    <Text> Forma:{this.state.forms1} </Text>
                    <Text> Defectos:{this.state.defects1} </Text>
                    <Text> Sanidad: {this.state.sanids1}</Text>
                      </View>
                </View>
               </TouchableHighlight>
           
              
              <View  style={styles.seccionview}>
                <Text style={styles.texttitle}>Seccion 2</Text>
                <Text>Altura: </Text>
                <Text>Rectitud: </Text>
                <Text> Forma: </Text>
                <Text> Defectos: </Text>
                <Text> Sanidad: </Text>
                </View>

                <View  style={styles.seccionview} >
                  <Text style={styles.texttitle}>Seccion 3</Text>
                   <Text>Altura: </Text>
                <Text>Rectitud: </Text>
                <Text> Forma: </Text>
                <Text> Defectos: </Text>
                <Text> Sanidad: </Text>
                </View>
               
              
              

             
           </ScrollView>

                          <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => { alert("Modal has been closed."), this.setModalVisible(!this.state.modalVisible) }}
          >
           <View style={styles.modalCont}>
       
                    <View style={styles.modalList} >

  

          <Text style={styles.texttitle}>Altura:</Text>
          
          <TextInput 
           style={{height: 40,width: 200,}}
        placeholder="ingresa altura"
        onChangeText={(d13cc) => this.setState({altura: d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
         underlineColorAndroid={'transparent'}

          />
          <Text style={styles.texttitle}> Rectitud </Text>
          <View style={{margin:5}}>
          <ScrollView
          horizontal={true}
          >
          <FlatList
          data={this.state.rec}
          renderItem={this.renderItemRec.bind(this)}
          extraData={this.state}
          horizontal={true}
          />


      
    
  
          
            </ScrollView>
            </View>
             <Text style={styles.texttitle}> Forma </Text>
          <View style={{margin:5}}>
          <ScrollView
          horizontal={true}
          >
                  <FlatList
          data={this.state.forma}
          renderItem={this.renderItemForm.bind(this)}
          extraData={this.state}
          horizontal={true}
          />

  
          
            </ScrollView>
            </View>

             <Text style={styles.texttitle}> Defectos </Text>
          <View style={{margin:5}}>
          <ScrollView
          horizontal={true}
          >
           <FlatList
          data={this.state.defectos}
          renderItem={this.renderItemDefec.bind(this)}
          extraData={this.state}
          horizontal={true}
          />
       
            </ScrollView>
            </View>
             <Text style={styles.texttitle}> Sanidad </Text>
          <View style={{margin:5}}>
          <ScrollView
          horizontal={true}
          >
         <FlatList
          data={this.state.sanidad}
          renderItem={this.renderItemSanid.bind(this)}
          extraData={this.state}
          horizontal={true}
          />
          
          
            </ScrollView>
            </View>
                          <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
             // this.addItem();
            }}
             underlayColor='green'
            style={{marginBottom:10,backgroundColor:'green', height:40}}>
            <View style={{justifyContent:'center'}}>
           
              <Text style={styles.txcenter}>Guardar</Text></View>
            </TouchableHighlight>
                </View>
                </View>
   
       

    
        </Modal>

        
                </View>
        );



}
 }

var styles = StyleSheet.create({

  container: {
  flex: 1,
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