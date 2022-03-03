//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomTab from '../src/components/BottomTab';
import {CustomButton} from '../src/components/MyComponents';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HFList from '../src/components/FlatListHorizontal';

// create a component
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          // backgroundColor: 'white',
          height: '10%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Ionicons name={'menu'} size={40} />
        <Ionicons name={'search'} size={40} />
      </View>
      <View
        style={{
          backgroundColor: '#46b3f6',
          height: '20%',
          width: '80%',
          borderRadius: 15,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontFamily: 'Muli-Bold', fontSize: 20}}>
          Lets Discover Around
        </Text>
        <Text style={{color: 'white', fontFamily: 'Muli', fontSize: 14}}>
          Find the best place to visit
        </Text>
        <View style={{width: '60%'}}>
          <CustomButton Text="Start Now" txtColor="#3278aa" btnColor="white" />
        </View>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          height: '27%',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            // backgroundColor: 'green',
            marginLeft: 21,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Muli-Bold',
              color: 'black',
            }}>
            Category
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <CategoryBtn icon="home" text="All" color="#4b89ff" />
          <CategoryBtn icon="search" text="All" color="#4dbd99" />
          <CategoryBtn icon="user" text="All" color="#fa8454" />
          <CategoryBtn icon="receipt" text="All" color="#27bfc1" />
        </View>
      </View>

      <View
        style={{
          // backgroundColor: 'yellow',
          height: '33%',
          width: '100%',
        }}>
        <HFList />
      </View>
      <View
        style={{
          width: '100%',
          height: '10%',
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <BottomTab />
      </View>
    </View>
  );
};
const CategoryBtn = props => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderRadius: 40,
        height: 100,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#cccccc',
      }}>
      <View
        style={{
          backgroundColor: props.color,
          width: 50,
          height: 50,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome5 name={props.icon} size={25} color={'white'} />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          color: 'black',
          fontFamily: 'Muli-Bold',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default HomeScreen;
