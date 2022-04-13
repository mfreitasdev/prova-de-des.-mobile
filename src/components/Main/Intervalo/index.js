import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TouchableOpacity ,TextInput } from 'react-native';

export default function Intervalo(){

const [valor1, setValor1]=useState('');
const [valor2, setValor2]=useState('');
const [valor3, setValor3]=useState('');

function acaodobotao2(){
    const calcular2 = (((parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)) /3 ).toFixed(2));
    
    if(calcular2 < 10 ){
      alert('A média dos três valores está abaixo de 10');
    } else if(calcular2 >= 10 && calcular2 <= 50){
      alert('A média dos três valores está entre 10 e 50');
    } else if(calcular2 > 50){
      alert('A média dos três valores está acima de 50');
    }
  
  }

  return(

<View style={estilos.container}>

<   Text style={estilos.titulo}>
    Verifique um intervalo de valores!</Text>
      
      <TextInput
        style={estilos.inputs}
        value={valor1}
        onChangeText={(valor1) => setValor1(valor1)}
        placeholder="Digite o primeiro valor"
        keyboardType='numeric'

      ></TextInput>

      <TextInput
        style={estilos.inputs}
        value={valor2}
        onChangeText={(valor2) => setValor2(valor2)}
        placeholder="Digite o segundo valor"
        keyboardType='numeric'

      ></TextInput>

      <TextInput
        style={estilos.inputs}
        value={valor3}
        onChangeText={(valor3) => setValor3(valor3)}
        placeholder="Digite o terceiro valor"
        keyboardType='numeric'

      ></TextInput>

      <TouchableOpacity 
        style={estilos.button}
        onPress={acaodobotao2}
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
        margin:10,
        padding:5

    },
    inputs:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        margin:8,
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