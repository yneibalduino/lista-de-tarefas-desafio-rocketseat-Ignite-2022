import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import Home from '../src/screens/Home';
import { styles } from './tasks/styles';

interface ButtonProps extends TouchableOpacityProps {
  title: String;
}

export function Button({title, ...rest}:ButtonProps){
  return(
    <TouchableOpacity 
    style={styles.buttonAdd} 
    {...rest}
    >
      <Text style={styles.buttonAddText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}