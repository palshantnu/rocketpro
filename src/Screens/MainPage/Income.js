import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  AsyncStorage,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  BackHandler,
  Alert,
  FlatList,
  Linking,
  Vibration,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Bottomnavbar from '../../Components/Bottomnavbar';
import Topnavbar from '../../Components/Topnavbar';
// import FollowersRandomPost from '../../Components/FollowersRandomPost';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useSelector} from 'react-redux';
import {log} from 'react-native-reanimated';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {getData, postData} from '../../API';

const Income = ({navigation, route}) => {
  const user = useSelector(state => state.user);
  const LoggedIn = useSelector(state => state.isLoggedIn);
  const [regCount, setregCount] = useState('');
  const [InviteCount, setInviteCount] = useState('');
  console.log('user', user);
  // console.log('result',result);
  const {width, height} = Dimensions.get('window');

  const getDailyCoins = async () => {
    // setLoading(true)
    const body = {
      user_id: user.user_id,
      price: 6,
    };
    const response = await postData('daily_task', body);
    console.log('response', response);
    ToastAndroid.show(response.message, ToastAndroid.SHORT);
  };

  const PostTaskdata = async () => {
    // setLoading(true)
    const body = {
      member_id: user.member_id,
    };
    const response = await postData('taskcount_register', body);
    console.log('response---->', response);
    setregCount(response.data);
    // ToastAndroid.show(response.message, ToastAndroid.SHORT);
  };

  const PostTaskleveldata = async () => {
    // setLoading(true)
    const body = {
      member_id: user.member_id,
    };
    const response = await postData('taskcount', body);
    console.log('response---->', response);
    setInviteCount(response.data);
    // ToastAndroid.show(response.message, ToastAndroid.SHORT);
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const [Links, setLinks] = useState();
  const getSocialLinks = async () => {
    const response = await getData('socialmedialink');
    console.log('response', response);
    setLinks(response.data);
  };
  useEffect(() => {
    PostTaskdata();
    PostTaskleveldata();
    getSocialLinks();
  }, []);

  return (
    <View style={[styles.containerFull]}>
      <StatusBar backgroundColor="#3087B4" />
      <Topnavbar
        navigation={navigation}
        points={Links ? Links.telegram_channel_link : null}
      />
      <ScrollView
        style={{}}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View
            style={{
              width: '95%',
              backgroundColor: '#31BFFA',
              padding: 15,
              marginTop: 20,
              alignSelf: 'center',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#111',
            }}>
            <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
              {'Invitation Misson Rewards'}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#ddd',
                fontWeight: '400',
                marginVertical: 5,
              }}>
              {'Invite valid users to invest and get Rs. 50'}
            </Text>
            <View
              style={{
                width: '90%',
                backgroundColor: '#fff',
                padding: 5,
                marginTop: 0,
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 15, color: '#111', fontWeight: 'bold'}}>
                  {'Rs.0'}
                </Text>
                <Text style={{fontSize: 15, color: '#111', fontWeight: 'bold'}}>
                  {'Received'}
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 14, color: '#111', fontWeight: 'bold'}}>
                  {'Rs.0'}
                </Text>
                <Text style={{fontSize: 14, color: '#111', fontWeight: 'bold'}}>
                  {'Available'}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              {'Invitation Misson Rewards'}
            </Text>
          </View>
          <View>
            <View style={{...styles.catogoryview, justifyContent: 'center'}}>
              <LinearGradient
                colors={['#31BFFA', '#1E8AF9']}
                style={{
                  width: width * 0.9,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginVertical: 4,
                  padding: 10,
                  alignSelf: 'center',
                }}>
                <View style={{}}>
                  <Image
                    source={{
                      uri: 'https://www.tritium-charging.com/static/home/images/team_1.png',
                    }}
                    style={[styles.cimage]}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 14,
                      color: '#fff',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    My Income
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 14,
                      color: '#fff',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Rs. 0.00
                  </Text>
                </View>
              </LinearGradient>
            </View>
            {/* <View style={[styles.catogoryview]}>
              <LinearGradient
                colors={['#31BFFA', '#1E8AF9']}
                style={{
                  width: width * 0.4,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginVertical: 4,
                  padding: 10,
                }}>
                <View style={{}}>
                  <Image
                    source={{
                      uri: 'https://www.tritium-charging.com/static/home/images/team_1.png',
                    }}
                    style={[styles.cimage]}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 14,
                      color: '#fff',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Team Income
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 14,
                      color: '#fff',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Rs. 0.00
                  </Text>
                </View>
              </LinearGradient>
              <LinearGradient
                colors={['#FFBA00', '#FF9001']}
                style={{
                  width: width * 0.4,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginVertical: 4,
                  padding: 10,
                }}>
                <View
                  style={{}}
                  
                >
                  <Image
                    source={{
                      uri: 'https://www.tritium-charging.com/static/home/images/team_2.png',
                    }}
                    style={[styles.cimage]}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 14,
                      color: '#fff',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Team Size
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 14,
                      color: '#fff',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    0
                  </Text>
                </View>
              </LinearGradient>
             
            </View> */}
          </View>
        </View>
        <View style={{...styles.catogoryview, justifyContent: 'center'}}>
          <LinearGradient
            colors={['#31BFFA', '#1E8AF9']}
            style={{borderRadius: 10}}>
            <TouchableOpacity
              onPress={() => getDailyCoins()}
              style={{
                width: width * 0.9,
                borderRadius: 10,
                alignItems: 'center',
                marginVertical: 4,
                padding: 10,
                alignSelf: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://www.tritium-charging.com/static/home/images/team_1.png',
                }}
                style={[styles.cimage]}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 0,
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Daily CheckIn
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 0,
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Rs. 6.00
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            width: '95%',
            backgroundColor: 'orange',
            padding: 16,
            marginVertical: 20,
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>
            {'ONE TIME INCOME OF DOWNLINE INVESTMENT'}
          </Text>
        </View>
        <View style={{padding: 10, paddingLeft: 15}}>
          <View style={{marginTop: 0}}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: '600',
                textAlign: 'justify',
              }}>
              Register 20 member get 60 rs{' : '}
              <Text style={{color: '#31BFFA'}}>
                {regCount >= 20 ? '20' : regCount}
              </Text>{' '}
              / 20 ({regCount >= 20 ? 'Received' : 'Receive'})
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: '600',
                textAlign: 'left',
              }}>
              Register 50 member get 200 rs {' : '}
              <Text style={{color: '#31BFFA'}}>
                {regCount >= 50 ? '50' : regCount}
              </Text>{' '}
              / 50 ({regCount >= 50 ? 'Received' : 'Receive'})
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '600',
                marginTop: 10,
                backgroundColor: 'orange',
                padding: 16,
                width: width * 0.95,
              }}>
              From one member one time only
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
              Invite 1 Level 1 member get -50 {' : '}
              <Text style={{color: '#31BFFA'}}>
                {InviteCount >= 1 ? '1' : InviteCount}
              </Text>{' '}
              / 1 ({InviteCount >= 1 ? 'Received' : 'Receive'})
              {/* {console.log('InviteCount',InviteCount)} */}
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
              Invite Level 1 total 15 member get -600 {' : '}
              <Text style={{color: '#31BFFA'}}>
                {InviteCount >= 15 ? '15' : InviteCount}
              </Text>{' '}
              / 15 ({InviteCount >= 15 ? 'Received' : 'Receive'})
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
              Invite Level 1 total 25 member get -1000 {' : '}
              <Text style={{color: '#31BFFA'}}>
                {InviteCount >= 25 ? '25' : InviteCount}
              </Text>{' '}
              / 25 ({InviteCount >= 25 ? 'Received' : 'Receive'})
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
              Invite Level 1 total 50 member get -3000 {' : '}
              <Text style={{color: '#31BFFA'}}>
                {InviteCount >= 50 ? '50' : InviteCount}
              </Text>{' '}
              / 50 ({InviteCount >= 50 ? 'Received' : 'Receive'})
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 70}}></View>
      </ScrollView>
      <Bottomnavbar page={'Income'} navigation={navigation} />
    </View>
  );
};

export default Income;
const {width, height} = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7;
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5;
const CARD_WIDTH = Dimensions.get('window').width * 0.6;
const CARD_HEIGHT = Dimensions.get('window').height * 0.4;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  child: {width, justifyContent: 'center', borderRadius: 0, marginVertical: 10},
  image: {
    height: 160,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  cimage: {height: 45, width: 45, marginLeft: 0, alignSelf: 'center'},
  cimage1: {height: 45, width: 45, marginLeft: 10},
  // 20b2aa
  containerFull: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
  },

  catogoryview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    // flexWrap:'wrap',
    paddingVertical: 0,
    // top:10,
    borderColor: 'lightgray',
    zIndex: 100,
    borderWidth: 0,
    // backgroundColor:'#3087B4'
  },
  elevation: {
    shadowOffset: {width: -2, height: 7},
    shadowColor: '#fafafa',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 164,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
    backgroundColor: 'trnasparent',
  },
  icon: {},
});
