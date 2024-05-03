import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderRadius, Color, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <TopBar navigation={navigation} />
      <Image
        style={styles.logoPlaceholderIcon}
        source={require("../assets/logo-placeholder.png")}
      />
      <InputField label="E-mail" />
      <InputField label="Password" />
      <Pressable onPress={() => navigation.navigate("PatientSideMain")} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN →</Text>
      </Pressable>
      <Text style={styles.forgotPassword}>Forgot Password</Text>
      <Text style={styles.forgotEmail}>Forgot E-mail</Text>
    </View>
  );
};

const TopBar = ({ navigation }) => (
  <View style={styles.topbarscreen}>
    <Pressable onPress={() => navigation.navigate("WelcomePage")}>
      <Image style={styles.icon} source={require("../assets/back-icon.png")} />
    </Pressable>
    <Text style={styles.titleHere}>MedMate</Text>
  </View>
);

const InputField = ({ label }) => (
  <View style={styles.inputField}>
    <Text style={styles.inputLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Color.colorGray_400,
  },
  logoPlaceholderIcon: {
    alignSelf: 'center',
    marginVertical: 20,
    width: 184,
    height: 176,
  },
  inputField: {
    backgroundColor: Color.colorDimgray,
borderRadius: BorderRadius?.br_8xs || 'default_value',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  inputLabel: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  loginButton: {
    backgroundColor: Color.colorSkyblue_200,
    padding: 10,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
  },
  forgotPassword: {
    marginHorizontal: 15,
    marginTop: 10,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  forgotEmail: {
    marginHorizontal: 15,
    marginTop: 5,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  icon: {
    width: 24,
    height: 24,
  },
  titleHere: {
    flex: 1,
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSkyblue_200,
  },
});

export default Login;
