import { Text, View, TextInput, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Tasks } from '../../../components/removeButton';
import { Task } from './types';
import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/addButton';

export default function Home(){

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');
  const [selectedTask, setSelectedTask] = useState<boolean>(false);
  const [greeting, setGreeting] = useState('');

  function addTask(){
    if(taskName === ''){
      return Alert.alert("O campo tarefas não pode ser vazio.",)
    }
    if(tasks.some(task => task.taskName === taskName)){
      return Alert.alert("Você já tem uma tarefa com este nome.",)
    }
    setTasks(prevTaskList => [...prevTaskList, {taskName: taskName, conclude: false}])
    setTaskName('')
  }

  function removeTask(taskName: string){   
    Alert.alert(`Remover`,`Deseja remover esta tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevTaskList => prevTaskList.filter(task => task.taskName !== taskName)),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  }

  function concludeTask(selectedTaskName: string){
    setTasks(prevTaskList => prevTaskList.map(task => task.taskName === selectedTaskName ? {...task, conclude: !task.conclude} : task))

  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGreeting('Bom dia!')
    }else if(currentHour >= 12 && currentHour < 18){
      setGreeting('Boa tarde!')
    }else{
      setGreeting('Boa noite!')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting}</Text>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <Text style={styles.subTitle}>Nunca mais se esqueça de uma tarefa!</Text>

      <View style={styles.formInput}>
        <TextInput style={styles.input}
        placeholder='Defina um lembrete/tarefa.'
        placeholderTextColor="#8C8C8C"
        onChangeText={setTaskName}
        value={taskName}
        />
        
      <Button 
        onPress={addTask}
        title="+"
        />

      </View>

      <View style={styles.formTasks}>
        <Text style={styles.criadas}>
          Criadas
        </Text>
        <View style={styles.taskCount}>
          <Text style={styles.taskCountText}>
            {tasks.length}
          </Text>
        </View>
        <Text style={styles.concluidas}>
          Concluídas
        </Text>
        <View style={styles.taskCount}>
          <Text style={styles.taskCountText}>
            {tasks.filter((task) => task.conclude).length}
          </Text>
        </View>
      </View>

      <FlatList 
        data={tasks}
        keyExtractor={item => item.taskName}
        renderItem={({ item }) => (
          <Tasks
            task={item}
            strikeTask={() => concludeTask(item.taskName)}
            onRemove={() => removeTask(item.taskName)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyTask}>
            Sua lista de tarefas está vazia.
          </Text>
        )}
      />
    </View>
  )
}