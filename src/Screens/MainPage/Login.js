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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const submit = async () => {
    if (email === '') {
      Alert.alert('email is req');
    } else if (!email.includes('@')) {
      Alert.alert('email is not valid');
    } else if (password === '') {
      Alert.alert('password is req');
    } else {
      var body = {
        email: email,
        password: password,
      };
      console.log('body', body);
      const response = await postData('login', body);

      console.log('response', response);
      if (response.message == 'Login Successfully') {
        ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
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
            outlineColor={'#ffff'}
            onChangeText={e => setEmail(e)}
            placeholder="Email ID"
            mode="outlined"
            style={styles.txtinput}
          />
          <View>
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
          </View>
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
