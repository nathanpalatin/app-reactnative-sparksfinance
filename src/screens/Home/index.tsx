import { useState } from 'react';
import { styles } from './styles';
import { View, Image, TextInput, TouchableOpacity, Text, Alert, FlatList } from 'react-native';
import BtnAdd from 'react-native-vector-icons/AntDesign';
import NoList from 'react-native-vector-icons/FontAwesome5';
import { Task } from '../../components/Tasks';

export function Home(){

  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');
  const [totalTasks, setTotalTasksDone ] = useState<number>();


  function handleAddTask() {
    if (tasks.includes(taskName)) {
      return Alert.alert("Tarefa já existente", "Essa tarefa já existe, irmão.");
    }

    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');
  }

  function handleTaskDone(name: string) {
    return Alert.alert("Finalizou?", `Você terminou essa tarefa ${name}?`, [
      {
        text: 'Sim',
      //  onPress: () => setTotalTasksDone(totalTasks => [...totalTasks + 1)   
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
        onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
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
      <Image
        style={styles.logoTodo}
        source={require('../../images/logo.png')}
      />
    </View>

    <View style={styles.formAdd}>
    <TextInput
    style={styles.inputAdd}
    placeholder="Adicione uma nova tarefa"
    placeholderTextColor="#808080"
    onChangeText={text => setTaskName(text)}
    
    spellCheck={true}
    />
    <TouchableOpacity style={styles.btnAdd} onPress={handleAddTask}>
      <Text style={styles.textBtn}>
        <BtnAdd name="pluscircleo" size={25} />
        </Text>   
    </TouchableOpacity>
    </View>

    <View style={styles.boxTasks}>
      <Text style={styles.textTotalTasks}>Criadas {totalTasks}</Text>
      <Text style={styles.textTasksDone}>Concluídas 0</Text>
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
              <NoList name="clipboard-list" size={70} /> {'\n'}{'\n'}
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
