import React, {Component} from "react";
import{View,Text, Picker,StyleSheet,FlatList,ScrollView,TextInput,Button,Platform} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import ExpandableView from 'react-native-expandableview';

const Realm = require('realm');
 export default class HomeView extends Component{
        constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload',
         checked: true,
         realm: null
        };
      }

       static navigationOptions = {
    title: 'Arbol',
  
  }
 next(){
         this.props.navigation.navigate('DataView');
     }
     componentWillMount(){
           Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });
      this.setState({ realm });
    });
   
     }

    render(){
      const info = this.state.realm
     
      ? 'N: ' + this.state.realm.objects('Dog').length
      : 'Loading...';
        if(Platform.OS === 'android'){
         
        return (
           
            <View > 
              <ScrollView>
              <Text>Ingresa tu Zona  {info}</Text>
              
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

       


<Text> Selecciona tu Especie </Text>
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
<Divider style={{ backgroundColor: 'green' }} />
 <Text>Diametro del arbol </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Centimetros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
        />
<Divider style={{ backgroundColor: 'green' }} />
 <Text>Altura del arbol </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Metros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
        />

     <Divider style={{ backgroundColor: 'green' }} />
         <Text>Altura del tocon </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Metros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
        />
              <Divider style={{ backgroundColor: 'green' }} />
                <ExpandableView 
              contet={<View><Text>Seccion 1</Text></View>}
              
              />
                <ExpandableView 
              contet={<View><Text>Seccion 2</Text></View>}
              
              />

                <ExpandableView 
              contet={<View><Text>Seccion 3</Text></View>}
              
              />

                <Text> Rectitud </Text>
              <ScrollView horizontal= {true}>
                <View>
               <View style={{width: 50, height: 50,margin:5, backgroundColor: 'powderblue'}} />
                <CheckBox
                  checked={this.state.checked}
                   checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  containerStyle= {{backgroundColor:'transparent'}}/>
                  </View>
                  
                  <View>
                <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'green'}} />
                           <CheckBox
                  checked={this.state.unchecked}
                   checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  containerStyle= {{backgroundColor:'transparent'}}/>
                         </View>
                          <View>
                         <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'yellow'}} />
                           <CheckBox
                  checked={this.state.unchecked}
                   checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  containerStyle= {{backgroundColor:'transparent'}}/>
                          </View>
                </ScrollView>
                 <Divider style={{ backgroundColor: 'green' }} />

              <Text> Forma </Text>
                   <ScrollView horizontal= {true}>
               <View style={{width: 50, height: 50, margin:5, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'green'}} />
                         <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'yellow'}} />

                </ScrollView>
               <Divider style={{ backgroundColor: 'green' }} />

              <Text> Sanidad </Text>
                   <ScrollView horizontal= {true}>
               <View style={{width: 50, height: 50, margin:5, backgroundColor: 'blue'}} />
                <View style={{width: 50, height: 50, margin:5, backgroundColor: 'green'}} />
                <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'yellow'}} />

                </ScrollView>
               <Divider style={{ backgroundColor: 'green' }} />

              <Text> Defectos </Text>
                   <ScrollView horizontal= {true}>
               <View style={{width: 50, height: 50, margin:5, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'green'}} />
                         <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'yellow'}} />
                           <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'orange'}} />
                                  <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'lightblue'}} />

                </ScrollView>
              
                     <Button title='Continuar' onPress= {this.next.bind(this)}/>
              </ScrollView>
        
                </View>
        );

    }else{
        console.log(info);

        return (
           
            <View > 
              <ScrollView>
              <Text>Ingresa tu Zona   {info}</Text>
              
                 <Picker style={[styles.picker]}
        itemStyle={{height: 88}}
  selectedValue={this.state.zona}
  onValueChange={(itemValue, itemIndex) => this.setState({zona: itemValue})}>
  <Picker.Item label="Secano Costero" value="Sr_Pr" />
  <Picker.Item label="Secano Interior" value="Si" />
   <Picker.Item label="Valle Secano" value="Vs" />
    <Picker.Item label="Precordillera" value="Pr" />
</Picker>

       


<Text> Selecciona tu Especie </Text>
        <Picker

        style={[styles.picker]}
        itemStyle={{height: 88}}
  selectedValue={this.state.arb}
  onValueChange={(itemValue2, itemIndex) => this.setState({arb: itemValue2})}>
  <Picker.Item label="Roble" value="Ro" />
  <Picker.Item label="Raulí" value="Ra" />
    <Picker.Item label="Coigüe" value="Co" />
    
</Picker>
<Divider style={{ backgroundColor: 'green' }} />
 <Text>Diametro del arbol </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Centimetros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
        />
<Divider style={{ backgroundColor: 'green' }} />
 <Text>Altura del arbol </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Metros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
        />

     <Divider style={{ backgroundColor: 'green' }} />
         <Text>Altura del tocon </Text>
            <TextInput
        style={{height: 40,width: 200,}}
        placeholder="Metros"
        onChangeText={(d13cc) => this.setState({d13cc})}
        value ={this.state.d13cc}
        maxLength={14}
        />
              <Divider style={{ backgroundColor: 'green' }} />
                     <ExpandableView 
              contet={<View><Text>Seccion 1</Text></View>}
              
              />

                       <ExpandableView 
              contet={<View><Text>Seccion 2</Text></View>}
              
              />

                       <ExpandableView 
              contet={<View><Text>Seccion 3</Text></View>}
              
              />
              <Text> Rectitud </Text>
              <ScrollView horizontal= {true}>
                <View>
               <View style={{width: 50, height: 50,margin:5, backgroundColor: 'powderblue'}} />
                <CheckBox
                  checked={this.state.checked}
                   checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  containerStyle= {{backgroundColor:'transparent'}}/>
                  </View>
                  
                  <View>
                <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'green'}} />
                           <CheckBox
                  checked={this.state.unchecked}
                   checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  containerStyle= {{backgroundColor:'transparent'}}/>
                         </View>
                          <View>
                         <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'yellow'}} />
                           <CheckBox
                  checked={this.state.unchecked}
                   checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  containerStyle= {{backgroundColor:'transparent'}}/>
                          </View>
                </ScrollView>
                 <Divider style={{ backgroundColor: 'green' }} />

              <Text> Forma </Text>
                   <ScrollView horizontal= {true}>
               <View style={{width: 50, height: 50, margin:5, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'green'}} />
                         <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'yellow'}} />

                </ScrollView>
               <Divider style={{ backgroundColor: 'green' }} />

              <Text> Sanidad </Text>
                   <ScrollView horizontal= {true}>
               <View style={{width: 50, height: 50, margin:5, backgroundColor: 'blue'}} />
                <View style={{width: 50, height: 50, margin:5, backgroundColor: 'green'}} />
                <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'yellow'}} />

                </ScrollView>
               <Divider style={{ backgroundColor: 'green' }} />

              <Text> Defectos </Text>
                   <ScrollView horizontal= {true}>
               <View style={{width: 50, height: 50, margin:5, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'green'}} />
                         <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'yellow'}} />
                           <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'orange'}} />
                                  <View style={{width: 50, height: 50,margin:5,  backgroundColor: 'lightblue'}} />

                </ScrollView>
              
             <Divider style={{ backgroundColor: 'green' }} />
                     <Button title='Continuar' onPress= {this.next.bind(this)}/>
              </ScrollView>
        
                </View>
        );

    }

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
    height:88
  }
});