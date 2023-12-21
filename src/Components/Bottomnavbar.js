import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useSelector} from 'react-redux';

// import { useSelector } from 'react-redux';

const Bottomnavbar = ({navigation, page}) => {
  console.log('pageeee', page);
  const user = useSelector(state => state.user);
  const LoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <View style={[styles.container]}>
      {page === 'Mainpage' ? (
        <TouchableOpacity
          onPress={() => {
            LoggedIn
              ? navigation.navigate('Mainpage')
              : navigation.navigate('Home');
          }}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <MaterialCommunityIcons
            name="home"
            size={24}
            color="black"
            style={[styles.activeicon1]}
          />
          <Text style={{fontSize: 11, color: '#3087B4'}}>Home</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            LoggedIn
              ? navigation.navigate('Mainpage')
              : navigation.navigate('Home');
          }}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <MaterialCommunityIcons
            name="home"
            size={24}
            color="#4DCDC9"
            style={[styles.icon1]}
          />
          <Text style={{fontSize: 11, color: '#111'}}>Home</Text>
        </TouchableOpacity>
      )}
      {page === 'Income' ? (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome6
            name="indian-rupee-sign"
            size={24}
            color="black"
            style={[styles.activeicon1]}
            onPress={() => {
              LoggedIn
                ? navigation.navigate('Income')
                : navigation.navigate('Home');
            }}
          />
          <Text style={{fontSize: 11, color: '#3087B4'}}>Income</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome6
            name="indian-rupee-sign"
            size={24}
            color="#4DCDC9"
            style={[styles.icon1]}
            onPress={() => {
              LoggedIn
                ? navigation.navigate('Income')
                : navigation.navigate('Home');
            }}
          />
          <Text style={{fontSize: 11, color: '#111'}}>Income</Text>
        </TouchableOpacity>
      )}

      {page === 'RechargeScreen' ? (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome6
            name="users"
            size={24}
            color="black"
            style={[styles.activeicon1]}
            onPress={() => {
              navigation.navigate('RechargeScreen');
            }}
          />
          <Text style={{fontSize: 11, color: '#3087B4'}}>Recharge</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome6
            name="users"
            size={24}
            color="#4DCDC9"
            style={[styles.icon1]}
            onPress={() => {
              navigation.navigate('RechargeScreen');
            }}
          />
          <Text style={{fontSize: 11, color: '#111'}}>Recharge</Text>
        </TouchableOpacity>
      )}
      {/* {page === 'Myteam' ? (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome6
            name="users"
            size={24}
            color="black"
            style={[styles.activeicon1]}
            onPress={() => {
              LoggedIn
                ? navigation.navigate('Myteam')
                : navigation.navigate('Myteam');
            }}
          />
          <Text style={{fontSize: 11, color: '#3087B4'}}>My Team</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome6
            name="users"
            size={24}
            color="#4DCDC9"
            style={[styles.icon1]}
            onPress={() => {
              LoggedIn
                ? navigation.navigate('Myteam')
                : navigation.navigate('Myteam');
            }}
          />
          <Text style={{fontSize: 11, color: '#111'}}>My Team</Text>
        </TouchableOpacity>
      )} */}

      {page === 'Profile' ? (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome6
            name="user-large"
            size={24}
            color="black"
            style={[styles.activeicon1]}
            onPress={() => navigation.navigate('Profile')}
          />
          <Text style={{fontSize: 11, color: '#3087B4'}}>Me</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome6
            name="user-large"
            size={24}
            color="#4DCDC9"
            style={[styles.icon1]}
            onPress={() => navigation.navigate('Profile')}
          />
          <Text style={{fontSize: 11, color: '#111'}}>Me</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Bottomnavbar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 100,
    borderTopWidth: 0,
    paddingVertical: 10,
    alignItems: 'center',
  },
  icon1: {
    color: 'black',
    backgroundColor: 'white',

    fontSize: 25,
  },
  activeicon1: {
    color: '#3087B4',

    // backgroundColor:'black',
    fontSize: 25,
    borderRadius: 50,
    padding: 0,
  },
});
