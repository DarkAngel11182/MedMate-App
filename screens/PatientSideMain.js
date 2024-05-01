import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TopBar from './components/TopBar';  // Assuming the file is located in the components folder
import CalendarWidget from './components/CalendarWidget';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../GlobalStyles';

const PatientSideMain = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.patientSideMain}>
            <TopBar />
            <CalendarWidget onNavigate={() => navigation.navigate("CalendarScreen")} />
            {/* Additional components like UpcomingEventsList can be added here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    patientSideMain: {
        flex: 1,
        backgroundColor: Color.colorWhite,
    }
});

export default PatientSideMain;
