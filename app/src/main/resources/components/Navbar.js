import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

const Navbar = ({ title, backBtn }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      {backBtn && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>&lt; Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: Color.colorSkyblue_100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  title: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
  },
  rightContainer: {
    // This can be used to add elements on the right side of the navbar
    width: 50, // Ensure alignment if back button is used
  }
});

export default Navbar;
