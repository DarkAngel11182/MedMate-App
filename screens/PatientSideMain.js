import { ScrollView, StyleSheet, Pressable, Text } from 'react-native';
import TopBar from './TopBar'
import CalendarWidget from '../components/CalendarWidget';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../GlobalStyles';

const PatientSideMain = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.patientSideMain}>
            <TopBar />
            <CalendarWidget onNavigate={() => navigation.navigate("CalendarScreen")} />
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
        backgroundColor: Color.colorWhite,
    }
});

export default PatientSideMain;
