import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const EventView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.eventView}>
      <TopBar navigation={navigation} />
      <InfoBox label="Coldkiller X" onPress={() => navigation.navigate("MedicineView")} />
      <InfoBox label="Compartment number: 5" />
      <InfoBox label="Time and day: 12/12 08:00" />
      <InfoBox label="Quantity left: 20 pills" />
      <InfoBox label="Send notification for refill" />
    </View>
  );
};

const TopBar = ({ navigation }) => (
  <View style={styles.topBar}>
    <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
      <Image source={require("../assets/back-icon.png")} style={styles.icon} />
    </Pressable>
    <Text style={styles.titleHere}>MedMate</Text>
  </View>
);

const InfoBox = ({ label, onPress }) => (
  <Pressable onPress={onPress} style={styles.infoBox}>
    <Text style={styles.infoText}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  eventView: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: Color.colorGray_400,
  },
  icon: {
    width: 24,
    height: 24,
  },
  titleHere: {
    flex: 1,
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSkyblue_200,
  },
  infoBox: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_100,
    marginHorizontal: 18,
    marginTop: 10,
  },
  infoText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
});

export default EventView;
