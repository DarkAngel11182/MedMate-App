// MedicationDetails.js

import { View, StyleSheet } from 'react-native';
import InfoBox from './InfoBox';  // Ensure path is correct based on your directory structure

const MedicationDetails = () => (
  <View style={styles.container}>
    <InfoBox title="Medication Name" detail="Coldkiller X" />
    <InfoBox title="Dosage" detail="Two pills every eight hours" />
    <InfoBox title="Next Refill" detail="Due in 7 days" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // This sets the background color for the entire screen
    padding: 10  // Optionally add padding to space out your content
  }
});

export default MedicationDetails;
