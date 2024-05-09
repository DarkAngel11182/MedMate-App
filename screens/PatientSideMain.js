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
	    <EventCo
              titlInp={{contnr: 'Take', subcomp:'In', evnt: 'Coldkiller X'}}
              subcompInp={exampleSubcomponent} // Used for inputting subcomponents (timer, status, etc...) later
	    />
            <Pressable
              onPress={() => navigation.navigate("UpcomingEventsList")}
            >
              <Text>See all upcoming</Text>
	    </Pressable>
            {/* Additional components like UpcomingEventsList can be added here */}
        </ScrollView>
    );
};

const exampleSubcomponent = <View style={{flex: 1, backgroundColor: "#00967E", marginLeft: 8, marginRight: 8}}></View>; // For testing subcomponent input

const styles = StyleSheet.create({
    patientSideMain: {
        flex: 1,
        backgroundColor: Color.colorWhite, // colorWhite is not defined anywhere, this is a bug, see issue #10
    }
});

export default PatientSideMain;
