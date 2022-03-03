//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {propTypes} from 'react-native-page-control';
import IntroSlider from '../src/components/IntroSlider';
import {CustomButton} from '../src/components/MyComponents';

// create a component
const IntroComp = () => {
  return (
    <View style={{height: '100%', backgroundColor: 'yellow'}}>
      <View style={{height: '67%', backgroundColor: 'pink'}}>
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
            Text="Create an account"
            btnColor="black"
            txtColor="white"
            screenName="SignUpComp"
          />
          <CustomButton
            Text="Already have an account ? Sign in"
            btnColor="white"
            txtColor="black"
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
