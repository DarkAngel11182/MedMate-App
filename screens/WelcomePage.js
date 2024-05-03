import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Color, FontSize, BorderRadius } from '../GlobalStyles';
import ForgotAccount from './ForgotAccount'; // Import ForgotAccount component

const WelcomePage = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoPlaceholderIcon}
        source={require('../assets/logo-placeholder.png')}
      />
      <Pressable
        style={[styles.basicBox, styles.basicLayout]}
        onPress={handleLoginPress}
      >
        <Text style={styles.textHere}>Log in</Text>
      </Pressable>
      
      <Pressable
        style={[styles.basicBox1, styles.basicLayout]}
        onPress={handleCreateAccountPress}
        >
      <Text style={styles.textHere}>Create Account</Text>
      </Pressable>

      <Pressable
        style={[styles.basicBox1, styles.basicLayout]}
        onPress={handleCreateAccountPress}
        >
      <Text style={styles.forgotAccount}>Forgot account</Text>
      </Pressable>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.colorLightcyan,
  },
  logoPlaceholderIcon: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  basicBox: {
    backgroundColor: Color.colorGray_300,
    padding: 10,
    borderRadius: BorderRadius?.br_8xs || 'default_value',
    marginBottom: 10,
  },
  basicBox1: {
    backgroundColor: Color.colorGray_300,
    padding: 10,
    borderRadius: BorderRadius?.br_8xs || 'default_value',
  },
  textHere: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  forgotAccount: {
    marginTop: 15,
  },
});

export default WelcomePage;
