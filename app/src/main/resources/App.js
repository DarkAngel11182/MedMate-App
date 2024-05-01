import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "./GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      {/* Simplify your View structures if possible */}
      <Image
        style={styles.logoPlaceholderIcon}
        source={require("../assets/logo-placeholder.png")}
      />
      <Pressable
        style={[styles.basicBox, styles.basicLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textHere}>Log in</Text>
      </Pressable>
      <Pressable
        style={[styles.basicBox1, styles.basicLayout]}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={styles.textHere}>
          Create Account
        </Text>
      </Pressable>
      <Text style={styles.forgotAccount}>
        Forgot account
      </Text>
      {/* Additional elements */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Consolidate your styles here
  welcomePage: {
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
    borderRadius: Border.br_8xs,
  },
  textHere: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  forgotAccount: {
    marginTop: 15,
  }
});

export default WelcomePage;
