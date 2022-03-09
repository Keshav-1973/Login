//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Linking, Modal, Pressable} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  CustomButton,
  // UserDataView,
  TitleDescView,
  TitleView,
  DropDownMenu,
  CustomCheckBox,
  CustomModal,
  ModalButton,
  FormField,
} from '../src/components/MyComponents';
import {formData} from '../src/components/formdata';
import * as Strings from '../src/components/Strings';

// create a component
const SignUpComp = () => {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    FirstName: '',
    LastName: '',
    Email: '',
    MobileNumber: '',
  });
  console.log(formValues);

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
          <TitleView Text={Strings.BECOME_A_SOLAX_MEMBER} fntWeight="bold" />
        </View>
        <View
          style={{
            // backgroundColor: 'blue',
            height: '50%',

            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TitleDescView
            Text={
              Strings.Create_Your_SolaX_Account_And_Get_Access_To_Dashboard_Analytics_And_More
            }
          />
        </View>
      </View>
      <View
        style={{
          height: '50%',
          width: '93%',
          alignItems: 'center',
          // backgroundColor: 'yellow',
          justifyContent: 'space-evenly',
        }}>
        <FormField
          label={Strings.FIRST_NAME}
          formKey="FirstName"
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label={Strings.LAST_NAME}
          formKey="LastName"
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label={Strings.EMAIL}
          formKey="Email"
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label={Strings.MOBILE_NUMBER}
          formKey="MobileNumber"
          handleFormValueChange={handleFormValueChange}
        />
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
          <CustomCheckBox />
          <View style={{marginLeft: 12}}>
            <Text style={{flexShrink: 1, fontFamily: 'Muli'}}>
              {Strings.By_Creating_An_Account_You_Agree_To_Our}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  flexShrink: 1,
                  fontFamily: 'Muli',
                  textDecorationLine: 'underline',
                }}
                onPress={() => Linking.openURL('http://google.com')}>
                {Strings.TERMS_OF_SERVIVE}
              </Text>
              <Text> {Strings.AND} </Text>
              <Text
                style={{
                  flexShrink: 1,
                  fontFamily: 'Muli',
                  textDecorationLine: 'underline',
                }}
                onPress={() => Linking.openURL('http://google.com')}>
                {Strings.PRIVACY_POLICY}
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: '100%', marginTop: '5%'}}>
          <ModalButton
            Text={Strings.NEXT}
            btnColor="black"
            txtColor="white"
            screenName="Verification"
            handleOnPress={true}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpComp;
