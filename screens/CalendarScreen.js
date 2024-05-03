import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding, Border, FontFamily } from "../GlobalStyles";

// Separate each row or significant styling block into its own component
const DayColumn = ({ day, number }) => (
  <View style={styles.dayColumn}>
    <Text style={styles.dayText}>{`${number}\n${day}`}</Text>
  </View>
);

const EventBlock = ({ title, time, onPress }) => (
  <Pressable onPress={onPress} style={styles.eventBlock}>
    <Text style={styles.eventTitle}>{title}</Text>
    <View style={styles.eventTime}>
      <Image style={styles.clockIcon} source={require("../assets/phclocklight.png")} />
      <Text style={styles.eventTimeText}>{`@ ${time}`}</Text>
    </View>
  </Pressable>
);

const CalendarScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>MedMate</Text>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require("../assets/back-icon.png")} />
        </Pressable>
      </View>
      <View style={styles.weekContainer}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
          <DayColumn key={day} day={day} number={8 + idx} />
        ))}
      </View>
      {/* Example of adding events */}
      <EventBlock title="Coldkiller X" time="09:00" onPress={() => navigation.navigate("EventView")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  dayColumn: {
    alignItems: "center",
  },
  dayText: {
    textAlign: "center",
    color: Color.colorDarkgray,
  },
  eventBlock: {
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
  clockIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  eventTimeText: {
    fontSize: FontSize.size_base,
  },
});

export default CalendarScreen;
