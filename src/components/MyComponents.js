import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import * as Strings from '../components/Strings';

/***========================== Title View =========================== */

export const TitleView = props => (
  <View style={props.Style} > 
    <Text
      style={{
        fontSize: 18,
        // fontWeight: props.fntWeight,
        fontFamily: 'Muli-Bold',
        color: 'black',
      }}>
      {props.Text}
    </Text>
  </View>
);

/***========================== Titles Description View =========================== */

export const TitleDescView = props => (
  <View>
    <Text
      style={{
        fontSize: 15,
        fontWeight: props.fntWeight,
        textAlign: 'center',
        fontFamily: 'Muli',
      }}>
      {props.Text}
    </Text>
  </View>
);

/***========================== User data Form =========================== */

export const FormField = props => {
  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.formFieldText}
        onEndEditing={event =>
          props.handleFormValueChange(props.formKey, event.nativeEvent.text)
        }
        {...props.textInputProps}
      />
    </View>
  );
};

/***========================== Custom Button =========================== */

export const CustomButton = props => {
// console.log(props);
  return (
    <TouchableOpacity
      onPress={props.handleOnPress}
      style={{
        alignItems: 'center',
        backgroundColor: props.btnColor,
        padding: 15,
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        borderWidth: 2,
      }}>
      <Text
        style={{color: props.txtColor, fontFamily: 'Muli-Bold', fontSize: 15}}>
        {props.Text}
      </Text>
    </TouchableOpacity>
  );
};

/***==========================  DropDown Picker =========================== */

export const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'User', value: 'User'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <DropDownPicker
      placeholder="User"
      textStyle={{
        fontSize: 16,
      }}
      placeholderStyle={{
        color: '#b5b2b1',
        fontFamily: 'Muli-Bold',
      }}
      dropDownContainerStyle={{
        backgroundColor: '#f4f4f4',
        borderRadius: 0,
        borderColor: '#f4f4f4',
      }}
      dropDownDirection="BOTTOM"
      style={{
        backgroundColor: '#f4f4f4',
        borderRadius: 0,
        borderColor: '#ebe9e6',
      }}
      disabled={true}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

/***==========================  CheckBox =========================== */

export const CustomCheckBox = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <CheckBox
      onFillColor="black"
      tintColors={{true: 'black'}}
      disabled={false}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
    />
  );
};

/***==========================  Button With Modal =========================== */

// export const ModalButton = props => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const navigation = useNavigation();

//   return (
//     <>
//       <TouchableOpacity
//         onPress={() => {
//           setModalVisible(props.handleOnPress);
//         }}
//         style={{
//           alignItems: 'center',
//           backgroundColor: props.btnColor,
//           padding: 15,
//           width: '100%',
//           borderRadius: 5,
//           justifyContent: 'center',
//           borderWidth: 2,
//         }}>
//         <Text
//           style={{
//             color: props.txtColor,
//             fontFamily: 'Muli-Bold',
//             fontSize: 15,
//           }}>
//           {props.Text}
//         </Text>
//       </TouchableOpacity>
//       <Modal animationType="fade" transparent={true} visible={modalVisible}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>{Strings.PASSWORD_SENT}</Text>
//             <View style={{}}>
//               <Text
//                 style={{
//                   fontFamily: 'Muli',
//                 }}>
//                 {Strings.We_Have_Sent_A_6_Digit_Password_On_Your_Email_ID}{' '}
//               </Text>
//               <Text>{Strings.EMAIL}</Text>
//             </View>
//             <Pressable
//               style={styles.button}
//               onPress={() => {
//                 navigation.navigate(props.screenName);
//                 setModalVisible(!modalVisible);
//               }}>
//               <Text style={styles.textStyle}>{Strings.OK}</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

/***==========================  Component Styles =========================== */

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
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'Muli-Bold',
    fontSize: 17,
  },
  formFieldWrapper: {
    backgroundColor: '#e3e3e3',
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
