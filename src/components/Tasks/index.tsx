import { styles } from './style';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  task: string;
  onRemove: () => void;
}

export function Task({ task, onRemove }: Props){

  return (
   
    <View style={styles.card}>
      <TouchableOpacity style={styles.btnTaskCheck}>
      <Text></Text> 
        </TouchableOpacity>
      <Text style={styles.task}>
        {task}
      </Text>
      <TouchableOpacity style={styles.buttonDel} onPress={onRemove}>
         <Text></Text> 
      </TouchableOpacity>
    </View>
  )

}
