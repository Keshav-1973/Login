//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Style } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../src/styles/Styles';
import Strings from '../src/components/Strings';
import Colors from "../src/styles/Colors";

const HomeComp = () => {

  return (
    <View style={styles.container}>

      <View style={{ flex: 1, marginVertical: 7, marginHorizontal: 12 }} >
        <View style={{
          flex: 1,
          position: 'relative',
          backgroundColor: '#dc252d',
        }} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginTop: 30 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[{ color: '#fff' }, Styles.xxxxlargeSemiBold]} >{Strings.Motherson}</Text>
              <MaterialCommunityIcons name={'network-strength-4'} size={35} color={'white'} style={{ marginLeft: 8 }} />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Ionicons name={'notifications'} size={30} color={'white'} />
              <FontAwesome name={'user-circle'} size={30} color={'white'} style={{ marginLeft: 15 }} />

            </View>
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 35 }} >
            <Text style={[{ color: '#fff' }, Styles.xxlargeBold]} >{Strings.Good_Evening_Harison}</Text>
            <View style={{ width: 30, backgroundColor: 'white', height: 2, marginTop: 5 }}></View>
          </View>

        </View>

        <View style={{
          backgroundColor: "#f9f8f7", flex: 2,
          position: 'relative',
        }} ></View>

        <View style={{
          position: 'absolute',
          top: 150,
          width: '90%',
          //  backgroundColor: 'red',
          alignSelf: 'center',
          justifyContent: 'space-between'
        }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', height: 190, borderRadius: 5 }}>
            <View style={{ marginVertical: 20 }} >
              <View style={{
                width: 110,
                height: 110,
                borderRadius: 110 / 2,
                borderColor: '#f8e2d1',
                borderWidth: 8,
                justifyContent: 'center',
                alignItems: 'center'
              }} >
                <Text style={[{ color: 'black' }, Styles.xxxxlargeBold]} > 0.00
                </Text>
                <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.large]} >kWh</Text>
              </View>
              <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.xlarge]}>{Strings.Real_Time_Power}</Text>
            </View>

            <View style={{ height: 120, marginVertical: 20 }}>
              <View style={{ marginBottom: 30 }} >
                <Text style={[{ color: 'black' }, Styles.xxlargeBold]} >00
                </Text>
                <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.xlarge]}>{Strings.Sites}</Text>
              </View>
              <View>
                <Text style={[{ color: 'black' }, Styles.xxlargeBold]} >00
                </Text>
                <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.xlarge]} >{Strings.Inverter}</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 170, justifyContent: 'space-between', }}>
            <Text style={[{ marginTop: 7, color: Colors.TEXT_SECONDARY }, Styles.large]} > {Strings.Yields_Stats}</Text>
            <View style={{ height: 135, width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 5, flexDirection: 'row' }}>

              <View style={{ width: '15%', alignItems: "center" }}>

                <MaterialCommunityIcons name={'lightning-bolt'} size={35} color={'green'} style={{ marginTop: 10 }} />
              </View>

              <View style={{ width: '85%', height: "78%", alignSelf: 'center', justifyContent: "space-between" }}>

                <View style={{}}>
                  <Text style={[{ color: 'black' }, Styles.xxlargeBold]}>
                    00
                  </Text>
                  <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.xlarge]} >{Strings.Daily_Yield}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                  <View style={{}}>
                    <Text style={[{ color: 'black' }, Styles.xxlargeBold]}>
                      00
                    </Text>
                    <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.xlarge]} >{Strings.Monthly}</Text>
                  </View>
                  <View style={{}}>
                    <Text style={[{ color: 'black' }, Styles.xxlargeBold]}>
                      00
                    </Text>
                    <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.xlarge]} >{Strings.Total}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ height: 170, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 7, }}>
              <Text style={[{ color: Colors.TEXT_SECONDARY }, Styles.large]} >{Strings.SITES}</Text>
              <Pressable onPress={() => { console.log("ADD") }} style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Ionicons name={'ios-add'} size={25} color={'red'} />
                <Text style={[{ color: 'red' }, Styles.largeBold]} >{Strings.Add}</Text>
              </Pressable>
            </View>
            <View style={{ height: 135, width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

              <View style={{ backgroundColor: '#f7f6f6', justifyContent: 'center', alignItems: 'center', height: '80%', width: '30%' }}>
                <MaterialCommunityIcons name={'warehouse'} size={60} color={'black'} />
              </View>
              <Text style={[{ width: '55%', textAlign: 'left', color: Colors.TEXT_PRIMARY }, Styles.xlargeBold]} >{Strings.No_Site_Added}</Text>
            </View>
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
export default HomeComp;
