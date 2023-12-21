import { StyleSheet, Text, TextInput, View, StatusBar, Image, TouchableOpacity, ActivityIndicator, BackHandler, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import {useDispatch,useSelector} from 'react-redux';
import {CommonActions, useFocusEffect} from '@react-navigation/native';
import { useEffect } from 'react';


// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const VerifyOtp = ({ navigation, route }) => {
    const [checked, setChecked] = useState(false);
    const[verificationCode, setVerificatioCode] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const {usernumber, userVerificationCode} = route.params
    console.log(usernumber,userVerificationCode);
    const handleVerificationCode = () => {
      if (verificationCode != userVerificationCode) {
        // alert('Invalid Verification Code')
        ToastAndroid.show("Invalid Verification Code", ToastAndroid.SHORT)
        setLoading(false)
      }
      else if (verificationCode == userVerificationCode){
        setLoading(true)
        fetch('https://dpboosshiva.propertyindholera.com/api/registervalidate', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                otp: verificationCode
            })
        })
            .then(res => res.json()).then(
                data => {
                    console.log("data",data);
                     if (data.data.staus === "Register Successfully") {
                        setLoading(false)
                        // alert("Register Successfully!");
                ToastAndroid.show("Register Successfully!", ToastAndroid.SHORT)
                        dispatch({
                            type:'SET_USER',
                            payload:data.data
                        });
                        navigation.dispatch(
                            CommonActions.reset({
                            index:1,
                            routes:[{name:'Drawernavigation'}]
                        })
                        );
                }
               else if (data.data === "invalid otp") {
                    setLoading(false)
                ToastAndroid.show("Invalid Otp", ToastAndroid.SHORT)
            }
            else if (data.data === "Otp expire") {
                setLoading(false)
            ToastAndroid.show("Otp expire", ToastAndroid.SHORT)
        }
              }) 
      }
      else{
        alert('Please try Again')
      }
  }

  const resendOtp = () => {
    // setLoading(true)
   // navigation.navigate('Signup_Enterverificationcode')}
   if (usernumber == '') {
    alert('Please enter your number')
}
else {
    setLoading(true)
    fetch('http://saloon.rootstechnology.in/pcapi/saloon_login_otp_create.php', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mobile_number: usernumber
        })
    })
        .then(res => res.json()).then(
            data => {
                console.log("otppagedata",data.otp);
                 if (data.ResponseMsg === "otp Create Successfully!") {
                    setLoading(false)
                    alert("OTP Send Successfully!");
                    // setLoading(true)
                    // navigation.navigate
                    // ('Verifyotp',{
                    //     usernumber:number,
                    //     userVerificationCode: data.otp
                    // })
            }
          })    
   }}
   function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
  
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);
    return (
        <View>
            <View style={[styles.container]}>
                <View style={[styles.topview]}>
                    <AntDesign name="left" size={24} color="#111" style={[styles.gohomeicon]}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    />
                    <Text style={[styles.formHead]}>Login</Text>
                </View>
                <View style={[styles.c1]}>
                    <Image style={[styles.profilepic]} source={require('../../assets/images/dplogo.png')} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -20, marginBottom: 40 }}>
                    {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#aaaaaa' }}>Welcome To Exampur</Text> */}
                </View>
                <View style={{ marginTop: -20, marginBottom: 0, marginLeft: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#111',alignSelf:'center' }}>Verify Phone</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#111',alignSelf:'center',marginTop: 10 }}>Phone : {"usernumber"}</Text>
                </View>
                {/* <TextInput style={[styles.searchbar]} keyboardType='numeric' maxLength={10} placeholder="Number"
                    onChangeText={(text) => {
                        setNumber(text)
                    }} /> */}
                <TextInput style={[styles.searchbar, { marginBottom: 40 }]} keyboardType='text' secureTextEntry={true} maxLength={10} placeholder="Enter the OTP" 
                    placeholderTextColor={"#111"}
                    onChangeText={(text) => {
                        setVerificatioCode(text)
                    }} />
                {/* <TextInput
                    label="Password"
                    secureTextEntry={passwordVisible}
                    right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                /> */}

                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 10 }}>
                    
                    <Text style={{ fontWeight: 'bold' }}>Forgot Password ?</Text>
                    <Text style={{ fontWeight: 'bold', marginLeft: 7,color:"#9acd32"}}>Reset</Text>
                </View> */}

                {/* </View> */}
                {/* </View> */}
                {/* <TouchableOpacity style={[styles.btn, styles.elevation,{marginBottom:10}]}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: '#1e90ff', fontSize: 20, fontWeight: 'bold' }}>Let's Register</Text>
         </TouchableOpacity> */}
          {
           loading ?
          <ActivityIndicator size="large" color='#3087B4'/>
          :
          <TouchableOpacity style={[styles.btn1, styles.elevation]}
                    onPress={() => {  handleVerificationCode ()  }}>
                    <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Verify OTP</Text>
          </TouchableOpacity>
           }
                
                <View style={[styles.suggestionview]}>

                    <Text style={[styles.suggestiontext]}>Facing problem in signing in? </Text>
                    <Text style={{ color: '#3087B4', fontWeight: 'bold' }}> Call us</Text>
                </View>
            </View>

        </View>

    )
}

export default VerifyOtp

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    container1: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: 10,
    },
    inputFlex: {
        alignSelf: 'stretch',
        width: '80%',
        padding: 0,
        backgroundColor: '#ddd'
    },
    visibilityBtn: {
        position: 'absolute',
        right: 9,
        height: 25,
        width: 25,
        padding: 0,
        marginTop: 21,
    },
    formHead: {
        fontSize: 17,
        color: '#ffffff',
        marginLeft: 125,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    txt1: {
        fontSize: 20,
        color: '#111111',
        marginTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    topview: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 15
    },
    gohomeicon: {
        marginLeft: 10
    },
    icon3: {
        color: '#111111',
        fontSize: 20,
        marginLeft: 15,
    },
    suggestiontext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#888888'
    },
    suggestionview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        // borderRadius: 10,
        // width: '100%',
        alignSelf: 'center',
        paddingVertical: 10,
        // top: 10,
        // borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#ffffff'
    },
    c1: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
        //   height:1,
        //   backgroundColor:'gray',
        //   marginVertical:20
    },
    profilepic: {
        width: 150,
        height: 150,
        borderColor: '#ffffff',
        borderWidth: 5,
        backgroundColor: '#111111',
        borderRadius: 10,
        marginTop: -50,
    },
    searchbar: {
        height: 48,
        margin: 10,
        color: '#111',
        fontWeight:'bold',
        // flex: 1,
        borderRadius: 10,
        padding: 14,
        backgroundColor: '#ddd',
    },
    searchview: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        // paddingVertical: 10,
        // top: 0,
        // borderColor: 'lightgray',
        // zIndex: 100,
        // borderWidth: 1,
        backgroundColor: '#ddd'
    },
    icon3: {
        color: '#111111',
        fontSize: 20,
        marginLeft: 15,
    },
    numberview: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',
        // borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        top: 10,
        // borderColor: 'lightgray',
        zIndex: 100,
        // flex:1,
        // borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e90ff",
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 13,
        backgroundColor: '#ffffff',
    },
    btn1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 10,
        backgroundColor: '#3087B4'
    },
    elevation: {
        shadowOffset: { width: 10, height: 0 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
    },
});