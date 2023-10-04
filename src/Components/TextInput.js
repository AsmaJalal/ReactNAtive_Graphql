// src/Components/TextInput.js
import React, { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';

const TextInput = ({ placeholder, onChangeText, value }) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextInput;
