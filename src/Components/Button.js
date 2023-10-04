// src/Components/Button.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
