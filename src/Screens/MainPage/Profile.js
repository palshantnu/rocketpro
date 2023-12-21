import {
  BackHandler,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {Avatar, Caption, Title} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import Bottomnavbar from '../../Components/Bottomnavbar';
import LinearGradient from 'react-native-linear-gradient';
import Topnavbar from '../../Components/Topnavbar';
import {getData, postData} from '../../API';
import {CommonActions} from '@react-navigation/native';

const Profile = ({navigation}) => {
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
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch({type: 'LOGOUT'});

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
  };
  const [Links, setLinks] = useState();
  const getSocialLinks = async () => {
    const response = await getData('socialmedialink');
    console.log('response', response);
    setLinks(response.data);
  };
  useEffect(() => {
    getSocialLinks();
  }, []);
  return (
    <View style={[styles.containerFull]}>
      <Topnavbar
        navigation={navigation}
        points={Links ? Links.telegram_channel_link : null}
      />

      <View style={[styles.container]}>
        <View style={styles.userInfoSection}>
          <View
            style={{
              marginTop: 15,
              alignItems: 'center',
              backgroundColor: '#3087B4',
              padding: 10,
              // borderBottomRightRadius: 15,
              // borderBottomLeftRadius: 15,
              flexDirection: 'row',
            }}>
            <Avatar.Image
              source={{
                uri: 'https://www.w3schools.com/w3images/avatar6.png',
              }}
              size={60}
              style={{marginLeft: 20}}
            />
            <View
              style={{
                marginTop: 0,
                marginLeft: 20,
                flexDirection: 'column',
                flex: 1,
              }}>
              {/* <Title style={styles.title}>{'ID : 487654'}</Title> */}
              <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>
                Name : {profile.name}
              </Text>
              {/* <Title style={styles.title}>Kaushal</Title> */}
              <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>
                Email : {profile.email}
              </Text>
              <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>
                {'Referral id : '}
                {user.member_id}
              </Text>
            </View>
          </View>
          <View>
            <View style={[styles.catogoryview]}>
              <LinearGradient
                colors={['#fff', '#fff']}
                style={{
                  width: width * 0.45,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginVertical: 4,
                  padding: 10,
                }}>
                <View
                  style={{}}
                  // onPress={() =>{
                  // let url =
                  // 'whatsapp://send?text=' +
                  // '&phone=91' +'8890754903';
                  // Linking.openURL(url)
                  // .then((data) => {
                  // console.log('WhatsApp Opened');
                  // })
                  // .catch(() => {
                  // alert('Make sure Whatsapp installed on your device');
                  // })}
                  // }
                >
                  {/* <Image source={{uri:'https://www.tritium-charging.com/static/home/images/nav_9.png'}} style={[styles.cimage]}/> */}
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 16,
                      color: '#111',
                      fontWeight: '300',
                    }}>
                    Balance Wallet
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 20,
                      color: 'blue',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {profile.balance_wallet} Rs
                  </Text>
                </View>
              </LinearGradient>
              <LinearGradient
                colors={['#fff', '#fff']}
                style={{
                  width: width * 0.45,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginVertical: 4,
                  padding: 10,
                }}>
                <View
                  style={{}}
                  // onPress={() =>{
                  // let url =
                  // 'whatsapp://send?text=' +
                  // '&phone=91' +'8890754903';
                  // Linking.openURL(url)
                  // .then((data) => {
                  // console.log('WhatsApp Opened');
                  // })
                  // .catch(() => {
                  // alert('Make sure Whatsapp installed on your device');
                  // })}
                  // }
                >
                  {/* <Image source={{uri:'https://www.tritium-charging.com/static/home/images/nav_10.png'}} style={[styles.cimage]}/> */}
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 16,
                      color: '#111',
                      fontWeight: '300',
                    }}>
                    Withdraw Wallet
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 20,
                      color: 'blue',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {profile.withdrawal_wallet} Rs
                  </Text>
                </View>
              </LinearGradient>
              {/* <TouchableOpacity style={{backgroundColor:'#fff', width:width*0.22, borderRadius:10, alignItems:'center',marginVertical:4,padding:10}}
        onPress={() => Linking.openURL(`tel:${9686982609}`)}
        >
        <Image source={require('../../assets/images/phone-call.png')} style={[styles.cimage]}/>
        <View>
        <Text style={{fontSize:12 ,marginLeft:0,fontSize:16,color:'#111',fontWeight:'bold'}}>CALL</Text>
        </View>
        </TouchableOpacity> */}
              <LinearGradient
                colors={['#fff', '#fff']}
                style={{
                  width: width * 0.9,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginVertical: 4,
                  padding: 10,
                }}>
                <View
                  style={{}}
                  // onPress={() =>{
                  // let url =
                  // 'whatsapp://send?text=' +
                  // '&phone=91' +'8890754903';
                  // Linking.openURL(url)
                  // .then((data) => {
                  // console.log('WhatsApp Opened');
                  // })
                  // .catch(() => {
                  // alert('Make sure Whatsapp installed on your device');
                  // })}
                  // }
                >
                  {/* <Image source={{uri:'https://www.tritium-charging.com/static/home/images/nav_8.png'}} style={[styles.cimage]}/> */}
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 16,
                      color: '#111',
                      fontWeight: '300',
                    }}>
                    Total Recharge
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 0,
                      fontSize: 20,
                      color: 'blue',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {profile.totalrecharge} Rs
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* <View style={[styles.dropdownview,{backgroundColor:isEditable?'#fff':'#ddd'}]}
          onPress={() => navigation.navigate('Studymaterials3',{id:item.id})}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <FontAwesome name="bank" size={20} color={'#3087B4'} style={{marginLeft:20}}/>
          <View style={{justifyContent:'space-between',justifyContent:'flex-start',marginLeft:20}}>
          <Text style={{marginLeft:0,fontSize:11,color:'#111',fontWeight:'400'}}>{'User Name'}</Text>
          <Text style={{marginLeft:0,fontSize:14,color:'#111',fontWeight:'bold'}}>{"Himanshu"}</Text>
          <TextInput style={[styles.searchbar,{backgroundColor:isEditable?'#fff':'#ddd'}]}   placeholder="Name"
            placeholderTextColor={'#000'} value={name} editable={isEditable}
                    onChangeText={(text) => {
                      setName(text)
                    }}/>
          </View>
          </View>
          <FontAwesome name="bank" size={20} color={'#3087B4'} style={{marginRight:20,}}/>
      </View> */}

        <ScrollView>
          {/* <View> */}
          <TouchableOpacity
            style={[styles.dropdownview]}
            onPress={() => navigation.navigate('AddBankAccountScreen')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="bank"
                size={20}
                color={'#3087B4'}
                style={{marginLeft: 20}}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                }}>
                {/* <Text style={{marginLeft:0,fontSize:11,color:'#111',fontWeight:'400'}}>{'Mobile No.'}</Text> */}
                <Text
                  style={{
                    marginLeft: 0,
                    fontSize: 18,
                    color: '#111',
                    fontWeight: 'bold',
                  }}>
                  {'Add Bank Account'}
                </Text>
              </View>
            </View>
            <FontAwesome
              name="angle-right"
              size={24}
              color={'#3087B4'}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.dropdownview]}
            onPress={() => navigation.navigate('TransactionHistory')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <FontAwesome6
                name="receipt"
                size={20}
                color={'#3087B4'}
                style={{marginLeft: 20}}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                }}>
                {/* <Text style={{marginLeft:0,fontSize:11,color:'#111',fontWeight:'400'}}>{'Mobile No.'}</Text> */}
                <Text
                  style={{
                    marginLeft: 0,
                    fontSize: 18,
                    color: '#111',
                    fontWeight: 'bold',
                  }}>
                  {'Transaction History'}
                </Text>
              </View>
            </View>
            <FontAwesome
              name="angle-right"
              size={24}
              color={'#3087B4'}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.dropdownview]}
            onPress={() => navigation.navigate('ByHistory')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <FontAwesome6
                name="receipt"
                size={20}
                color={'#3087B4'}
                style={{marginLeft: 20}}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                }}>
                {/* <Text style={{marginLeft:0,fontSize:11,color:'#111',fontWeight:'400'}}>{'Mobile No.'}</Text> */}
                <Text
                  style={{
                    marginLeft: 0,
                    fontSize: 18,
                    color: '#111',
                    fontWeight: 'bold',
                  }}>
                  {'My Order'}
                </Text>
              </View>
            </View>
            <FontAwesome
              name="angle-right"
              size={24}
              color={'#3087B4'}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.dropdownview]}
            onPress={() => navigation.navigate('RechargeRecordScreen')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <FontAwesome6
                name="receipt"
                size={20}
                color={'#3087B4'}
                style={{marginLeft: 20}}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                }}>
                {/* <Text style={{marginLeft:0,fontSize:11,color:'#111',fontWeight:'400'}}>{'Mobile No.'}</Text> */}
                <Text
                  style={{
                    marginLeft: 0,
                    fontSize: 18,
                    color: '#111',
                    fontWeight: 'bold',
                  }}>
                  {'Recharge Records'}
                </Text>
              </View>
            </View>
            <FontAwesome
              name="angle-right"
              size={24}
              color={'#3087B4'}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.dropdownview]}
            onPress={() => navigation.navigate('WithdrawalScreen')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <FontAwesome6
                name="receipt"
                size={20}
                color={'#3087B4'}
                style={{marginLeft: 20}}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                }}>
                {/* <Text style={{marginLeft:0,fontSize:11,color:'#111',fontWeight:'400'}}>{'Mobile No.'}</Text> */}
                <Text
                  style={{
                    marginLeft: 0,
                    fontSize: 18,
                    color: '#111',
                    fontWeight: 'bold',
                  }}>
                  {'Withdrawal'}
                </Text>
              </View>
            </View>
            <FontAwesome
              name="angle-right"
              size={24}
              color={'#3087B4'}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.dropdownview]}
            onPress={() => logOut()}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Ionicons
                name="log-out-outline"
                size={24}
                color={'#3087B4'}
                style={{marginLeft: 20}}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                }}>
                {/* <Text style={{marginLeft:0,fontSize:11,color:'#111',fontWeight:'400'}}>{'Mobile No.'}</Text> */}
                <Text
                  style={{
                    marginLeft: 0,
                    fontSize: 18,
                    color: '#111',
                    fontWeight: 'bold',
                  }}>
                  {'Log Out'}
                </Text>
              </View>
            </View>
            <FontAwesome
              name="angle-right"
              size={24}
              color={'#3087B4'}
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
          <View style={{marginBottom: 70}}></View>
        </ScrollView>
        <Bottomnavbar navigation={navigation} page={'Profile'} />
      </View>
    </View>
  );
};

export default Profile;
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cimage: {height: 25, width: 25, marginLeft: 0, alignSelf: 'center'},
  containerFull: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
    paddingTop: 55,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
  topview: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#3087B4',
  },
  dropdownview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    alignItems: 'center',
    marginVertical: 7,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 14,
    marginTop: 10,
    borderColor: 'lightgray',
    zIndex: 100,
    borderWidth: 0,
    backgroundColor: '#ddd',
  },
  buttonview: {
    elevation: 5,
    alignItems: 'center',
    marginVertical: 0,
    borderRadius: 10,
    // width: '95%',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginTop: 20,
    borderColor: 'lightgray',
    zIndex: 100,
    backgroundColor: '#3087B4',
  },
  userInfoSection: {
    // paddingLeft: 20,
    marginTop: -20,
  },
  searchbar: {
    height: 22,
    margin: 0,
    color: '#111',
    fontWeight: 'bold',
    // flex: 1,
    borderRadius: 10,
    padding: 0,
    backgroundColor: '#ddd',
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
  catogoryview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 0,
    // borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    paddingVertical: 5,
    // top:10,
    borderColor: 'lightgray',
    zIndex: 100,
    borderWidth: 0,
    backgroundColor: '#3087B4',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
