import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import { useEffect } from 'react';
// import { TextInput } from 'react-native-paper';

// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const ForgotPass = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [number, setNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);



      const handleForgotPass = () => {
        setLoading(true)
       // navigation.navigate('Signup_Enterverificationcode')}
       if (number == '') {
        alert('Please enter your number')
        setLoading(false)
    }
    else {
        setLoading(true)
        fetch('http://coaching.rootstechnology.in/api/ForgetPasswordStore', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile:number,
            })
        })
            .then(res => res.json()).then(
                data => {
                    // if (data.error === "Invalid Credentials") {
                    //     // alert('Invalid Credentials')
                    //     alert('Invalid Credentials')
                    //     setLoading(false)
                    // }
                    console.log("data",data.otp);
                    // alert("OTP for your number is",data.otp)
                     if (data.message === "otp Sent") {
                        setLoading(false)
                        alert(`OTP Send Successfully!,${data.otp}`);
                        navigation.navigate
                        ('ForgotPassOTP',{
                            usernumber:number,
                            userVerificationCode: data.otp
                        })
                }
                else if(data.message === "number not register") {
                    setLoading(false)
                    alert("User Not Exist");
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
                {/* <View style={{ paddingBottom: 100, paddingTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111111', borderRadius: 10, }}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '900' }}>Zylu</Text>
                    <Text style={{ color: 'white', fontSize: 14, top: 4 }}>Login or Signup to book your appointment</Text>
                </View> */}
                <View style={[styles.c1]}>
                    <Image style={[styles.profilepic]} source={require('../../../assets/logo4.png')} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -20, marginBottom: 40 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#aaaaaa' }}>Welcome To Exampur</Text>
                </View>
                <View style={{ marginTop: -20, marginBottom: 20, marginLeft: 0, alignItems:'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#111' }}>Reset Password</Text>
                </View>

                <TextInput style={[styles.searchbar]} keyboardType='numeric' maxLength={10} placeholder="Phone Number"
                    onChangeText={(text) => {
                        setNumber(text)
                    }} />


                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 10 }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        color={'#4DCDC9'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={{ fontWeight: 'bold' }}>I agree with Terms and Privacy Policy</Text>
                </View> */}

                {/* </View> */}
                {/* </View> */}
                {/* <TouchableOpacity style={[styles.btn, styles.elevation,{marginBottom:10}]}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: '#1e90ff', fontSize: 20, fontWeight: 'bold' }}>Let's Register</Text>
         </TouchableOpacity> */}
         {
        loading ?
          <ActivityIndicator size="large" color='black'/>
          :
          <TouchableOpacity style={[styles.btn1, styles.elevation]}
                    onPress={() => {  handleForgotPass()  }}>
                    <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Send OTP</Text>
         </TouchableOpacity>
           }
                
                <View style={[styles.suggestionview]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.suggestiontext]}>LogIn/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: '#4DCDC9', fontWeight: 'bold',fontSize: 13 }}>New Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

export default ForgotPass

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
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4DCDC9'
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
        marginTop: 10,
        //   height:1,
        //   backgroundColor:'gray',
        //   marginVertical:20
    },
    profilepic: {
        width: 160,
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
        paddingVertical: 12,
        backgroundColor: '#4DCDC9',
        marginVertical:10
    },
    elevation: {
        shadowOffset: { width: 10, height: 0 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
    },
});