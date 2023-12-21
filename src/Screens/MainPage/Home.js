import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import { Checkbox } from 'react-native-paper';
import {useDispatch,useSelector} from 'react-redux';
import {CommonActions, useFocusEffect} from '@react-navigation/native';
import { useEffect } from 'react';


// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Home = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [number, setNumber] = useState('')
  const [loading, setLoading] = useState(false)
//   const handleEmail = () => {
//     // setLoading(true)
//    // navigation.navigate('Signup_Enterverificationcode')}
//    if (number == '') {
//     alert('Please enter your number')
// }
// else {
//     setLoading(true)
//     fetch('http://saloon.rootstechnology.in/pcapi/saloon_login_otp_create.php', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             mobile_number: number
//         })
//     })
//         .then(res => res.json()).then(
//             data => {
//                 // if (data.error === "Invalid Credentials") {
//                 //     // alert('Invalid Credentials')
//                 //     alert('Invalid Credentials')
//                 //     setLoading(false)
//                 // }
//                 console.log("data",data.otp);
//                  if (data.ResponseMsg === "otp Create Successfully!") {
//                     setLoading(false)
//                     alert("OTP Send Successfully!");
//                     navigation.navigate
//                     ('Verifyotp',{
//                         usernumber:number,
//                         userVerificationCode: data.otp
//                     })
//             }
//             else if(data.ResponseMsg === "Otp update Successfully!") {
//                 setLoading(false)
//                 alert("OTP Send Successfully!");
//                 navigation.navigate
//                 ('Verifyotp',{
//                     usernumber:number,
//                     userVerificationCode: data.otp
//                 })
//         }
//           })    
//    }}
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
                {/* <View style={[styles.topview]}>
                    <AntDesign name="left" size={24} color="#ffffff" style={[styles.gohomeicon]}
                        onPress={() => {
                            navigation.navigate('Mainpage')
                        }
                        }
                    />
                    <Text style={[styles.formHead]}>Login</Text>
                </View> */}
                {/* <View style={{ paddingBottom: 100, paddingTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111111', borderRadius: 10, }}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '900' }}>Zylu</Text>
                    <Text style={{ color: 'white', fontSize: 14, top: 4 }}>Login or Signup to book your appointment</Text>
                </View> */}
                <View style={[styles.c1]}>
                    <Image style={[styles.profilepic]} source={require('../../../assets/logo4.png')} />
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:-50,marginBottom:40}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#aaaaaa'}}>Welcome To Ocean Academy</Text>
                </View>
                {/* <View style={[styles.numberview]}>
                    <Text style={{ left: 20, top: 8, bottom: 10 }}>Phone Number</Text>
                    <View style={[styles.searchview]}>
                        <Image style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }} source={require('../../../assets/logo.png')} />
                        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>+91</Text>
                        <TextInput style={[styles.searchbar]} keyboardType = 'numeric' maxLength={10} placeholder="223 665 7896"
                        onChangeText={(text) => {
                            setNumber(text)
                          }} />
                    </View>
                </View> */}
                <TouchableOpacity style={[styles.btn, styles.elevation,{marginBottom:10}]}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: '#1e90ff', fontSize: 20, fontWeight: 'bold' }}>Let's Register</Text>
         </TouchableOpacity>
            <TouchableOpacity style={[styles.btn1, styles.elevation]}
                     onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Login</Text>
         </TouchableOpacity>
                <View style={[styles.suggestionview]}>
                  
                        <Text style={[styles.suggestiontext]}>Facing problem in signing in? </Text>
                        <Text style={{color:'#4DCDC9', fontWeight: 'bold'}}> Call us</Text>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>Terms and Privacy Policy</Text>
                        </View> */}

                    
                </View>
                

          
      
                
            </View>

        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
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
        backgroundColor: '#111111',
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
        marginTop:100,
        //   height:1,
        //   backgroundColor:'gray',
        //   marginVertical:20
    },
    profilepic: {
        width: 300,
        height: 300,
        borderColor: '#ffffff',
        borderWidth: 5,
        backgroundColor: '#111111',
        borderRadius: 10,
        marginTop: 0,
    },
    searchbar: {
        // width: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        // top: -5,
        fontSize: 10,
        // paddingVertical: 10,
        paddingHorizontal: 0,
        // marginTop: 5,
        fontSize: 14,
        // marginLeft:-20,
        alignSelf: 'center',
    },
    searchview: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        // width: '90%',
        // alignSelf: 'center',
        paddingVertical: 10,
        // top: 0,
        // borderColor: 'lightgray',
        // zIndex: 100,
        // borderWidth: 1,
        // backgroundColor: '#ffffff'
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
        borderWidth:2,
        borderColor:"#1e90ff",
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
        paddingVertical: 18,
        backgroundColor: '#4DCDC9'
    },
    elevation: {
        shadowOffset: { width: 10, height: 0 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
    },
});