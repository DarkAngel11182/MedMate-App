// InfoBox.js
import { View, Text, StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily } from '../GlobalStyles';

const InfoBox = ({ title, detail, style }) => (
  <View style={[styles.infoBox, style]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.detail}>{detail}</Text>
  </View>
);

const styles = StyleSheet.create({
  infoBox: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_100,
  },
  title: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
  },
  detail: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
  }
});

export default InfoBox;
