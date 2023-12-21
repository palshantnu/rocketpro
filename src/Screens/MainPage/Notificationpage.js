import { BackHandler, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Topnavbar from '../../Components/Topnavbar'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"
import Entypo from 'react-native-vector-icons/Entypo';


const Notificationpage = ({ navigation,route }) => {
//   const [type, setType] = useState(data?.data[1]?.category_name);
  // const [subcatdata, setSubcatdata] = useState([]);
  const [notificationdata, setNotificationdata] = useState([]);

  // const id = route.params
  console.log('notificationdata',notificationdata);


const getNotificationdata = async () =>{
     try{
        const response = await fetch(
          `https://dpboosshiva.propertyindholera.com/api/notificationlist`
        );
        const myData = await response.json();

        // console.log("hgduytgdu",myData);
        setNotificationdata(myData.data);
        //  setLoading(false)
      }
      catch(error){
        console.log(error);
      }
    // getCourseData();
   }
 
 useEffect(() => {
  getNotificationdata();
},[])
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
  //  console.log('childcatdata',childcatdata);
  const data = [
    {
      Gametype:"Single Digit",
      rate:"10-95"
    },
    {
      Gametype:"Jodi Digit",
      rate:"10-900"
    },
    {
      Gametype:"Sigle Pana",
      rate:"10-1400"
    },
    {
      Gametype:"Double Pana",
      rate:"10-2800"
    },
    {
      Gametype:"Triple Pana",
      rate:"10-7000"
    },
    {
      Gametype:"Half Sangam",
      rate:"10-10000"
    },
    {
      Gametype:"Full Sangam",
      rate:"10-100000"
    },
  ]
  return (
    <View style={[styles.container]}>

    {/* <StatusBar/> */}
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#fff" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Text style={{marginLeft:30,marginTop:0,fontSize:18,color:'#fff',fontWeight:'bold'}}>Notice</Text>
          {/* <Image source={require('../../../assets/logo3.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/> */}
    </View>
   
   <ScrollView showsVerticalScrollIndicator = {false}>
     {      
        notificationdata?.map((item) => { 
          //  console.log('subcatid',item.id)
         return(
            <TouchableOpacity styl e={[styles.dropdownview]}
                onPress={() => navigation.navigate('Studymaterials3',{id:item.id})}>
                <View style={{justifyContent:'space-between'}}>
                 <Text style={{marginLeft:20,fontSize:18,color:'#fff',fontWeight:'bold'}}>{item.text}</Text>
                 <Text style={{marginTop:10,marginRight:10,fontSize:12,color:'#fff',fontWeight:'bold',alignSelf:'flex-end'}}>{item.datetime}</Text>
                </View>
            </TouchableOpacity>
          )}
        )} 
     

</ScrollView>

    
  </View>
  )}

export default Notificationpage
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
    logo1:{
        height:70,
        resizeMode:'contain',
        marginBottom:20,
        backgroundColor:'black',
    },
    dropdownview: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        elevation:5,
        // alignItems: 'center',
        marginVertical: 0,
        borderRadius: 10,
        width: '97%',
        alignSelf: 'center',
        paddingVertical: 15,
        marginTop: 10,
        borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#3087B4'
      },
      dropdownview1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // marginLeft: 17,
        borderRadius: 10,
        // width: '90%',
      //   alignSelf: 'center',
        paddingVertical: 14,
        marginTop: 10,
        // borderColor: 'lightgray',
        // zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#fff'
      },
      icon1:{
        color:'#111',
        fontSize:14,
        // marginRight:5,
        marginRight:20
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
        marginLeft: 10
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
      paddingVertical: 12,
      alignItems:'center',
      backgroundColor:'#3087B4'
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