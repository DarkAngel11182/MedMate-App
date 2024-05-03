import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, FontSize } from '../GlobalStyles';

const ForgotAccount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
});

export default ForgotAccount;
