import { View, StyleSheet, Text } from 'react-native';
import { Color, FontSize } from '../GlobalStyles';

// Named "EventCo" (short for EventComponent or EventContainer) because Event might collide with something in React or JavaScript
const EventCo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Event component under development, don't be afraid of this</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 67,
    backgroundColor: Color.Green
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.White,
    textAlign: 'center',
  }
});

export default EventCo;
