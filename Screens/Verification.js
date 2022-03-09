//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  CustomButton,
  TitleDescView,
  TitleView,
} from '../src/components/MyComponents';
import * as Strings from '../src/components/Strings';
import OTPComp from '../src/components/OTPComp';

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
          <TitleView Text={Strings.VERIFY_YOUR_EMAIL} />
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
          <TitleDescView
            Text={
              Strings.FOR_SECURITY_REASONS_WE_HAVE_SENT_YOU_A_6_DIGIT_PASSWORD_ON_YOUR_EMAIL_ADDRESS
            }
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',

          alignItems: 'center',
          flex: 2,
          marginTop: '20%',
        }}>
        <View
          style={{
            //  backgroundColor: 'violet',
            width: '90%',
            height: '100%',
          }}>
          <View
            style={{
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: 'Muli-Bold',

                fontSize: 15,
              }}>
              {Strings.ENTER_CODE}
            </Text>
          </View>
          <View
            style={{
              //    backgroundColor: 'green',
              height: '25%',
              alignItems: 'flex-start',
            }}>
            {/* <OtpComp /> */}
            <OTPComp />
          </View>
          <View
            style={{
              height: '20%',
              //  backgroundColor: 'yellow',
              marginTop: 20,
            }}>
            <Text style={{fontFamily: 'Muli'}}>
              {
                Strings.DIDNT_RECIEVE_THE_EMAIL_DONT_FORGET_TO_CHECK_YOUR_SPAM_FOLDER
              }
            </Text>
          </View>
          <View
            style={{
              marginTop: 45,
            }}>
            <CustomButton
              Text={Strings.CONTINUE}
              btnColor="black"
              txtColor="white"
            />
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
