import React from "react";
import { StyleSheet, View, Text, Pressable, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <Image
        style={styles.logo}
        source={require("../assets/logo-placeholder.png")}
      />
      <FormField label="E-mail" placeholder="Enter your email" />
      <FormField label="Password" placeholder="Enter your password" secureTextEntry />
      <FormField label="Confirm Password" placeholder="Confirm your password" secureTextEntry />
      <Pressable style={styles.button} onPress={() => console.log("Create Account Pressed")}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
      <Text style={styles.about}>About</Text>
    </View>
  );
};

const TopBar = ({ navigation }) => (
  <View style={styles.topBar}>
    <Pressable onPress={() => navigation.goBack()}>
      <Image style={styles.icon} source={require("../assets/back-icon.png")} />
    </Pressable>
    <Text style={styles.title}>MedMate</Text>
  </View>
);

const FormField = ({ label, placeholder, secureTextEntry = false }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={Color.colorGray_100}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.colorWhite,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSkyblue_200,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 30,
    width: 180,
    height: 180,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_8xs,
    padding: 10,
    fontSize: FontSize.size_base,
  },
  button: {
    backgroundColor: Color.colorSkyblue_300,
    borderRadius: Border.br_8xs,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
  },
  about: {
    marginTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textDecorationLine: 'underline',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default CreateAccount;
