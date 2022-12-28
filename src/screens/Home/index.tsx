import { useState } from 'react';
import { styles } from './styles';
import { View, Image, TextInput, TouchableOpacity, Text, Alert, FlatList } from 'react-native';

import { Task } from '../../components/Tasks';

export function Home(){

  const [tasks, setTasks] = useState<String[]>([]);
  const [taskName, setTaskName] = useState('')

  function handleAddTask() {
    if (tasks.includes(taskName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }

    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');
  }

 
  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTaskName(prevState => prevState.filter(quest => quest !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    
    <View style={styles.container} >
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
    value={taskName}
    />
    <TouchableOpacity style={styles.btnAdd} onPress={handleAddTask}>
      <Text style={styles.textBtn}>
        +
        </Text>   
    </TouchableOpacity>
    </View>

    <View style={styles.boxTasks}>

      <Text style={styles.textTotalTasks}>Criadas 3</Text>
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
      />
      
      )} 
      showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
         <>
          <Image
          style={styles.IMGnoTask}
          source={require('../../images/notask.png')}
          />

          <Text style={styles.noneTask}>
            <Text style={styles.noneTaskBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
              {"\n"}
              Crie tarefas e organize seus itens a fazer
          </Text>
          </>
          )}
        />
             </View>   
      </View>
    );
}
