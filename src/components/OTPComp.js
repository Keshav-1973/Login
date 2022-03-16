import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';

const CODE_LENGTH = 6;
const OTPComp = (props) => {
  const [code, setCode] = useState('');
  const [containerIsFocused, setContainerIsFocused] = useState(false);
  const codeDigitsArray = new Array(CODE_LENGTH).fill(0);
  console.log(codeDigitsArray)



 const otpFilled = otpValue => {
   console.log(otpValue)
    setCode(otpValue);
    props.childToParent(otpValue);
 }


 

  const ref = useRef(null);

  const handleOnPress = () => {
    setContainerIsFocused(true);
    ref.current.focus();
  };

  const handleOnBlur = () => {
    setContainerIsFocused(false);
  };
  // Keyboard.addListener('keyboardDidShow', Keyboard.dismiss());
  // console.log(Keyboard);

  const toDigitInput = (_value, idx) => {
    const emptyInputChar = ' ';
    const digit = code[idx] || emptyInputChar;

    const isCurrentDigit = idx === code.length;
    const isLastDigit = idx === CODE_LENGTH - 1;
    const isCodeFull = code.length === CODE_LENGTH;

    const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const containerStyle =
      containerIsFocused && isFocused
        ? {...style.inputContainer, ...style.inputContainerFocused}
        : style.inputContainer;

    return (
      <View key={idx} style={containerStyle}>
        <Text style={style.inputText}>{digit}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.container}>
      <Pressable style={style.inputsContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toDigitInput)}
      </Pressable>
      <TextInput
        ref={ref}
        value={code}
        // onChangeText={otpValue => otpFilled(otpValue)}
        onChangeText={otpValue => {
          if (!isNaN(otpValue) && !otpValue.includes('.') && !otpValue.includes(' ') ) {
            otpFilled(otpValue)
          }
        }}
        
        onSubmitEditing={handleOnBlur}
        keyboardType={'numeric'}
        returnKeyType="done"
        textContentType="oneTimeCode"
        maxLength={CODE_LENGTH}
        style={style.hiddenCodeInput}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor: 'red',
  },
  inputsContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //  backgroundColor: 'yellow',
  },
  inputContainer: {
    borderColor: '#cccccc',
    // borderWidth: 2,
    borderRadius: 4,
    padding: 20,
    // backgroundColor: 'yellow',
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  inputContainerFocused: {
    borderColor: 'black',
    borderBottomWidth: 2,
    backgroundColor: '#d9d9d9',
  },
  inputText: {
    fontSize: 24,
    fontFamily: 'Muli',
  },
  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
    // backgroundColor: 'red',
    left: 0,
  },
});

export default OTPComp;
