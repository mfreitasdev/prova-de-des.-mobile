import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TouchableOpacity ,TextInput } from 'react-native';

export default function Nota(){

const [nota1, setNota1]=useState('');
const [nota2, setNota2]=useState('');
const [nota3, setNota3]=useState('');

function acaodobotao(){
    const calcular = (((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3 ).toFixed(2));
    
    if(calcular >= 7 ){
      alert('Você está aprovado!');
    } else if(calcular >= 5 && calcular < 7){
      alert('Você está na prova final!');
    } else if(calcular < 5){
      alert('Você está reprovado!');
    }
  
  }

  return (


    <View style={estilos.container}>
        
          <Text style={estilos.titulo}>
            Verifique sua média!</Text>
  
          <TextInput
            style={estilos.inputs}
            value={nota1}
            onChangeText={(nota1) => setNota1(nota1)}
            placeholder="Digite a primeira nota"
            keyboardType='numeric'
  
          ></TextInput>
  
          <TextInput
            style={estilos.inputs}
            value={nota2}
            onChangeText={(nota2) => setNota2(nota2)}
            placeholder="Digite a segunda nota"
            keyboardType='numeric'
  
          ></TextInput>
  
          <TextInput
            style={estilos.inputs}
            value={nota3}
            onChangeText={(nota3) => setNota3(nota3)}
            placeholder="Digite a terceira nota"
            keyboardType='numeric'
  
          ></TextInput>
  
          <TouchableOpacity 
            style={estilos.button}
            onPress={acaodobotao}
          >
            
            <Text style={estilos.buttonText}>Calcular</Text>
          </TouchableOpacity>
          </View>
);
}

const estilos = StyleSheet.create({
  header:{

  },
  container:{
    flex:1,

  },
  titulo:{
    textAlign:'center',
    fontSize:18,
    padding:5,
    margin:10,
  },
  inputs:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
    margin:8,
    position:'relative',
  },
  button:{
    backgroundColor:'#FF8C00',
    padding:10,
    justifyContent: 'center',
    alignItems:'center',
    margin: 10,
    color:'grey',
    borderRadius:10,
    
  },
  buttonText:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold'

  },

});




