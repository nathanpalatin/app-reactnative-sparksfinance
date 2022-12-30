import { useState } from 'react';
import { styles } from './styles';
import { View, TextInput, Pressable, Text, Alert, FlatList, Image } from 'react-native';
import BtnAdd from 'react-native-vector-icons/AntDesign';
import NoList from 'react-native-vector-icons/MaterialIcons';
import { Task } from '@components/Tasks';

export function Home(){

  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');
  const [totalTasks, setTotalTasksDone ] = useState<number>(0);
  const [createdTasks, setTotalCreatedTasks ] = useState(0);

  function handleAddTask() {
    if (tasks.includes(taskName)) {
      return Alert.alert("Tarefa já existente", "Essa tarefa já existe, irmão.");
    }
    setTasks(prevState => [...prevState, taskName]);
    setTotalCreatedTasks(createdTasks + 1) 
    setTaskName('');
  }

  function handleTaskDone(name: string) {
    return Alert.alert('Finalizou?', 'Você terminou essa tarefa ${name}?', [
      {
        text: 'Sim',
        onPress: () => {
          setTotalTasksDone(totalTasks + 1);
          //function add style into text task
        } 
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
 
  function handleTaskRemove(name: string) {
    Alert.alert('Remover tarefa', 'Tem certeza que deseja remover a tarefa?', [
    {
        text: 'Sim',
      onPress: () => {
        setTasks(prevState => prevState.filter(task => task !== name));
          if(createdTasks > 0) {
            setTotalCreatedTasks(createdTasks - 1);
          }
          if(totalTasks > 0) {
            setTotalTasksDone(totalTasks - 1)
          }
      }
    },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
   
    <View style={styles.container}>
      
      <View style={styles.topBG}>
        <Image source={require("@images/instagram.svg")} style={styles.logoTodo} />
      </View>

    <View style={styles.formAdd}>
    
    <TextInput
    style={styles.inputAdd}
    placeholder="Adicione uma nova tarefa"
    placeholderTextColor="#808080"
    onChangeText={text => setTaskName(text)}
    />
    
   
    <Pressable onPress={handleAddTask} style={styles.btnAdd} >
    <BtnAdd name="pluscircleo" size={18} color={'#F2F2F2'} />
    </Pressable>
    </View>

    <View style={styles.boxTasks}>
      <Text style={styles.textTotalTasks}>
        Criadas {createdTasks}
      </Text>
      <Text style={styles.textTasksDone}>
        Concluídas {totalTasks}
      </Text>
    </View>
   
    <View style={styles.myTasks}> 
   
    <FlatList
    
      data={tasks}
      keyExtractor={(item ) => item}
      renderItem={({ item }) => (
  
        <Task 
          key={Math.random()} 
          task={item}
          onRemove={() => handleTaskRemove(item)}
          checkTask={() => handleTaskDone(item)}
        />
       
      )}
      showsVerticalScrollIndicator={true}
        ListEmptyComponent={() => (
          <Text style={styles.noneTask}>
              <NoList name="list-alt" size={60} /> {'\n'}{'\n'}
            <Text style={styles.noneTaskBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
              {"\n"}
              Crie tarefas e organize seus itens a fazer
          </Text>
          )}
        />
        </View> 
    </View>
    );
}
