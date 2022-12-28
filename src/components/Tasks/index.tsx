import { styles } from './style';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  task: string;
  onRemove: () => void;
}

export function Task({ task, onRemove }: Props){

  return (
   <>
    <View style={styles.card}>
      <TouchableOpacity style={styles.buttonActs}>
      <Text>
        <Icon name="hearto" size={25} color={'#3E3E3E'}  />
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
