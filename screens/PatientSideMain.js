// React libraries
import { ScrollView, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Styling
import { Color } from '../GlobalStyles';
// Own components
import TopBar from './TopBar' // TODO: move this in components library (issue #2)
import CalendarWidget from '../components/CalendarWidget';
import EventCo from '../components/EventCo'

const PatientSideMain = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.patientSideMain}>
            <TopBar />
            <CalendarWidget onNavigate={() => navigation.navigate("CalendarScreen")} />
	    <EventCo />
            <Pressable
              onPress={() => navigation.navigate("UpcomingEventsList")}
            >
              <Text>See all upcoming</Text>
	    </Pressable>
            {/* Additional components like UpcomingEventsList can be added here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    patientSideMain: {
        flex: 1,
        backgroundColor: Color.colorWhite, // colorWhite is not defined anywhere, this is a bug, see issue #10
    }
});

export default PatientSideMain;
