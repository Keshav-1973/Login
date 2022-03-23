//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Linking, Modal, Pressable, TouchableOpacity, ToastAndroid } from 'react-native';
import {
  CustomButton,
  TitleDescView,
  TitleView,
  DropDownMenu,
  CustomCheckBox,
  FormField,
  ChecBoxkButton
} from '../src/components/MyComponents';
import { formData } from '../src/components/formdata';
import Strings from '../src/components/Strings';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Styles from "../src/styles/Styles";
import Colors from "../src/styles/Colors"


// create a component
const SignUpComp = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const [formValues, handleFormValueChange, setFormValues] = formData({
    FirstName: '',
    LastName: '',
    Email: '',
    MobileNumber: '',
  });
  console.log(formValues);

  const handleOnPress = () => {
    // console.log('inside handle on press')
    setModalVisible(true);

    axios.post(`https://jsonplaceholder.typicode.com/users`, formValues)
      .then((res) => { ToastAndroid.show(JSON.stringify(res.data), ToastAndroid.SHORT); console.log("res", res); console.log('res data', res.data) })
  }

  const renderModal = () => {
    return (
      <View style={{ flex: 1 }}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{Strings.PASSWORD_SENT}</Text>
              <View style={{}}>
                <Text
                  style={[{ color: Colors.TEXT_SECONDARY }, Styles.xlarge]} >
                  {Strings.We_Have_Sent_A_6_Digit_Password_On_Your_Email_ID}
                </Text>
                <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.xlarge]} >{Strings.EMAIL}</Text>
              </View>
              <Pressable
                style={styles.button}
                onPress={() => {
                  navigation.navigate('Verification');
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>{Strings.OK}</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        // alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          // backgroundColor: 'green',
        }}>

        <TitleView Style={{ marginTop: 40 }} Text={Strings.BECOME_A_SOLAX_MEMBER} fntWeight="bold" />
        <TitleDescView
          Style={{ marginTop: 5 }}
          Text={
            Strings.Create_Your_SolaX_Account_And_Get_Access_To_Dashboard_Analytics_And_More
          }
        />
      </View>
      <View
        style={{
          flex: 3,
          width: '93%',
          alignItems: 'center',
          //  backgroundColor: 'yellow',
          justifyContent: 'space-evenly',
          alignSelf: 'center'
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
          flex: 2,
          width: '93%',
          //  backgroundColor: 'red',
          alignSelf: 'center'
        }}>
        <DropDownMenu />

        <View style={{ flexDirection: 'row', marginTop: 20 }} >
          <View style={{ position: 'relative', width: '100%' }} >
            <ChecBoxkButton BtnText={Strings.NEXT} btnColor="black" handleOnPress={handleOnPress} marginBottom={40} />
            {renderModal()}
            <Text style={[{ position: 'absolute', left: 40, top: 0, flexShrink: 1, marginRight: 80, color: Colors.TEXT_SECONDARY }, Styles.xlarge]}>{Strings.By_Creating_An_Account_You_Agree_To_Our}{" "}
              <Text style={[{
                textDecorationLine: "underline",
                marginHorizontal: 5,
                color: Colors.TEXT_PRIMARY
              }, Styles.xlargeBold]}>
                {Strings.TERMS_OF_SERVIVE}
              </Text>{" "}
              {Strings.AND}{" "}
              <Text style={[{
                textDecorationLine: "underline",
                marginHorizontal: 5,
                color: Colors.TEXT_PRIMARY
              }, Styles.xlargeBold]} >
                {Strings.PRIVACY_POLICY}
              </Text>
            </Text>
          </View>
        </View>


        {/* <View
          style={{
            flexDirection: 'row',
            width: '100%',
             backgroundColor: 'yellow',
            marginTop: '5%',
            alignItems: 'center',
          }}>
          <CustomCheckBox />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ flexShrink: 1, fontFamily: 'Muli' }}>
              {Strings.By_Creating_An_Account_You_Agree_To_Our}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
        </View> */}
        {/* <View style={{ width: '100%', marginTop: '5%', }}>
          <CustomButton Text={Strings.NEXT} btnColor="black" txtColor="white" handleOnPress={handleOnPress} />
          {renderModal()}
        </View> */}
      </View>
    </View>
  );
};

export default SignUpComp;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    marginHorizontal: 40,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    borderRadius: 2,
  },
  button: {
    padding: 10,
    alignSelf: 'flex-end',
    marginTop: 55,
  },

  textStyle: {
    fontFamily: 'Muli-Bold',
    color: Colors.TEXT_PRIMARY
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'Muli-Bold',
    fontSize: 17,
    color: Colors.TEXT_PRIMARY
  },
  formFieldWrapper: {
    backgroundColor: '#d6d6d6',
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderRadius: 2,
  },
  formFieldText: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
    fontFamily: 'Muli',
    fontSize: 16,
    color: '#6e6e6e',
  },
  labelText: {
    top: 7,
    left: 22,
    flex: 1,
    fontFamily: 'Muli-Bold',
    fontSize: 14,
    color: '#949494',
  },
});
