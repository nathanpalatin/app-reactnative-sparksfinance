import { styles } from './style';
import { Text, TouchableOpacity, View } from 'react-native';


export function Task(){

  return (
   
    <View style={styles.card}>
      <TouchableOpacity style={styles.btnTaskCheck}>
      <Text>asdas</Text> 
        </TouchableOpacity>
      <Text style={styles.task}>
        Arrumar pasta de Downloads
      </Text>
      <TouchableOpacity style={styles.buttonDel}>
         <Text>-</Text> 
      </TouchableOpacity>
    </View>
  )

}