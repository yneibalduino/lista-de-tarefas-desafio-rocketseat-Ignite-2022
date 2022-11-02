import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Task } from '../src/screens/Home/types';
import { styles } from './tasks/styles';
import React, { useState } from 'react';

type Props = {
  task: Task;
  strikeTask: () => void;
  onRemove: () => void;
}

export function Tasks({task, onRemove, strikeTask}: Props){
  
  return(
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.tasks} onPress={strikeTask}>
        <Text style={[styles.colorText,task.conclude ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: '#808080'} : {}]}>
          {task.taskName}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
              -
        </Text>
      </TouchableOpacity>
    </View>
  )
}