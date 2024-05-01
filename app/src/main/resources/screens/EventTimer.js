import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily } from '../GlobalStyles';

const EventTimer = ({ title, time, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: Color.colorLightcyan,
    borderRadius: 10,
  },
  title: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
  },
  time: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
  }
});

export default EventTimer;
