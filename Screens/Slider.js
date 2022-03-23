//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IntroSlider from '../src/components/IntroSlider';
import { CustomButton } from '../src/components/MyComponents';
import { useNavigation } from '@react-navigation/native';
import Strings from "../src/components/Strings"
// create a component


const IntroComp = () => {

  const navigation = useNavigation();

  const Destination = (Destination) => {
    navigation.navigate(Destination)

  }
  return (
    <View style={{ height: '100%', backgroundColor: 'yellow' }}>
      <View style={{ height: '67%', backgroundColor: 'pink' }}>
        <IntroSlider />
      </View>
      <View style={styles.BtnView}>
        <View
          style={{
            width: '93%',
            height: '65%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            // backgroundColor: 'violet',
          }}>
          <CustomButton
            Text={Strings.CREATE_AN_ACCOUNT}
            btnColor="black"
            txtColor="white"
            handleOnPress={() => { Destination('SignUpComp') }}

          />
          <CustomButton
            Text={Strings.ALREADY_HAVE_AN_ACCOUNT_SIGN_IN}
            btnColor="white"
            txtColor="black"
            handleOnPress={() => { Destination('SignInComp') }}
          />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  BtnView: {
    width: '100%',
    height: '33%',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

//make this component available to the app
export default IntroComp;
