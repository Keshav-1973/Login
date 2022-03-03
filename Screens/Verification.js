//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OtpComp from '../src/components/OtpView';
import {
  CustomButton,
  TitleDescView,
  TitleView,
} from '../src/components/MyComponents';

// create a component
const Verification = () => {
  return (
    <View style={styles.container}>
      <View style={{height: '5%'}}></View>
      <View
        style={{
          // flex: 1,
          height: '15%',
          width: '100%',
          // backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            //width: '50%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            // marginVertical: '6%',
          }}>
          <TitleView Text="Verify your email" />
        </View>
        <View
          style={{
            flex: 1,
            //  backgroundColor: 'yellow',
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            // flexShrink: 1,
          }}>
          <TitleDescView Text="For security reasons, we have sent you a 6 digit passsword on your email address" />
        </View>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          width: '100%',
          // height: '40%',
          //   justifyContent: 'center',
          //alignItems: 'flex-start',
          //   flexDirection: 'column',
          alignItems: 'center',
          flex: 2,
          marginTop: '20%',
        }}>
        <View
          style={{
            //  backgroundColor: 'violet',
            width: '90%',
            height: '100%',
            // marginLeft: 10,
          }}>
          <View
            style={{
              // height: '20%',
              // backgroundColor: 'yellow',
              //  alignItems: 'baseline',
              //flexDirection: 'row',
              justifyContent: 'flex-end',
              // paddingTop: '7%',
              // flexShrink: 1,
            }}>
            <Text
              style={{
                fontFamily: 'Muli-Bold',

                fontSize: 15,
              }}>
              Enter Code
            </Text>
          </View>
          <View
            style={{
              //    backgroundColor: 'green',
              height: '25%',
              alignItems: 'flex-start',
            }}>
            <OtpComp />
          </View>
          <View
            style={{
              height: '20%',
              //  backgroundColor: 'yellow',
              marginTop: 20,
            }}>
            <Text style={{fontFamily: 'Muli'}}>
              Didn't recieve the email? Dont forget to check your spam folder
            </Text>
          </View>
          <View
            style={{
              // width: '100%',
              // height: '80%',
              //   backgroundColor: 'pink',
              // alignSelf: 'center',
              marginTop: 45,
            }}>
            <CustomButton Text="Continue" btnColor="black" txtColor="white" />
          </View>
        </View>
      </View>
      <View
        style={{
          // height: '20%',
          width: '93%',
          // backgroundColor: 'yellow',
          alignItems: 'center',
          flex: 1,
        }}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Verification;
