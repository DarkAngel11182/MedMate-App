import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Color, FontSize } from '../GlobalStyles';

const CalendarWidget = ({ onNavigate }) => (
  <View style={styles.dimensions}>
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.text}>X event(s) today</Text>
          </View>
        </View>
        <View style={{flex:1, backgroundColor: Color.MistyRose}}>
          <Pressable onPress={onNavigate} style={styles.container}>
            <Text style={styles.text}>Open Calendar</Text>
          </Pressable>
        </View>
      </View>
    </View>
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Weekly calendar here</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  dimensions: {
    margin: 14,
    height: 144,
    backgroundColor: Color.Pink
  },
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: 'center',
  },
});

export default CalendarWidget;
