import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import logo from '../../assets/logo.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import { useSelector } from 'react-redux';

const Topnavbar = ({navigation, points, typec, refresh}) => {
  const [adata, setAdata] = useState([]);
  // const user = useSelector(state => state.user);
  // const LoggedIn = useSelector(state => state.isLoggedIn);
  // const type = useSelector(state => state.type);

  console.log('points', points);

  const getCategoryData = async () => {
    // setLoading(true)
    try {
      const response = await fetch(
        'http://coaching.rootstechnology.in/api/categorydata',
      );
      const myData = await response.json();
      // console.log("hgduytgdu",myData.Catlist);
      setAdata(myData.data);
      //  setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  // console.log('adata',adata);
  return (
    <View style={[styles.container]}>
      <View
        style={{flexDirection: 'row', marginLeft: 30, alignItems: 'center'}}
        onPress={() => navigation.navigate('SelectCategory', {data: adata})}>
        <Text style={[styles.text]}>{'RAPIDPRO'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          let groupLink = points // Replace with your Telegram group/channel invite link
          Linking.openURL(groupLink)
            .then(data => {
              console.log('Telegram Group/Channel Joined');
            })
            .catch(() => {
              alert('Make sure Telegram is installed on your device');
            });
        }}
        style={{
          flexDirection: 'row',
          marginLeft: 30,
          alignItems: 'center',
          marginRight: 20,
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#fff',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <EvilIcons
            name="sc-telegram"
            size={20}
            color="#3087B4"
            style={[styles.icon1, {marginRight: 0, marginLeft: 0}]}
            onPress={() => {
              refresh();
            }}
          />
        </View>
        <Text style={[styles.text, {marginLeft: 3}]}>{'Join Telegram'}</Text>
      </TouchableOpacity>
      {/* {
       page === 'My_Userprofile' &&
     <MaterialIcons name="notifications-none" size={24} color="#99B83C" style={[styles.icon1]}
     onPress={()=>navigation.navigate('All_chats')
    } />
     } */}
    </View>
  );
};

export default Topnavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent:'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    position: 'absolute',
    marginTop: 0,
    zIndex: 100,
    backgroundColor: '#3087B4',
  },
  logo2: {
    height: 30,
    resizeMode: 'contain',
    width: 100,
  },
  icon1: {
    color: '#3087B4',
    fontSize: 24,
    // marginRight:25,
  },
  icon3: {
    color: '#111111',
    fontSize: 30,
    marginLeft: 15,
  },
  icon2: {
    color: 'white',
    fontSize: 25,
    marginRight: 5,
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
});
