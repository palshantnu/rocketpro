import { Alert, BackHandler, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Topnavbar from '../../Components/Topnavbar'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"
import Entypo from 'react-native-vector-icons/Entypo';
import Pdf from 'react-native-pdf';
import InputField from '../../Components/InputField';
import { useSelector } from 'react-redux';
// import Pdf from 'react-native-pdf';


const Setting = ({ navigation }) => {
  const [type, setType] = useState('General');
  const [adata, setAdata] = useState([]);
  const [ebook, setEbook] = useState([]);
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [currentpassword, setCurretPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmnewpassword, setConfirmnewPassword] = useState('');
  const user = useSelector(state => state.user);
  const LoggedIn = useSelector(state => state.isLoggedIn);


console.log('currentpassword',currentpassword);
console.log('newpassword',newpassword);
console.log('confirmnewpassword',confirmnewpassword);




const changepassword = () => {
  // console.log("score",score);
  // console.log("options",options);
  if(newpassword == '' || confirmnewpassword == '' || currentpassword == '')
  {
    Alert.alert("Invalid Cradentials")
  }
  else if(newpassword !== confirmnewpassword)
  {
    Alert.alert("newpassword and confirm password should be same")
  }
  else
  {
  fetch('http://coaching.rootstechnology.in/api/updatepassword', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id:user.id,
        old_password:currentpassword,
        new_password:newpassword,
        new_password_confirmation:confirmnewpassword,
      })
  })
  
      .then(res => res.json()).then(
          data => {
              if (data.status === false) {
                  // alert('Invalid Credentials')
                  alert('Invalid Credentials')
                  // setLoading(false)
              }
              else
              {  if (LoggedIn == true) {
                alert('Passwod Changed Successfully')
                navigation.navigate('Mainpage')
              } else {
                navigation.navigate('Home')
              }
                
              }
              // console.log('body',body);
              // setQuestions(data.data)
              console.log("data.data",data.status);
  //  navigation.navigate('Quizreportcard',{score:score,options:options,paperdata:paperdata.paperdata.id,rdata:data.data})

      //          if (data.message === "user register successfully") {
      //             setLoading(false)
      //             alert("OTP Send Successfully!");
      //             navigation.navigate
      //             ('VerifyOtp',{
      //                 usernumber:number,
      //                 userVerificationCode: data.otp
      //             })
      //     }
      //     else if(data.message === "Mobile Number Already register") {
      //         setLoading(false)
      //         alert("User Already Exist");
      //         // navigation.navigate
      //         // ('Verifyotp',{
      //         //     usernumber:number,
      //         //     userVerificationCode: data.otp
      //         // })
      // }
        })    
 }
}
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
const source = { uri: 'http://coaching.rootstechnology.in/public/dist/img/1679744267.pdf', cache: true };
  return (
    <View style={[styles.container]}>

    {/* <StatusBar/> */}
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#fff" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.goBack()
        }
        }
      />
          <Image source={require('../../../assets/logo3.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/>

    </View>
    <View>
        <Text style={{marginLeft:10,marginTop:-10,fontSize:20,color:'#111',fontWeight:'bold'}}>Settings</Text>
     </View>
    {/* <Topnavbar navigation={navigation}/> */}
    {/* <Bottomnavbar navigation={navigation} page={"Mainpage"}/> */}
    {/* <Image source={require('../../../assets/exampur.png')} style={{width:160,height:45,marginLeft:90,marginTop:20}}/> */}
    <View style={styles.btnContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity
            onPress={() => setType('General')  }
            style={{
              ...styles.btn,
              borderColor: type === 'General' ? '#4DCDC9' : "#f8f8f8",
            }}>
             

            <Text
              style={{
                ...styles.btnText,
                color: type === 'General' ? '#4DCDC9' : '#444',
              }}>
              {('General')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Security') && {General}}
            style={{
              ...styles.btn,
              borderColor: type === 'Security' ? '#4DCDC9' : "#f8f8f8",
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Security' ? '#4DCDC9' : '#111',
              }}>
              {('Security')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Preferences') && {General}}
            style={{
              ...styles.btn,
              borderColor: type === 'Preferences' ? '#4DCDC9' : "#f8f8f8",
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Preferences' ? '#4DCDC9' : '#111',
              }}>
              {('Preferences')}
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>



   { type === 'General' && 
   <View style={{margin:0}}>
    <Text style={{marginLeft:10,marginTop:5,fontSize:14,color:'#111',fontWeight:'bold'}}>Name</Text>
    <View style={[styles.dropdownview1,{marginTop:10}]}>
    <TextInput style={[styles.searchbar]} placeholder={user.name} placeholderTextColor = "#666"
     editable={false} selectTextOnFocus={false} />
    </View>
    <Text style={{marginLeft:10,marginTop:7,fontSize:14,color:'#111',fontWeight:'bold'}}>Phone Number</Text>
    <View style={[styles.dropdownview1,{marginTop:10}]}>
    <TextInput style={[styles.searchbar]} placeholder={user.mobile} placeholderTextColor = "#666"
     editable={false} selectTextOnFocus={false} />
    </View>
    <Text style={{marginLeft:10,marginTop:7,fontSize:14,color:'#111',fontWeight:'bold'}}>UserName</Text>
    <View style={[styles.dropdownview1,{marginTop:10}]}>
    <TextInput style={[styles.searchbar]} placeholder={user.name} placeholderTextColor = "#666"
     editable={false} selectTextOnFocus={false} />
    </View>

    <TouchableOpacity style={[styles.btn1, styles.elevation]}
                     onPress={() => navigation.navigate('Mainpage')}>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Save Profile</Text>
    </TouchableOpacity>
   </View>
  
    }
    { type === 'Security' && 
    <View style={{margin:0}}>
    <Text style={{marginLeft:10,marginVertical:5,fontSize:14,color:'#111',fontWeight:'bold'}}>Current Password</Text>
    <InputField
          label={'Password'}
          value={currentpassword}
          onChangeText={setCurretPassword}
          // icon={
          //   <Ionicons
          //     name="ios-lock-closed-outline"
          //     size={20}
          //     color="#111"
          //     style={{marginRight: 5}}
          //   />
          // }
          secure={!showPass}
          setSecure={setShowPass}
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          //fieldButtonFunction={() => _sheetRef.current.open()}
        />
    <Text style={{marginLeft:10,marginVertical:7,fontSize:14,color:'#111',fontWeight:'bold'}}>New Password</Text>
    <InputField
          label={'Password'}
          value={newpassword}
          onChangeText={setNewPassword}
          // icon={
          //   <Ionicons
          //     name="ios-lock-closed-outline"
          //     size={20}
          //     color="#111"
          //     style={{marginRight: 5}}
          //   />
          // }
          secure={!showPass1}
          setSecure={setShowPass1}
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          //fieldButtonFunction={() => _sheetRef.current.open()}
        />
    <Text style={{marginLeft:10,marginVertical:7,fontSize:14,color:'#111',fontWeight:'bold'}}>Confirm Password</Text>
    <InputField
          label={'Password'}
          value={confirmnewpassword}
          onChangeText={setConfirmnewPassword}
          // icon={
          //   <Ionicons
          //     name="ios-lock-closed-outline"
          //     size={20}
          //     color="#111"
          //     style={{marginRight: 5}}
          //   />
          // }
          secure={!showPass2}
          setSecure={setShowPass2}
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          //fieldButtonFunction={() => _sheetRef.current.open()}
        />
    {/* <View style={[styles.dropdownview1,{marginTop:10}]}> */}
    {/* <InputField
          label={'Password'}
          value={password}
          onChangeText={setPassword}
          // icon={
          //   <Ionicons
          //     name="ios-lock-closed-outline"
          //     size={20}
          //     color="#111"
          //     style={{marginRight: 5}}
          //   />
          // }
          secure={!showPass}
          setSecure={setShowPass}
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          //fieldButtonFunction={() => _sheetRef.current.open()}
        /> */}
    {/* </View> */}
    <TouchableOpacity style={[styles.btn1, styles.elevation]}
                     onPress={() => changepassword()}>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Change Password</Text>
         </TouchableOpacity>
   </View>
   }
   { type === 'Preferences' && 
    <View style={{margin:0}}>
    <Text style={{marginLeft:10,marginVertical:5,fontSize:20,color:'#111',fontWeight:'bold'}}>Language Preferences</Text>
    <TouchableOpacity style={[styles.dropdownview2,{marginTop:10}]}>
      <Text style={{color:'#4DCDC9',fontWeight:'bold',marginLeft:10,fontSize:16}}>Select language</Text>
      <AntDesign name="arrowdown" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }}
      />
    </TouchableOpacity>


    {/* <TouchableOpacity style={[styles.btn1, styles.elevation]}
                     onPress={() => navigation.navigate('Mainpage')}>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Change Password</Text>
         </TouchableOpacity> */}
   </View>
   }
 
    
  </View>
  )}

export default Setting
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4
const styles = StyleSheet.create({
    image: { height:210, width:'100%'},
    cimage: { height:90, width:140,marginLeft:5,borderRadius:7,marginVertical:5},
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
      },
    containerFull:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f8f8f8',
        paddingVertical:50,
    },
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        marginVertical:5
      },
      dropdownview: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        elevation:5,
        // alignItems: 'center',
        marginVertical: 15,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        // paddingVertical: 14,
        marginTop: 10,
        borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#fff'
      },
      btn: {
        // borderColor: '#99B83C',
        borderBottomWidth: 2,
        // borderRadius: 10,
        marginLeft: 10,
        marginRight: 30,
        justifyContent: 'center',
        // backgroundColor: '#444444',
        alignItems: 'center',
        height: 45,
        // width: 15,
      },
      btnText: {
        fontSize: 14,
        fontWeight: 'bold',
        
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
        marginTop:40
    },
    logo1:{
        height:70,
        resizeMode:'contain',
        marginBottom:20,
        backgroundColor:'black',
    },
    dropdownview2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'center',
      // marginLeft: 17,
      borderRadius: 10,
      width: '95%',
      alignSelf: 'center',
      paddingVertical: 27,
      marginTop: 10,
      borderColor: 'lightgray',
      // zIndex: 100,
      borderWidth: 0,
      elevation:0.5,
      backgroundColor: '#fff'
    },
      dropdownview1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // marginLeft: 17,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        // paddingVertical: 14,
        marginTop: 10,
        borderColor: 'lightgray',
        // zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#ddd'
      },
      searchbar: {
        width: '100%',
        backgroundColor: 'f8f8f8',
        borderRadius: 10,
        // top:-5,
        fontSize:10,
        // paddingBottom:150,
        flex:1,
        paddingHorizontal: 15,
        // marginTop: 10,
        fontSize: 16,
        alignSelf: 'center',
        fontWeight:"bold",
        color:"#111",
        width:"90%"
    },
      pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
      icon1:{
        color:'#111',
        fontSize:20,
        marginRight:5,
        marginLeft:265
    },
    hr80:{
        width:'80%',
        height:1,
        backgroundColor:'gray',
        marginVertical:20
    },
    formHead:{
        fontSize:30,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
     },
     formInput:{
         width:'80%',
         backgroundColor:'white',
         borderRadius:10,
         marginVertical:10,
         paddingHorizontal:15,
         paddingVertical:10,
         fontSize:18
     },
     cardStyle1: {
        width: CARD_WIDTH,
        // height: CARD_HEIGHT,
        // alignItems:'flex-start',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginHorizontal: 15,
        marginBottom:25,
        borderRadius: 10
      },
      elevation: {  
        shadowOffset: {width: -2, height: 7},  
        shadowColor: '#fafafa',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
        elevation: 2,     
      },
     formTextLinkRight:{
        color:'grey',
        fontSize:15,
        textAlign:'right',
        width:'80%',
        marginVertical:10,
    },
    hr80:{
        width:'80%',
        height:1,
        backgroundColor:'gray',
        marginVertical:20
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    gohomeicon: {
        marginRight: 15
      },
    formbtn:{
        width:'80%',
        backgroundColor:'black',
        borderRadius:10,
        borderColor:'white',
        borderWidth:1,
        color:'white',
        textAlign:'center',
        marginVertical:10,
        paddingVertical:10,
        fontSize:25
    },
    formTextLinkCenter:{
        color:'grey',
        fontSize:16,
    },
    topview: {
      flexDirection: 'row',
      paddingVertical: 5,
      alignItems:'center',
      backgroundColor:'#4DCDC9'
    },
    formHead2:{
      fontSize:20,
      color:'white',
      textAlign:'center',
      fontWeight:'bold'
  },
    goback:{
        flexDirection:'row',
        position:'absolute',
        top:50,
        left:20,
        alignItems:'center'
    },
    c1:{
       width:'100%',
       height:'100%',
       alignItems:'center',
    },
    Notificationbar:{
      width:'95%',
      height:50,
      backgroundColor:'#dddddd',
      marginTop: 10,
    }
  });