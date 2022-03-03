//import liraries
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';

// create a component
const CODE_LENGTH = 6;

const OtpComp = () => {
  const [code, setCode] = useState('');
  const [containerIsFocused, setContainerIsFocused] = useState(false);

  const codeDigitsArray = new Array(CODE_LENGTH).fill(0);

  const ref = useRef(null);

  const handleOnPress = () => {
    setContainerIsFocused(true);
    ref?.current?.focus();
  };

  const handleOnBlur = () => {
    setContainerIsFocused(false);
  };

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
  const [state, setState] = useState();
  handleInputChange = text => {
    if (/^\d+$/.test(text)) {
      setState({
        text: text,
      });
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <Pressable style={style.inputsContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toDigitInput)}
      </Pressable>
      <TextInput
        caretHidden={true}
        contextMenuHidden={true}
        ref={ref}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={handleOnBlur}
        keyboardType={'numeric'}
        returnKeyType="done"
        textContentType="oneTimeCode"
        maxLength={CODE_LENGTH}
        style={style.hiddenCodeInput}
        onChangeText={handleInputChange()}
      />
    </SafeAreaView>
  );
};
// define your styles
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  hiddenCodeInput: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0,
    backgroundColor: 'red',
    left: 0,
  },
  inputsContainer: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',

    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  inputContainer: {
    borderColor: '#cccccc',
    // borderWidth: 1,
    borderRadius: 4,
    // padding: 12,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#f4f4f4',

    // marginRight: 10,
    // marginLeft: 10,
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'Muli-Bold',
    // backgroundColor: 'yellow',
  },
  // inputContainerFocused: {
  //   borderColor: '#0f5181',
  // },
});
//make this component available to the app
export default OtpComp;
