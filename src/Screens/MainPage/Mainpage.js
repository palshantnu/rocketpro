import {
  StyleSheet,
  Text,
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Caption, Title} from 'react-native-paper';
import {getData, postData} from '../../API';                                                                                                                                                      

const Mainpage = ({navigation, route}) => {
  const [pointsandplaystatus, setPointsandplaystatus] = useState({});
  const [market, setMarket] = useState([]);
  const [Links, setLinks] = useState();

  const user = useSelector(state => state.user);
  const [profile, setProfile] = React.useState('');
  const getProfile = async () => {
    const body = {
      user_id: user.user_id,
    };
    const response = await postData('userprofile', body);
    console.log(response);
    setProfile(response.data);
  };
  React.useEffect(() => {
    getProfile();
  }, []);
  const getMarket = async () => {
    const response = await getData('getservice');
    console.log('response', response);
    setMarket(response.data);
  };
  const getSocialLinks = async () => {
    const response = await getData('socialmedialink');
    console.log('response', response);
    setLinks(response.data);
  };

  useEffect(() => {
    getMarket();
    getSocialLinks();
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
  console.log('link', Links);
  return (
    <View style={[styles.containerFull]}>
      <StatusBar backgroundColor="#3087B4" />
      {console.log(Links)}
      <Topnavbar
        navigation={navigation}
        points={Links ? Links.telegram_channel_link : null}
      />
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 0,
          }}>
          <SwiperFlatList
            autoplay={true}
            autoplayLoop={true}
            autoplayDelay={3}
            showPagination
            paginationStyleItem={{
              width: 7,
              height: 7,
              borderRadius: 5,
              backgroundColor: 'red',
              justifyContent: 'space-evenly',
            }}
            index={0}>
            <View style={[styles.child]}>
              <View
                style={{
                  width: '95%',
                  elevation: 5,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  alignSelf: 'center',
                }}>
                <ImageBackground
                  source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/000/677/302/original/abstract-technology-banner-background.jpg',
                  }}
                  style={[styles.image]}>
                  <View style={styles.userInfoSection}>
                    <View
                      style={{
                        marginTop: 5,
                        alignItems: 'center',
                        // backgroundColor: "#3087B4",
                        justifyContent: 'center',
                        padding: 10,
                        borderBottomRightRadius: 15,
                        borderBottomLeftRadius: 15,
                      }}>
                      {/* <Avatar.Image
                        // title={user?.name.substr(0, 1)}
                        // rounded
                        // source={{
                        //   uri: profileData?.profileimage
                        //     ? profileData?.profileimage.length > 20
                        //       ? `data:image/png;base64,${profileData?.profileimage}`
                        //       : `https://rapidhealth.me/assets/doctor/${profileData?.profileimage}`
                        //     : 'https://www.w3schools.com/w3images/avatar6.png',
                        // }}

                        source={{
                          uri: 'https://www.w3schools.com/w3images/avatar6.png',
                        }}
                        size={60}
                      /> */}
                      <View
                        style={{
                          marginTop: 10,
                          marginLeft: 5,
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#fff',
                            fontWeight: '300',
                          }}>
                          {'Name : '}
                          {profile.name}
                          {/* {'Name : Himanshu | Referral Code:438753'} */}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#fff',
                            fontWeight: '300',
                          }}>
                          {'Referral id : '}
                          {user.member_id}
                          {/* {'Name : Himanshu | Referral Code:438753'} */}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#fff',
                            fontWeight: '300',
                          }}>
                          {/* {'Mobile : 9876543211'} */}
                          {'Email : '}
                          {profile.email}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#fff',
                            fontWeight: '300',
                          }}>
                          {'Registaration Date : 24/11/2023'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
            {/* <View style={[styles.child]}>
        <View style={{width:'95%',elevation:5,backgroundColor:'#fff',borderRadius:10,alignSelf:'center'}}>
        <Image source={require('../../assets/images/Laxmiji.jpg')} style={[styles.image]}/>
        </View>
        </View> */}
          </SwiperFlatList>
        </View>
        <View>
          {/* <View style={[styles.catogoryview]}>
            <LinearGradient
              colors={['#31BFFA', '#1E8AF9']}
              style={{
                width: width * 0.45,
                borderRadius: 10,
                alignItems: 'center',
                marginVertical: 4,
                padding: 10,
              }}>
              <TouchableOpacity style={{}}>
                <Image
                  source={{
                    uri: 'https://www.tritium-charging.com/static/home/images/nav_9.png',
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
                  }}>
                  Recharge
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#FFBA00', '#FF9001']}
              style={{
                width: width * 0.45,
                borderRadius: 10,
                alignItems: 'center',
                marginVertical: 4,
                padding: 10,
              }}>
              <TouchableOpacity style={{}}>
                <Image
                  source={{
                    uri: 'https://www.tritium-charging.com/static/home/images/nav_10.png',
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
                  }}>
                  Withdraw
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View> */}
          <View style={[styles.catogoryview]}>
            <LinearGradient
              colors={['#318fd3', '#1d4059']}
              style={{
                width: width * 0.45,
                borderRadius: 10,
                alignItems: 'center',
                marginVertical: 4,
                padding: 10,
              }}>
              {/* {console.log(Links.telegram_customer_service.slice(1))} */}
              <TouchableOpacity
                onPress={() => {
                  let groupLink = Links ? Links.telegram_group_link : null; // Replace with your Telegram group/channel invite link
                  Linking.openURL(groupLink)
                    .then(data => {
                      console.log('Telegram Group/Channel Joined');
                    })
                    .catch(() => {
                      alert('Make sure Telegram is installed on your device');
                    });
                }}
                style={{}}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png',
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
                  }}>
                  Telegram Group
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#06f502', '#1d401d']}
              style={{
                width: width * 0.45,
                borderRadius: 10,
                alignItems: 'center',
                marginVertical: 4,
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  let groupLink = Links ? Links.whatsapp_grouplink : null; // Replace with your WhatsApp group invite link
                  Linking.openURL(groupLink)
                    .then(data => {
                      console.log('WhatsApp Group Joined');
                    })
                    .catch(() => {
                      alert('Make sure WhatsApp is installed on your device');
                    });
                }}
                style={{}}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png',
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
                  }}>
                  Whatsapp Group
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={[styles.catogoryview]}>
            <LinearGradient
              colors={['#06f502', '#1d401d']}
              style={{
                width: width * 0.45,
                borderRadius: 10,
                alignItems: 'center',
                marginVertical: 4,
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  let url =
                    'whatsapp://send?text=' + '&phone=91' + Links
                      ? Links.customer_sevice
                      : null;
                  Linking.openURL(url)
                    .then(data => {
                      console.log('WhatsApp Opened');
                    })
                    .catch(() => {
                      alert('Make sure Whatsapp installed on your device');
                    });
                }}
                style={{}}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png',
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
                  }}>
                  Whatsapp Support
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#318fd3', '#1d4059']}
              style={{
                width: width * 0.45,
                borderRadius: 10,
                alignItems: 'center',
                marginVertical: 4,
                padding: 10,
              }}>
              {/* {console.log(Links?Links.telegram_customer_service.slice(1))} */}
              <TouchableOpacity
                onPress={() => {
                  let username = Links
                    ? Links.telegram_customer_service.slice(1)
                    : null; // Replace 'telegramusername' with the actual Telegram username
                  let url = 'https://t.me/' + username;
                  Linking.openURL(url)
                    .then(data => {
                      console.log('Telegram Opened');
                    })
                    .catch(() => {
                      alert('Make sure Telegram is installed on your device');
                    });
                }}
                style={{}}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png',
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
                  }}>
                  Telegram Support
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            {/* <TouchableOpacity style={{backgroundColor:'#fff', width:width*0.22, borderRadius:10, alignItems:'center',marginVertical:4,padding:10}}
        onPress={() => Linking.openURL(`tel:${9686982609}`)}
        >
        <Image source={require('../../assets/images/phone-call.png')} style={[styles.cimage]}/>
        <View>
        <Text style={{fontSize:12 ,marginLeft:0,fontSize:16,color:'#111',fontWeight:'bold'}}>CALL</Text>
        </View>
        </TouchableOpacity> */}
          </View>
        </View>
        {/* <Text>Countdown to {targetTime2}: {formatTime(remainingTime2)}</Text> */}
      </View>
      <ScrollView
        style={{}}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <FlatList
          nestedScrollEnabled={true}
          data={market}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails', item)}
                style={{
                  marginTop: 40,
                  flexDirection: 'row',
                  width: '95%',
                  borderWidth: 2,
                  alignSelf: 'center',
                  padding: 15,
                  borderRadius: 10,
                  borderColor: '#3087B4',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f0f0f0',
                }}>
                {/* <TouchableOpacity style={{alignItems:'center',justifyContent:'space-between'}}
                onPress={()=> navigation.navigate('Resultchart',{game:item})}>
                <Image source={require('../../assets/images/bar.png')} style={[styles.cimage1]}/>
                </TouchableOpacity> */}
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      flex: 1,
                    }}>
                    <Text
                      style={{fontSize: 16, color: '#111', fontWeight: 'bold'}}>
                      {item.coursename}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'orange',
                        fontWeight: 'bold',
                      }}>
                      {item.price}rs
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      width: '90%',
                      padding: 10,
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 5,
                        paddingHorizontal: 20,
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'green',
                          fontWeight: 'bold',
                        }}>
                        {'ACTIVE DATE'}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 5,
                        paddingHorizontal: 20,
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'red',
                          fontWeight: 'bold',
                        }}>
                        {'EXPIRY DATE'}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-betwwen',
                      width: '100%',
                      backgroundColor: '#fff',
                      padding: 5,
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 5,
                        paddingHorizontal: 0,
                        borderRadius: 0,
                        backgroundColor: '#fff',
                        width: '42%',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#111',
                          fontWeight: 'bold',
                        }}>
                        {'Daily Self Income'}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#111',
                          fontWeight: 'bold',
                        }}>
                        {item.daily_self_income}rs
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 5,
                        paddingHorizontal: 0,
                        borderRadius: 50,
                        backgroundColor: '#fff',
                        width: '26%',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#111',
                          fontWeight: 'bold',
                        }}>
                        {'Days'}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#111',
                          fontWeight: 'bold',
                        }}>
                        {item.days}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 7,
                        paddingHorizontal: 0,
                        borderRadius: 50,
                        backgroundColor: '#3087B4',
                        width: '30%',
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#fff',
                          fontWeight: 'bold',
                        }}>
                        {'BUY COURSE'}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* {
                  pointsandplaystatus.canplay == 0 ?
                  <TouchableOpacity style={{alignItems:'center',justifyContent:'space-between'}}
                onPress={()=> {item.closetimestatus == 0 ? navigation.navigate('Selectplay',{game:item})
                : Vibration.vibrate(500)}}>
                <Image source={require('../../assets/images/play.png')} style={[styles.cimage1,{marginLeft:0,marginRight:10}]}/>
                </TouchableOpacity>
                :
                <TouchableOpacity style={{alignItems:'center',justifyContent:'space-between'}}
                // onPress={()=> navigation.navigate('Selectplay',{game:item.name})}
                >
                <View style={{height:45,width:45,marginRight:10}}></View>
                </TouchableOpacity>
                } */}
              </TouchableOpacity>
            );
          }}
        />
        <View style={{marginBottom: 70}}></View>
      </ScrollView>
      <Bottomnavbar page={'Mainpage'} navigation={navigation} />
    </View>
  );
};

export default Mainpage;
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
  cimage: {height: 25, width: 25, marginLeft: 0, alignSelf: 'center'},
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
    marginVertical: 3,
    borderRadius: 10,
    width: '95%',
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
    backgroundColor: '#000000c0',
    // backgroundColor: 'trnasparent',
  },
  userInfoSection: {
    // paddingLeft: 20,
    marginTop: 0,
    backgroundColor: '#000000c0',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginTop: 3,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});
