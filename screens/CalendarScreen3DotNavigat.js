import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

// Event item component
const EventItem = ({ title, time, imageSource, onPress }) => (
  <View style={styles.eventItem}>
    <Text style={styles.eventTitle}>{title}</Text>
    <Pressable onPress={onPress} style={styles.eventTime}>
      <Image style={styles.eventIcon} source={imageSource} />
      <Text style={styles.eventTimeText}>{`@ ${time}`}</Text>
    </Pressable>
  </View>
);

const CalendarScreen3DotNavigat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calendarScreen}>
      <View style={styles.topBar}>
        <Text style={styles.title}>MedMate</Text>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require("../assets/back-icon.png")} />
        </Pressable>
      </View>
      {/* Use EventItem for each event */}
      <EventItem
        title="Coldkiller X"
        time="09:00"
        imageSource={require("../assets/phclocklight.png")}
        onPress={() => navigation.navigate("EventView")}
      />
      {/* More events can be added similarly */}
    </View>
  );
};

// Styles specific to components
const styles = StyleSheet.create({
  calendarScreen: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: Color.colorGray_400,
  },
  title: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSkyblue_200,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  eventItem: {
    backgroundColor: Color.colorLightcoral_100,
    borderRadius: Border.br_8xs,
    padding: Padding.p_5xs,
    marginVertical: 5,
  },
  eventTitle: {
    fontSize: FontSize.size_base,
    color: Color.colorOrangered,
  },
  eventTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  eventTimeText: {
    fontSize: FontSize.size_base,
  },
});

export default CalendarScreen3DotNavigat;
