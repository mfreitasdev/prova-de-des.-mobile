import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import Nota from './src/components/Main/Nota';
import Intervalo from './src/components/Main/Intervalo';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Nota/>
      <Intervalo/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    paddingTop:0,  
    
  },
});
