import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MedicineView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.medicineView}>
      <TopBar navigation={navigation} />
      <InfoBox title="Coldkiller X" detail="Send notification for refill" style={styles.box} />
      <InfoBox title="Schedule data" detail="Enter schedule" style={styles.box} />
      <InfoBox title="Quantity left" detail="20 pills" style={styles.box} />
      <InfoBox title="Possible warnings" detail="May cause drowsiness" style={styles.box} />
      <InfoBox title="Compartment number" detail="Compartment 3A" style={styles.box} />
      <InfoBox title="Amount to be taken" detail="2 pills per intake" style={styles.box} />
    </View>
  );
};

const TopBar = ({ navigation }) => (
  <View style={styles.topBar}>
    <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
      <Image style={styles.iconImage} source={require("../assets/back-icon.png")} />
    </Pressable>
    <Text style={styles.titleHere}>MedMate</Text>
    <Image style={styles.topBarItem} source={require("../assets/rectangle-7.png")} />
  </View>
);

const InfoBox = ({ title, detail, style }) => (
  <View style={[styles.infoBox, style]}>
    <Text style={styles.boxTitle}>{title}</Text>
    <Text style={styles.boxDetail}>{detail}</Text>
  </View>
);

const styles = StyleSheet.create({
  medicineView: {
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
  icon: {
    width: 24,
    height: 24,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
  titleHere: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSkyblue_200,
  },
  topBarItem: {
    width: 22,
    height: 12,
  },
  infoBox: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_100,
  },
  boxTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
  },
  boxDetail: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
  },
  box: {
    marginTop: 10,
  },
});

export default MedicineView;
