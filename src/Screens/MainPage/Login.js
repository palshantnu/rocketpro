import React, {useState, useEffect} from 'react';
// import all the components we are going to use
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Alert,
  ToastAndroid,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {CommonActions, useFocusEffect} from '@react-navigation/native';
import {postData} from '../../API';

const Login = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  // const dispatch = useDispatch();

  const [showNewPass, setShowNewPass] = React.useState(true);
  const [number, setNumber] = React.useState();
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const submit = async () => {
    if (number === '') {
      ToastAndroid.show('Please Enter Number!', ToastAndroid.SHORT);
    } 
     else {
      var body = {
        phone: parseInt(number),
      };
      console.log('body', body);
      const response = await postData('login_otp', body);

      console.log('response', response);
      if (response.status == 1) {
        ToastAndroid.show(response.message, ToastAndroid.SHORT);
        // dispatch({
        //   type: 'SET_USER',
        //   payload: response.data,
        // });
        // navigation.dispatch(
        //   CommonActions.reset({
        //     index: 1,
        //     routes: [{name: 'Mainpage'}],
        //   }),
        // );
        navigation.navigate('VerifyOtp',number)
      } else {
        ToastAndroid.show('something went wrong', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          // backgroundColor: '#ffff',
          justifyContent: 'center',
          // height: height * 1,
          flex: 1,
        }}>
        <View style={{padding: 20, justifyContent: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Image
              style={{
                width: 200,
                height: 200,
                borderRadius: 10,
                alignSelf: 'center',
                margin: 20,
              }}
              source={require('../../assets/images/ganeshji.jpeg')}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                padding: 10,
                color: '#000',
                fontWeight: 'bold',
                // fontFamily: 'Poppins-SemiBold',
              }}>
              Login
            </Text>
          </View>

          <TextInput
            underlineColor={'transparent'}
            left={<TextInput.Icon icon="email" />}
            autoFocus
            maxLength={10}
            outlineColor={'#ffff'}
            onChangeText={e => setNumber(e)}
            placeholder="Mobile"
            mode="outlined"
            style={styles.txtinput}
          />
          {/* <View>
            <TextInput
              style={{...styles.txtinput, marginTop: 10}}
              mode="outlined"
              secureTextEntry={showNewPass}
              outlineColor={'#ffff'}
              right={
                <TextInput.Icon
                  icon={showNewPass ? 'eye-off' : 'eye'}
                  onPress={() => setShowNewPass(prev => !prev)}
                />
              }
              left={<TextInput.Icon icon="lock" />}
              // value={password}
              autoFocus
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder={'Password'}

              // label="Password"
            />
          </View> */}
          <TouchableOpacity
            style={{
              marginTop: 30,
              backgroundColor: '#3087B4',
              padding: 15,
              width: '100%',
              alignSelf: 'center',
              borderRadius: 5,
              elevation: 9,
            }}
            onPress={() => submit()}>
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 30,
              backgroundColor: '#fffff',
              padding: 15,
              width: '100%',
              alignSelf: 'center',
              borderRadius: 5,
              borderWidth: 2,
              borderColor: '#3087B4',
            }}>
            <Text
              style={{
                color: '#000',
                alignSelf: 'center',
                fontSize: 15,
                fontWeight: '500',
              }}>
              New to the app?{' '}
              <Text
                style={{color: '#3087B4'}}
                onPress={() => navigation.navigate('Signup')}>
                Register
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  txtinput: {
    borderWidth: 0,
    borderRadius: 5,
  },
});
