import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function Button({ onPress, title, style, disabled }) {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[styles.button, style, disabled && styles.disabled]} 
            disabled={disabled}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
  
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',  // Default background color
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',  // Center content within the button
        justifyContent: 'center'
    },
    disabled: {
        backgroundColor: 'gray',  // Different background for disabled state
        opacity: 0.5  // Typically good to reduce opacity for disabled elements
    },
    text: {
        color: 'white',
        textAlign: 'center',
    }
});

export default Button;
