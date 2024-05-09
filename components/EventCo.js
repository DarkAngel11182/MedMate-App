// Named "EventCo" (short for EventComponent or EventContainer) because Event might collide with something in React or JavaScript

import { View, StyleSheet, Text } from 'react-native';
import { Color, FontSize, FontFamily } from '../GlobalStyles';

/*
 * Input:
 * titlInp = {{contnr: 'String 1', subcomp:'String 2', evnt: 'String 3'}}
 * subcompInp = component saved in a variable
 */
const EventCo = () => (
  <View style={styles.container}>
    <View style={{flex: 1}}> {/* Main flexbox */}
      <View style={{flex: 1}}></View> {/* Upper empty space */}
      <View style={{flex: 1, flexDirection: 'row'}}> {/* Titles */}
        <View style={{flex: 1}}>
          <Text style={styles.titles}>{titlInp.contnr}</Text> {/* Container title (from input)*/}
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.titles}>{titlInp.subcomp}</Text> {/* Subcomponent (or timer) title (from input)*/}
        </View>
      </View>
      <View style={{flex: 3, flexDirection: 'row'}}> {/* Content */}
        <View style={{flex: 1}}>
          <Text style={styles.eventTitle}>{titlInp.evnt}</Text>
        </View>
        <View style={{flex: 1}}>
          {subcompInp}
        </View>
      </View>
      <View style={{flex: 1}}></View> {/* Lower empty space */}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: Color.Green
  },
  titles: {
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.ExtraSmall,
    textAlign: 'left',
    paddingLeft: 8
  },
    eventTitle: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.Large,
    textAlign: 'left',
    paddingLeft: 8
  }
});

export default EventCo;
