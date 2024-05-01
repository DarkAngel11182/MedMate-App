import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Color, FontSize } from '../GlobalStyles';

const CalendarWidget = ({ onNavigate }) => (
    <Pressable onPress={onNavigate} style={styles.container}>
        <Text style={styles.text}>Open Calendar</Text>
        {/* More detailed calendar view can be added here */}
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Color.colorLightcoral_100,
        borderRadius: 10,
        marginVertical: 10,
    },
    text: {
        fontSize: FontSize.size_base,
        color: Color.colorWhite,
        textAlign: 'center',
    }
});

export default CalendarWidget;
