import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  TitleView,
  TitleDescView,
  FormField,
  CustomCheckBox,
  CustomButton,
  InputField,
} from '../src/components/MyComponents';
import {formData} from '../src/components/formdata';
import * as Strings from '../src/components/Strings';
// create a component
const SignInComp = () => {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    Email: '',
    Password: '',
  });
  console.log(formValues);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: '25%',
          width: '80%',
          alignItems: 'center',
          //   backgroundColor: 'red',
        }}>
        <View
          style={{
            height: '50%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            // backgroundColor: 'pink',
          }}>
          <TitleView Text={Strings.SIGN_IN} fntWeight="bold" />
        </View>
        <View
          style={{
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TitleDescView
            Text={Strings.ENTER_YOUR_REGISTERED_EMAIL_ID_WITH_APP_NAME_TO_LOGIN}
          />
        </View>
      </View>

      <View
        style={{
          height: '55%',
          width: '100%',
          alignItems: 'center',
          //   backgroundColor: 'blue',
        }}>
        <View
          style={{
            height: '70%',
            width: '93%',
            // backgroundColor: 'yellow',
            justifyContent: 'space-evenly',
          }}>
          <FormField
            label={Strings.EMAIL}
            formKey="Email"
            handleFormValueChange={handleFormValueChange}
          />
          <FormField
            formKey="Password"
            placeholder="Password"
            handleFormValueChange={handleFormValueChange}
          />

          {/* <TextInput
            style={{
              backgroundColor: '#e3e3e3',
              width: '100%',
              height: 60,
              fontFamily: 'Muli-Bold',
              fontSize: 16,
              borderRadius: 2,
            }}
            placeholder="Password"
          /> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              //   backgroundColor: 'pink',
              alignSelf: 'center',
              alignSelf: 'flex-start',
            }}>
            <CustomCheckBox />
            <Text style={{fontFamily: 'Muli', color: '#979797'}}>
              {Strings.FORGOT_PASSWORD}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '93%',
          marginTop: 30,
        }}>
        <CustomButton Text="Next" btnColor="black" txtColor="white" />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'violet',
    alignItems: 'center',
  },
});

//make this component available to the app
export default SignInComp;
