import { styles } from './style';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconTask from 'react-native-vector-icons/Entypo';

type Props = {
  task: string;
  onRemove: () => void;
  checkTask: () => void;
}

export function Task({ task, onRemove, checkTask }: Props){

  return (
   <>
    <View style={styles.card}>
      <TouchableOpacity style={styles.buttonActs} onPress={checkTask} >
      <Text>
        <IconTask name="circle" size={25} color={'#4EA8DE'}  />
        </Text>   
        </TouchableOpacity>
      <Text style={styles.task}>
        {task}
      </Text>
      <TouchableOpacity style={styles.buttonActs} onPress={onRemove}>
      <Text>
        <Icon name="delete" size={25} color={'#3E3E3E'} />
        </Text>   
      </TouchableOpacity>
    </View>
    </>
  )

}
