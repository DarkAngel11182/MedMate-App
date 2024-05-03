import * as React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles';

const Alerts = () => {
  const [taken, setTaken] = React.useState(false);

  const handlePress = () => {
    setTaken(true);
    // Add API call or additional logic here if needed
  };

  return (
    <View style={styles.alerts}>
      <View style={styles.referenceFrame}>
        <View style={styles.screen} />
      </View>
      <Image
        style={styles.vectorArtIcon}
        contentFit="cover"
        source={require("../assets/vector-art.png")}
      />
      <Text style={styles.text}>09:00</Text>
      <Text style={styles.coldkillerX2}>Coldkiller X
        2 pills
        from compartment 4
      </Text>
      <View style={styles.topBar}>
        <Text style={styles.titleHere}>MedMate</Text>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back-icon.png")}
        />
      </View>
      <Pressable style={styles.basicBox} onPress={handlePress}>
        <View style={styles.basicBoxChild} />
        <Text style={styles.textHere}>{taken ? 'Completed' : 'Mark as Taken'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  alerts: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  referenceFrame: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  screen: {
    flex: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: '100%',
  },
  vectorArtIcon: {
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  text: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.colorBlack,
  },
  coldkillerX2: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.aksharRegular,
    color: Color.colorBlack,
    textAlign: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleHere: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
  basicBox: {
    backgroundColor: Color.colorPalevioletred_100,
    borderRadius: Border.br_8xs,
    padding: 10,
    marginTop: 20,
  },
  basicBoxChild: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHere: {
    fontSize: 32,
    fontFamily: FontFamily.interBold,
    color: Color.colorMistyrose,
  },
});

export default Alerts;
