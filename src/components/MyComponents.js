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

/***========================== Title View =========================== */
export const TitleView = props => (
  <View>
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

export const UserDataView = props => (
  <View
    style={{
      backgroundColor: '#f4f4f4',
      width: '93%',
      height: '16%',
      borderBottomWidth: 1,
      // marginTop: '8%',
    }}>
    <Text
      style={{
        top: 7,
        left: 22,
        // position: 'absolute',
        // alignSelf: 'center',
        flex: 1,
        fontFamily: 'Muli-Bold',
        fontSize: 14,
        color: '#949494',
      }}>
      {props.Text}
    </Text>
    <TextInput
      style={{
        // backgroundColor: 'green',
        // height: '100%',
        width: '90%',
        // left: 10,
        alignSelf: 'center',
        flex: 1,
        fontFamily: 'Muli',
        fontSize: 16,
        color: '#6e6e6e',
      }}
    />
  </View>
);

/***========================== Custom Button =========================== */

export const CustomButton = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.screenName)}
      style={{
        alignItems: 'center',
        backgroundColor: props.btnColor,
        padding: 15,
        width: '100%',
        borderRadius: 5,
        //   margin: 10,
        //   marginTop: '5%',
        //   height: '30%',
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
