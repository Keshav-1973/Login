//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// create a component
export const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

export const Icon = props => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          color={'black'}
          style={{marginBottom: 3, alignSelf: 'center'}}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: '#e6e3e3',
    borderRadius: 18,
  },
});

//make this component available to the app
export default BottomTab;
