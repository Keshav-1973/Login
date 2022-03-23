//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ToastAndroid, Pressable } from 'react-native';
import {
  CustomButton,
  TitleDescView,
  TitleView,
} from '../src/components/MyComponents';
import OTPComp from '../src/components/OTPComp';
import axios from 'axios';
import Strings from '../src/components/Strings';
import Colors from '../src/styles/Colors';
import Styles from "../src/styles/Styles"

// create a component
const Verification = () => {

  const [data, setData] = useState({ OTP: "" });
  console.log('parent data', data)

  const childToParent = (childData) => {

    setData(prevState => ({
      ...prevState,
      OTP: childData
    }));

  }



  const handleOnPress = () => {

    axios.post(`https://jsonplaceholder.typicode.com/users`, data)
      .then((res) => { ToastAndroid.show(JSON.stringify(res.data), ToastAndroid.SHORT); console.log("res", res); console.log('res data', res.data) })
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'green',
           alignItems: 'center',
          justifyContent:"flex-end"
        }}>
       
          <TitleView  Style={{marginBottom:10}} Text={Strings.VERIFY_YOUR_EMAIL} />
        
          <TitleDescView
            Text={
              Strings.FOR_SECURITY_REASONS_WE_HAVE_SENT_YOU_A_6_DIGIT_PASSWORD_ON_YOUR_EMAIL_ADDRESS
            }
          />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flex: 3,
          //  backgroundColor: 'pink'
        }}>
        <View
          style={{
            width:'90%',
          }}>
          <View
            style={{
                // backgroundColor: 'yellow'
            }}>
            <View style={{
              flexDirection: 'row',
              justifyContent:'space-between',
              //  backgroundColor:'red', 
              marginBottom:50,
              marginTop:20

            }}>
              <Text style={{ color: Colors.TEXT_PRIMARY }}>harison.kaleb@gmail.com</Text>
              <Pressable onPress={() => { console.log("CHANGE") }} ><Text style={[{color: 'red', fontFamily: 'Muli-Bold'}, Styles.xxlargeBold]} >{Strings.CHANGE} </Text></Pressable>
            </View>


            <Text
              style={[{
                fontFamily: 'Muli-Bold',
                fontSize: 15,
                color: Colors.TEXT_SECONDARY
              }, Styles.xlarge]}>
              {Strings.ENTER_CODE}
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: '100%',
              alignItems: 'flex-start',
            }}>
            <OTPComp childToParent={childToParent} />
          </View>
          <View
            style={{
              height: '20%',
              //  backgroundColor: 'yellow',
              marginTop: 40,
            }}>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', }}>
              <Text style={{ fontFamily: 'Muli-Bold', color: 'black', alignSelf: 'flex-start' }}>
                {
                  Strings.DIDNT_RECIEVE_THE_EMAIL
                }
              </Text>
              <Pressable onPress={() => { console.log('RESEND') }}  >
                <Text style={[{ color: 'red', fontFamily: 'Muli-Bold',  }, Styles.xxlargeBold]}> {Strings.RESEND} </Text>
              </Pressable>
            </View>
            <Text style={{ fontFamily: 'Muli' }}>
              {
                Strings.PLEASE_CHECK_YOUR_SPAM_FOLDER_IF_NOT_RECEIVED_THEN_TAP_RESEND
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
              handleOnPress={handleOnPress}
            />
          </View>
        </View>
      </View>
     
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Verification;
