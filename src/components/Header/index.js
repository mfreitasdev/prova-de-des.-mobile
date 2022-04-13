import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TouchableOpacity ,TextInput } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';

export default function Header(){
    return(
        <View >
            <LinearGradient
        colors={['rgba(0,0,0,0)', 'transparent']}
      />
      <LinearGradient
        colors={['#FF8C00', '#FFA500', '#FFFF00']}
        style={estilos.header}>
        <Text style={estilos.titulo}>LOREM</Text>
      </LinearGradient>
        </View>
    );
}

const estilos = StyleSheet.create({
    header:{
      backgroundColor:'#000',
      padding:30,
      justifyContent: 'center',
      alignItems:'center',
      
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold'
    }
  
  });
