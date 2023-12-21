import { StyleSheet, Text,TouchableOpacity, View, StatusBar, AsyncStorage, Dimensions, Image, TextInput, ScrollView, BackHandler, Alert, FlatList, Linking, Vibration, ToastAndroid, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react';
import Bottomnavbar from '../../Components/Bottomnavbar';
import Topnavbar from '../../Components/Topnavbar';
// import FollowersRandomPost from '../../Components/FollowersRandomPost';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useSelector } from 'react-redux';
import { log } from 'react-native-reanimated';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const Myteam = ({ navigation,route }) => {
const user = useSelector(state => state.user);
const LoggedIn = useSelector(state => state.isLoggedIn);
const [market, setMarket] = useState([]);
console.log('LoggedIn',LoggedIn);
// console.log('result',result);


    const getmarket = async () =>{
      // setLoading(true)
         try{
           const response = await fetch(
             "https://dpboosshiva.propertyindholera.com/api/marketCatgeory"
           );
           const myData = await response.json();
           // console.log("hgduytgdu",myData.Catlist);
           setMarket(myData.data);
          //  setLoading(false)
         }
         catch(error){
           console.log(error);
         }
   };

  useEffect(() => {
    getmarket();
  },[])
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

  useFocusEffect(
    React.useCallback(() => {
      getmarket();
    }, [])
  );
  const phoneNumber = '8890754903'; // Replace with the recipient's phone number
  const message = 'DEPOSIT REQUEST:'; 
  const whatsappURL = `whatsapp://send?phone=${phoneNumber}&text=${message}`;

const data = [
  {
    Gamename:"Amol morning",
    opentime: "11:00 AM",
    closetime:"01:00 PM",
    bettingstatus:"close",
    resultopenno:"360",
    resultopendigit:"9",
    resultcloseno:"139",
    resultclosedigit:"3"
  },
  {
    Gamename:"sudarshan",
    opentime: "12:15 PM",
    closetime:"02:15 PM",
    bettingstatus:"open",
    resultopenno:"780",
    resultopendigit:"5",
    resultcloseno:"889",
    resultclosedigit:"5"
  },
  {
    Gamename:"Bhola day",
    opentime: "01:15 PM",
    closetime:"03:15 PM",
    bettingstatus:"open",
    resultopenno:"368",
    resultopendigit:"7",
    resultcloseno:"0",
    resultclosedigit:"0"
  },
  {
    Gamename:"Poona day",
    opentime: "03:40 PM",
    closetime:"05:40 PM",
    bettingstatus:"close",
    resultopenno:"128",
    resultopendigit:"1",
    resultcloseno:"0",
    resultclosedigit:"0"
  },
  {
    Gamename:"Kalyan",
    opentime: "04:31 PM",
    closetime:"06:20 PM",
    bettingstatus:"open",
    resultopenno:"0",
    resultopendigit:"0",
    resultcloseno:"0",
    resultclosedigit:"0"
  },
  {
    Gamename:"shalimar",
    opentime: "06:15 PM",
    closetime:"08:15 PM",
    bettingstatus:"open",
    resultopenno:"0",
    resultopendigit:"0",
    resultcloseno:"0",
    resultclosedigit:"0"
  },
]
  return (   
    <View style={[styles.containerFull]}>
      <StatusBar backgroundColor ='#3087B4'/>
      <Topnavbar navigation={navigation}/>
      <ScrollView style={{}} nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <View style={{width:'95%',backgroundColor:'orange',padding:15,marginTop:20,alignSelf:'center'}}>
        <Text style={{fontSize:16,color:'#fff',fontWeight:'bold'}}>{'MY TEAM'}</Text>
        </View>
        <View>
        <View style={[styles.catogoryview]}>
          <LinearGradient colors={['#31BFFA', '#1E8AF9', ]} style={{ width:width*0.4, borderRadius:10, alignItems:'center',marginVertical:4,padding:10,}} >
        <View style={{}}
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
        <Image source={{uri:'https://www.tritium-charging.com/static/home/images/team_1.png'}} style={[styles.cimage]}/>
        <Text style={{fontSize:12 ,marginLeft:0,fontSize:14,color:'#fff',fontWeight:'bold',textAlign:'center'}}>Team Recharge</Text>
        <Text style={{fontSize:12 ,marginLeft:0,fontSize:14,color:'#fff',fontWeight:'bold',textAlign:'center'}}>Rs. 0.00</Text>
        </View>
        </LinearGradient>
        <LinearGradient colors={['#FFBA00', '#FF9001', ]} style={{ width:width*0.4, borderRadius:10, alignItems:'center',marginVertical:4,padding:10,}} >
        <View style={{}}
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
        <Image source={{uri:'https://www.tritium-charging.com/static/home/images/team_2.png'}} style={[styles.cimage]}/>
        <Text style={{fontSize:12 ,marginLeft:0,fontSize:14,color:'#fff',fontWeight:'bold',textAlign:'center'}}>Team Size</Text>
        <Text style={{fontSize:12 ,marginLeft:0,fontSize:14,color:'#fff',fontWeight:'bold',textAlign:'center'}}>0</Text>
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
        </View>
        </View>
        {/* <Text>Countdown to {targetTime2}: {formatTime(remainingTime2)}</Text> */}

        </View>
        

        <FlatList
            nestedScrollEnabled={true}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View style={{width:'95%',alignSelf:'center'}}>
                  {/* <TouchableOpacity style={{alignItems:'center',justifyContent:'space-between'}}
                onPress={()=> navigation.navigate('Resultchart',{game:item})}>
                <Image source={require('../../assets/images/bar.png')} style={[styles.cimage1]}/>
                </TouchableOpacity> */}
                <View style={{alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',backgroundColor:'#fff',padding:0,borderWidth:0.5}}>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:5,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'10%',}}>
                  <FontAwesome6 name="user" size={24} color="#111" style={[styles.icon1]}
                     onPress={() => navigation.navigate('Downloads')}/>
                  </View>
                   <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:5,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'25%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'Team Size'}</Text>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'0'}</Text>
                  </View>
                  <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:5,paddingHorizontal:0,borderRadius:50,backgroundColor:'#fff',width:'35%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'Team Recharge'}</Text>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'0.00'}</Text>
                  </View>
                  <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:7,paddingHorizontal:0,borderRadius:50,backgroundColor:'#3087B4',width:'29%'}}>
                  <Text style={{fontSize:10,color:'#fff',fontWeight:'bold'}}>{'View More'}</Text>
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
                
                </View>
              );
            }}
          />
          <View style={{width:'95%',backgroundColor:'orange',padding:16,marginVertical:20,alignSelf:'center'}}>
        <Text style={{fontSize:16,color:'#fff',fontWeight:'bold'}}>{'ONE TIME INCOME OF DOWNLINE INVESTMENT'}</Text>
        </View>
        <View>
               <View style={{width:'95%',alignSelf:'center'}}>
                <View style={{alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',backgroundColor:'#fff',padding:0,borderWidth:0.5}}>

                   <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#3087B4',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#fff',fontWeight:'bold'}}>{'Level'}</Text>
                  </View>
                  <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#3087B4',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#fff',fontWeight:'bold'}}>{'Income'}</Text>
                  </View>
                  </View>
                </View>
                             
                </View>
                <View style={{width:'95%',alignSelf:'center'}}>
                <View style={{alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',backgroundColor:'#fff',padding:0,borderWidth:0.5}}>

                   <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'1st'}</Text>
                  </View>
                  <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'6%'}</Text>
                  </View>
                  </View>
                </View>
                             
                </View>
                <View style={{width:'95%',alignSelf:'center'}}>
                <View style={{alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',backgroundColor:'#fff',padding:0,borderWidth:0.5}}>

                   <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'2nd'}</Text>
                  </View>
                  <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'4%'}</Text>
                  </View>
                  </View>
                </View>
                             
                </View>
                <View style={{width:'95%',alignSelf:'center'}}>
                <View style={{alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',backgroundColor:'#fff',padding:0,borderWidth:0.5}}>

                   <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'3rd'}</Text>
                  </View>
                  <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'2%'}</Text>
                  </View>
                  </View>
                </View>
                             
                </View>
                <View style={{width:'95%',alignSelf:'center'}}>
                <View style={{alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',backgroundColor:'#fff',padding:0,borderWidth:0.5}}>

                   <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'4th'}</Text>
                  </View>
                  <View style={{ borderLeftWidth: 0.5,borderLeftColor: '#111',height: '100%',}}></View>
                  <View style={{alignItems:'center',justifyContent:'space-evenly',paddingVertical:12,paddingHorizontal:0,borderRadius:0,backgroundColor:'#fff',width:'50%'}}>
                  <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'1%'}</Text>
                  </View>
                  </View>
                </View>
                             
                </View>
        </View>
        <View style={{width:'95%',alignSelf:'center',marginVertical:10}}>
        <Text style={{fontSize:14,color:'#111',fontWeight:'bold'}}>{'Note - One Time Level % Get According To Your Package. take Complete Level Income. Your Package Will Be Equal Or Higher To Your Downline Packages.'}</Text>
        <Text style={{fontSize:14,color:'#111',fontWeight:'bold',marginVertical:10}}>{'Any have Free Package Or Only Registered When Level Income Will Come According To % Of 500.'}</Text>
        </View>
          <View style={{marginBottom:70}}></View>
        </ScrollView>
        <Bottomnavbar page={"Myteam"} navigation={navigation}/>
    </View>
  )
}

export default Myteam
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4

const styles = StyleSheet.create({
    container: {backgroundColor: '#f8f8f8',borderBottomRightRadius:20,borderBottomLeftRadius:20 ,},
    child: { width, justifyContent: 'center',borderRadius:0,marginVertical:10},
    image: { height:160, width:'100%',alignSelf:'center',borderRadius:10,resizeMode:'contain',
    justifyContent: 'center',},
    cimage: { height:45, width:45,marginLeft:0,alignSelf:'center'},
    cimage1: { height:45, width:45,marginLeft:10},
   // 20b2aa
  containerFull:{
      width:'100%',
      height:'100%',
      backgroundColor:'#f8f8f8',
      paddingTop:50,
  },


catogoryview:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginVertical:10,
  borderRadius: 10,
  width:'90%',
  alignSelf: 'center',
  // flexWrap:'wrap',
  paddingVertical:0,
  // top:10,
  borderColor:'lightgray',
  zIndex:100,
  borderWidth:0,
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
icon:{

}
});