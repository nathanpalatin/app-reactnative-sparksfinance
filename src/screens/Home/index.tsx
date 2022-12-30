import { useState, useCallback } from 'react';
import { styles } from './styles';
import { View, TextInput, TouchableOpacity, Text, Alert, FlatList, Image } from 'react-native';
import BtnAdd from 'react-native-vector-icons/AntDesign';
import NoList from 'react-native-vector-icons/MaterialIcons';
import { Task } from '../../components/Tasks';
import logo from '../../images/logo.png';


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

  function handleTaskTextDone(name: string) {
    
  }

  function handleTaskDone(name: string) {
    return Alert.alert("Finalizou?", `Você terminou essa tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTotalTasksDone(totalTasks + 1);
          
        } 
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
 
  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
      {
        text: 'Sim',
       onPress: () => {
        setTasks(prevState => prevState.filter(task => task !== name));
        setTotalCreatedTasks(createdTasks - 1);
        setTotalTasksDone(totalTasks - 1)
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
        <Image source={logo} style={styles.logoTodo} />
      </View>

    <View style={styles.formAdd}>
    
    <TextInput
    style={styles.inputAdd}
    placeholder="Adicione uma nova tarefa"
    placeholderTextColor="#808080"
    onChangeText={text => setTaskName(text)}
    value={taskName}
    />
  
    <TouchableOpacity style={styles.btnAdd} onPress={handleAddTask} activeOpacity={1} >
      <Text style={styles.textBtn}>
        <BtnAdd name="pluscircleo" size={25} />
        </Text>   
    </TouchableOpacity>
    </View>

    <View style={styles.boxTasks}>
      <Text style={styles.textTotalTasks}>Criadas {createdTasks}</Text>
      <Text style={styles.textTasksDone}>Concluídas {totalTasks}</Text>
    </View>
   
    <View style={styles.myTasks}> 

      
    <FlatList
      data={tasks}
      keyExtractor={(item) => item}
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
