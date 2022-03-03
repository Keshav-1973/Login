// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IntroSlider = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <View style={styles.container}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
              backgroundColor: 'pink',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name={item.icon} size={50} />
          </View>
          <Text style={{fontFamily: 'Muli-Bold', fontSize: 30, color: 'black'}}>
            SolaX
          </Text>
        </View>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <View style={{width: '80%'}}>
          <Text style={styles.introTextStyle}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          dotStyle={{backgroundColor: 'gray'}}
          activeDotStyle={{backgroundColor: 'black'}}
          showSkipButton={false}
          showNextButton={false}
          showDoneButton={false}
        />
      )}
    </>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: '#8c8c8c',
    textAlign: 'center',
    paddingVertical: 2,
    // backgroundColor: 'pink',
  },
  introTitleStyle: {
    fontSize: 23,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Muli-Bold',
    // backgroundColor: 'violet',
  },
});

const slides = [
  {
    key: 's1',
    text: 'The ultimate solar power monitoring app for your home',
    title: 'Welcome to App Name',
    backgroundColor: '#f4f4f4',
    icon: 'home',
  },

  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    backgroundColor: '#f4f4f4',
    icon: 'close',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    backgroundColor: '#f4f4f4',
    icon: 'plus',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    backgroundColor: '#f4f4f4',
    icon: 'down',
  },
];
