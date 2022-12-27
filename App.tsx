import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="light"  />
      <Text style={styles.text}>Bom dia, Nathan!</Text>
      <Text style={styles.text2}>Terça-feira, 27 de Dezembro de 2022</Text>
    
      <View style={styles.boxBalance}>
        <ScrollView>
      <Text style={styles.textBalance}>Seu saldo:</Text>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0053a8',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left'
  },
  boxBalance: {
    flex: 1,
    backgroundColor: '#EEE',
    width: '90%',
    marginTop: 20,
    height: '20'
  },
  textBalance: {
    paddingLeft: 20,
    color: '#141416',
    fontSize: 30,
    paddingTop: 30,
    fontWeight: 'bold'
  },
  text: {
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 58,
   
  },
  text2: {
    color: '#d1d1d1',
    fontSize: 16,
    marginLeft:20
  }
});
