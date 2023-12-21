import { BackHandler, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';


const Addupi = ({ navigation, route }) => {
  const LoggedIn = useSelector(state => state.isLoggedIn);
  const user = useSelector(state => state.user);
  const {type,upidata} = route.params
  const [matching, setMatching] = useState(false);
  const desiredId = type; // ID of the object you want to find

  const desiredObject = upidata.find(item => item.name === desiredId);
  
  if (desiredObject) {
    console.log('Found:', desiredObject);
    // setMatching(true);
    // console.log('setMatching:', matching);

  } else {
    console.log('Object not found',desiredObject);
    // setMatching(false);
  }
  const [upinumber, setupinumber] = React.useState(
    desiredObject == undefined ? '':
    type == desiredObject.name?desiredObject.upinumber:''
    );
  console.log('type', type);
  console.log('upinumber', upinumber);
  console.log('upiuser', user);
  console.log('upidata', upidata);

 

//   const desiredName = 3; // Name of the object you want to find

// const matchingObjects = upidata.filter(item => item.id === desiredName);

// if (matchingObjects.length > 0) {
//   console.log('Found11111:', matchingObjects);
// } else {
//   console.log('No matching objects found');
// }


  // const id = route.params
  // console.log('id',id.id);


  const Addupi = () => {
    if (upinumber == '') {
      alert('Please enter a number')
    }
    else {
      fetch('https://dpboosshiva.propertyindholera.com/api/addupi', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: user.users_id,
          upinumber: upinumber,
          name: type,
        })
      })
        .then(res => res.json()).then(
          data => {
            console.log("data", data);
            if (data.message === "Add Upinumber successfully") {
              ToastAndroid.show("UPI Added Successfully", ToastAndroid.SHORT)
              navigation.navigate('Withdrawfunds')
            //     setLoading(false)
            }
            // setGamerates(data.data)
            // alert("OTP for your number is",data.otp)
            // console.log("gamerates",gamerates);
          })
    }


  };
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
      Gametype: "Single Digit",
      rate: "10-95"
    },
    {
      Gametype: "Jodi Digit",
      rate: "10-900"
    },
    {
      Gametype: "Sigle Pana",
      rate: "10-1400"
    },
    {
      Gametype: "Double Pana",
      rate: "10-2800"
    },
    {
      Gametype: "Triple Pana",
      rate: "10-7000"
    },
    {
      Gametype: "Half Sangam",
      rate: "10-10000"
    },
    {
      Gametype: "Full Sangam",
      rate: "10-100000"
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
        <Text style={{ marginLeft: 30, marginTop: 0, fontSize: 18, color: '#fff', fontWeight: 'bold' }}>UPI Detaiils</Text>
        {/* <Image source={require('../../../assets/logo3.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/> */}

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upiview}>
          
          <View style={{width:"80%",alignSelf:'center',paddingVertical:27}}>
          <Text style={{marginLeft: 0, fontSize: 13, color: '#111', fontWeight: 'bold'}}>Mobile Number</Text>
          <TextInput style={[styles.searchbar,]} maxLength={10} multiline = {false} placeholder="Open Digit" placeholderTextColor = "#666"
    onChangeText={(text) => setupinumber(text)}  value={upinumber}
    keyboardType='numeric' />
    <TouchableOpacity style={[styles.dropdownview]}
            onPress={() => Addupi()}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginLeft: 0, fontSize: 17, color: '#fff', fontWeight: '500' }}>{'Submit'}</Text>
            </View>
          </TouchableOpacity>
    
          </View>
        </View>
        {/* <TouchableOpacity style={[styles.btn1, styles.elevation]}
                    // onPress={() => { checked ?  handleSignup() : alert('You need to accept Terms and Privacy Policy') }}
                    onPress={() => { addpoints() }}>
                    <Text style={styles.btnText}>Submit</Text>
         </TouchableOpacity> */}
        {/* {
        
        data?.map((item) => {
          // console.log('subcatid',item.id)
        return(
          
          <TouchableOpacity style={[styles.dropdownview]}
          onPress={() => navigation.navigate('Studymaterials3',{id:item.id})}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{marginLeft:20,fontSize:15,color:'#fff',fontWeight:'bold'}}>{item.Gametype}</Text>
          <Text style={{marginRight:10,fontSize:15,color:'#fff',fontWeight:'bold'}}>{item.rate}</Text>
          </View>
      </TouchableOpacity>
       )}
        )}  */}
      </ScrollView>


    </View>
  )
}

export default Addupi
const { width, height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4
const styles = StyleSheet.create({
  image: { height: 210, width: '100%' },
  cimage: { height: 90, width: 140, marginLeft: 5, borderRadius: 7, marginVertical: 5 },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
  containerFull: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
    paddingVertical: 50,
  },
  upiview: { 
    flexDirection: 'row',
    alignSelf:'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    borderWidth: 1,
    width: '90%' ,
    borderColor:'#3087B4'
      },
      searchbar: {
        borderRadius: 0,
        // flex:1,
        width:'100%',
        paddingHorizontal: 0,
        fontSize: 18,
        marginLeft:0,
        // color:"#111",
        height:40,
        borderBottomWidth:2,
        marginVertical:10,
        borderBottomColor:'#3087B4'
    },
      btn1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    backgroundColor: '#3087B4',
    marginTop: 50
  },
  btnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',

  },
  logo1: {
    height: 70,
    resizeMode: 'contain',
    marginBottom: 20,
    backgroundColor: 'black',
  },
  dropdownview: {
    marginVertical: 0,
    borderRadius: 4,
    // width: '26%',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    borderColor: 'lightgray',
    zIndex: 100,
    borderWidth: 0,
    backgroundColor: '#3087B4',
    alignSelf:'flex-end',


  },

  elevation: {
    shadowOffset: { width: -2, height: 7 },
    shadowColor: '#fafafa',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  topview: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#3087B4'
  },
  gohomeicon: {
    marginLeft: 10
  },
  goback: {
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    left: 20,
    alignItems: 'center'
  },
});