//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import {
  CustomButton,
  UserDataView,
  TitleDescView,
  TitleView,
  DropDownMenu,
} from '../src/components/MyComponents';

// create a component
const SignUpComp = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{height: '2%'}}></View>
      <View
        style={{
          height: '15%',
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '50%',
            width: '80%',
            alignItems: 'center',

            justifyContent: 'flex-end',
          }}>
          <TitleView Text="Become a SolaX member" fntWeight="bold" />
        </View>
        <View
          style={{
            // backgroundColor: 'blue',
            height: '50%',

            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TitleDescView Text="Create your SalaX account and get access to dashboard, analytics and lot more" />
        </View>
      </View>
      <View
        style={{
          height: '50%',
          width: '100%',
          alignItems: 'center',
          // backgroundColor: 'yellow',
          justifyContent: 'space-evenly',
        }}>
        <UserDataView Text="First Name*" />
        <UserDataView Text="Last Name*" />
        <UserDataView Text="Email*" />
        <UserDataView Text="Mobile Number" />
      </View>
      <View
        style={{
          height: '33%',
          width: '93%',
          // backgroundColor: 'red',
        }}>
        <DropDownMenu />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            // backgroundColor: 'yellow',
            marginTop: '5%',
            alignItems: 'center',
          }}>
          <CheckBox
            onFillColor="black"
            tintColors={{true: 'black'}}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <View style={{marginLeft: 12}}>
            <Text style={{flexShrink: 1, fontFamily: 'Muli'}}>
              By Creating an account you agree to our
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  flexShrink: 1,
                  fontFamily: 'Muli',
                  textDecorationLine: 'underline',
                }}
                onPress={() => Linking.openURL('http://google.com')}>
                Terms of Service
              </Text>
              <Text> and </Text>
              <Text
                style={{
                  flexShrink: 1,
                  fontFamily: 'Muli',
                  textDecorationLine: 'underline',
                }}
                onPress={() => Linking.openURL('http://google.com')}>
                Privacy Policy
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: '100%', marginTop: '5%'}}>
          <CustomButton
            Text="Next"
            btnColor="black"
            txtColor="white"
            screenName="Verification"
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpComp;
