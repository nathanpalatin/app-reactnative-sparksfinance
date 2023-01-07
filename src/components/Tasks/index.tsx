import * as C from 'react';
import { styles } from './style';
import * as T from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  task: string;
  onRemove: () => void;
  checkTask: () => void;
}



C.useEffect(() => {
  
}, []);

export function Task({ task, onRemove, checkTask }: Props){
  
    const [isDone, setIsDone] = C.useState(false);

  return (
   <>
   <T.View style={styles.card}>     
      <T.TouchableOpacity style={styles.buttonActs}
          onPress={() => {
            setIsDone(true);
            checkTask();
          }}
        disabled={isDone}
        >
      <T.Text>
        {
          isDone ? <MaterialIcons name="check-circle" size={35} color="#5E60CE"  /> :
          <MaterialIcons name="circle" size={35} color="#4EA8DE" />
        }
        </T.Text>   
        </T.TouchableOpacity>
      <T.Text style={isDone ? styles.taskDone : styles.task}>
        {task}
      </T.Text>
      <T.TouchableOpacity style={styles.buttonActs} onPress={onRemove}>
      <T.Text>
      <MaterialIcons name="delete" size={35} color="#808080" />
        </T.Text>   
      </T.TouchableOpacity>
    </T.View>
    </>
  )
      
}
