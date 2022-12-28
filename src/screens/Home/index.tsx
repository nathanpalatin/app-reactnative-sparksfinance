import { styles } from './styles';
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Task } from '../../components/Tasks';

export function Home(){

  function handleAddTask(){
      Alert.alert("Todo", 'Ok, você adicionou uma nova tarefa.');
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

    <Task />

    <Image
        style={styles.IMGnoTask}
        source={require('../../images/notask.png')}
      />
          <Text style={styles.noneTask}>
            <Text style={styles.noneTaskBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
          {"\n"}
            Crie tarefas e organize seus itens a fazer</Text>
      </View>
    
  </View>
  )

}