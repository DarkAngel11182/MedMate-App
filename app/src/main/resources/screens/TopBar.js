import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

const TopBar = () => (
    <View style={styles.container}>
        <Image
            style={styles.backIcon}
            source={require("../assets/back-icon.png")}
        />
        <Text style={styles.title}>MedMate</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: Color.colorGray_400,
    },
    backIcon: {
        marginRight: 20,
        width: 24,
        height: 24,
    },
    title: {
        fontSize: FontSize.size_mini,
        fontFamily: FontFamily.interExtraBold,
        color: Color.colorSkyblue_200,
    }
});

export default TopBar;
