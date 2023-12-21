import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

const Splashscreen = ({ navigation}) => {
    const { width,height } = Dimensions.get('window');
    const user = useSelector(state => state.user);
    const LoggedIn = useSelector(state => state.isLoggedIn);
    // const type = useSelector(state => state.type);
    // const type1 = route.params
    console.log('user',user);
    console.log('LoggedIn',LoggedIn);
    // console.log('result',result);
    
  React.useEffect(() => {
 setTimeout(() => {
    LoggedIn?
    navigation.navigate('Mainpage'):
    navigation.navigate('Login')
 }, 3000);
  }, [])
  

  return (
        <View style={[styles.containerFull,{justifyContent:'center',alignItems:'center'}]}>
        <Image style={{width:200,height:120,}} source={require('../../../assets/logo4.png')} />
        <Text style={{color:'#111111',opacity:1,fontSize:18,fontWeight:"bold",marginTop:10}}>New Way of Learning !</Text>
        </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    containerFull:{
        width:'100%',
        height:'100%',
        backgroundColor:'#ffffff',
        paddingVertical:50,
    },
})