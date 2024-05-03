import { StyleSheet, View, Text, ScrollView } from 'react-native';
import EventTimer from './EventTimer';  // Assume this is a new component
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily } from '../GlobalStyles';

const UpcomingEventsList = () => {
  const navigation = useNavigation();

  const events = [
    { id: 1, title: "Qleed pills", time: "100+ hours" },
    { id: 2, title: "Zazamax", time: "100+ hours" },
    // Add more events as needed
  ];

  return (
    <ScrollView style={styles.container}>
      {events.map(event => (
        <EventTimer
          key={event.id}
          title={event.title}
          time={event.time}
          onPress={() => navigation.navigate("EventView", { eventId: event.id })}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Color.colorWhite,
  }
});

export default UpcomingEventsList;
