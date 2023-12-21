import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ToastAndroid,
  } from 'react-native';
  import React from 'react';
  import OTPTextView from 'react-native-otp-textinput';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { postData } from '../../API';
import { useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
  
  const Verifyotp = ({navigation, route}) => {
    const {width, height} = Dimensions.get('window');
    const [otp, setOtp] = React.useState('');
    const item = route.params;
    console.log(item);

    const dispatch = useDispatch();
  
    const NextScreen = () => {
      if (otp == item.item.msg) {
        console.log(otp);
        navigation.navigate('ChangePassword',{item})
        
      }else{
        ToastAndroid.show('invalid OTP', ToastAndroid.SHORT);
      }
    };

    const VerifyOtp = async () => {
        if (otp === '') {
          ToastAndroid.show('Please Enter OTP!', ToastAndroid.SHORT);
        } 
         else {
          var body = {
            phone: item,
            otp:otp
          };
          console.log('body', body);
          const response = await postData('check_otp_for_login_with_phone', body);
    
          console.log('response', response);
          if (response.status == 1) {
            ToastAndroid.show(response.message, ToastAndroid.SHORT);
            dispatch({
              type: 'SET_USER',
              payload: response.data,
            });
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'Mainpage'}],
              }),
            );
          } else {
            ToastAndroid.show('something went wrong', ToastAndroid.SHORT);
          }
        }
      };
  
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              backgroundColor: '#3087B4',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" color={'#fff'} size={30} />
            </TouchableOpacity>
            <Text
              style={{
                padding: 5,
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                color: '#fff',
                marginLeft: width * 0.05,
              }}>
              Verify Otp
            </Text>
          </View>
          <View style={{width: '80%', alignSelf: 'center',marginTop:30}}>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontWeight: 'bold',
                // alignSelf: 'center',
              }}>
              Enter the verification code
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                fontWeight: '500',
                // alignSelf: 'center',
              }}>
              We just sent you a verification code via a Phone Number {item}
            </Text>
          </View>
          <View
            style={{
              marginTop: '5%',
              width: '80%',
              paddingLeft: '10%',
              paddingRight: '10%',
              alignSelf:'center'
            }}>
            <OTPTextView
              autoFocus
              handleTextChange={text => {
                setOtp(text);
              }}
              containerStyle={styles.textInputContainer}
              textInputStyle={{
                ...styles.roundedTextInput,
                borderColor: 'red',
                color: 'black',
              }}
              inputCount={4}
              offTintColor={'grey'}
              tintColor={'black'}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              {/* <Text style={{color:'red'}}>
                  Expired 00:59
              </Text> */}
              {/* <Text>Resend code</Text> */}
            </View>
          </View>
        </View>
  
        <TouchableOpacity
          onPress={() => VerifyOtp()}
          style={{
            marginBottom: 20,
            backgroundColor: '#3087B4',
            padding: 15,
            width: '80%',
            alignSelf: 'center',
            borderRadius: 5,
            elevation: 9,
            bottom: 0,
          }}>
          <Text
            style={{
              color: '#fff',
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Verifyotp;
  
  const styles = StyleSheet.create({
    label: {
      color: '#000',
    },
  
    input: {
      color: '#fff',
      fontWeight: '800',
      fontSize: 35,
      marginRight: 5,
      marginBottom: 15,
      height: 55,
    },
    Textitem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 300 - 140,
      marginTop: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInputContainer: {
      marginTop: 10,
      // backgroundColor:'#fff',
    },
    roundedTextInput: {
      borderRadius: 5,
      borderWidth: 2,
      borderBottomWidth: 2,
      backgroundColor: '#fff',
      width: '17%',
    },
  });