import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const InputField = ({ label, placeholder, onChangeText, value, secureTextEntry, style, error }) => (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    input: {
      height: 40,
      marginVertical: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
    },
    label: {
      fontSize: 16,
    },
    error: {
      fontSize: 12,
      color: 'red',
    },
  });
  

export default InputField;
