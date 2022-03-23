import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import {
  TitleView,
  TitleDescView,
  FormField,
  CustomCheckBox,
  CustomButton,
  InputField,
  ChecBoxkButton
} from '../src/components/MyComponents';
import { formData } from '../src/components/formdata';
import Strings from '../src/components/Strings';
import axios from 'axios';
import Colors from '../src/styles/Colors';



// create a component
const SignInComp = () => {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    Email: '',
    Password: '',
  });

  const handleOnPress = () => {
    axios.post(`https://jsonplaceholder.typicode.com/users`, formValues)
      .then((res) => { ToastAndroid.show(JSON.stringify(res.data), ToastAndroid.SHORT); })
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>

        <TitleView Style={{ marginTop: 70 }} Text={Strings.SIGN_IN} fntWeight="bold" />
        <TitleDescView
          Style={{ marginTop: 5 }}
          Text={Strings.ENTER_YOUR_REGISTERED_EMAIL_ID_WITH_APP_NAME_TO_LOGIN}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          // backgroundColor: 'blue',

        }}>
        <View
          style={{
            width: '93%',
            // backgroundColor: 'yellow',
            justifyContent: 'space-evenly',

          }}>
          <FormField
            label={Strings.EMAIL}
            formKey="Email"
            handleFormValueChange={handleFormValueChange}
          />
          <TextInput
            style={{
              backgroundColor: '#e3e3e3',
              width: '100%',
              height: 60,
              fontFamily: 'Muli-Bold',
              fontSize: 16,
              borderRadius: 2,
              marginTop: 30,

            }}
            placeholderTextColor= {Colors.TEXT_SECONDARY}
            placeholder="Password"
            onChangeText={text =>
              handleFormValueChange("Password", text)
            }
          />

        </View>
      </View>
      <View style={{
        flex: 2,
        width: '100%',
        alignItems: 'center'

      }} >
        <View style={{
          flexDirection: 'row',
          width: '93%',
          marginTop: 30
        }} >
          <View style={{ width: '100%', position: 'relative', }} >
            <ChecBoxkButton BtnText={Strings.NEXT} btnColor="black" handleOnPress={handleOnPress} marginBottom={200} />
          </View>
          <Text style={{ position: 'absolute', left: 40, top: 7, color: 'black' }}>{Strings.FORGOT_PASSWORD}</Text>
        </View>
      </View>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'violet',
    // alignItems: 'center',
  },
});

//make this component available to the app
export default SignInComp;
