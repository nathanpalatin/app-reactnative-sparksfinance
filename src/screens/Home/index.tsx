import { useState } from 'react';
import { styles } from './styles';
import * as C from 'react-native';
import BtnAdd from 'react-native-vector-icons/AntDesign';
import NoList from 'react-native-vector-icons/MaterialIcons';
import { Task } from '~components/Tasks';

export function Home(){

  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');
  const [totalTasks, setTotalTasksDone ] = useState<number>(0);
  const [createdTasks, setTotalCreatedTasks ] = useState(0);

  const [isFocused, setIsFocused] = useState(false);

  function handleAddTask() {
    if (tasks.includes(taskName)) {
        return C.Alert.alert('Ops, algo deu errado.', 'Essa tarefa já existe, finalize ou remova para adiciona-la novamente.');
    }
      setTasks(prevState => [...prevState, taskName]);
      setTaskName('');
      setTotalCreatedTasks(createdTasks + 1); 
  }

  function handleTaskDone(name: string) {
      C.Alert.alert('Finalizou jão?', 'Você terminou essa tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTotalTasksDone(totalTasks + 1);
        } 
      },
      {
        text: 'Não',
        onPress: () => setTaskName(''),
        style: 'cancel'
      }
    ])
  }
 
  function handleTaskRemove(name: string) {
       
    setTasks(prevState => prevState.filter(task => task !== name));
        if(createdTasks > 0) {
            setTotalCreatedTasks(createdTasks - 1);
        }
        if(totalTasks > 0) {
            setTotalTasksDone(totalTasks - 1)
        }
  }



    return (
    
<C.View style={styles.container}> 

      <C.View style={styles.topBG}>
        <C.Image source={require("~images/logo.png")} style={styles.logoTodo} />
      </C.View>
     
  <C.View style={styles.formAdd}>

    <C.TextInput 
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    style={[
      styles.inputAdd,
      isFocused ? styles.inputAdd2 : styles.inputAdd
    ]}
    placeholder="Adicione uma nova tarefa"
    placeholderTextColor="#808080"
    onChangeText={text => setTaskName(text)}
    value={taskName}
    returnKeyType="done"
    keyboardAppearance={'dark'}
    />   
      <C.Pressable
          onPress={handleAddTask}
          style={styles.btnAdd}
          >
            <BtnAdd name="pluscircleo" size={18} color={'#F2F2F2'} />
      </C.Pressable>
  </C.View>


    <C.View style={styles.boxTasks}>
      <C.Text style={styles.textTotalTasks}>
        Criadas {createdTasks}
      </C.Text>
      <C.Text style={styles.textTasksDone}>
        Concluídas {totalTasks}
      </C.Text>
    </C.View>
   
    <C.View style={styles.myTasks}> 

    
    <C.FlatList 
      data={tasks}
      keyExtractor={( item ) => item}
      renderItem={({ item }) => (
  
        <Task 
          key={Math.random()} 
          task={item}
          onRemove={() => handleTaskRemove(item)}
          checkTask={() => handleTaskDone(item)}
        />
       
      )}
      showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <C.Text style={styles.noneTask}>
              <NoList name="list-alt" size={60} /> {'\n'}{'\n'}
            <C.Text style={styles.noneTaskBold}>
              Nathan, tu não tem nada pra fazer ainda esse ano?
            </C.Text>
              {"\n"}
              Eu sei que tu tem, vai!
          </C.Text>
          )}
        />
        </C.View> 
  </C.View>
    );
}
