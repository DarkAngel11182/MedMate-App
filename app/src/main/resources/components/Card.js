import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, children, style }) => (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
  
const styles = StyleSheet.create({
  card: {
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Card;
