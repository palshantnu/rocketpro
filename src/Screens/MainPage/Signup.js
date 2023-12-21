import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {postData} from '../../API';
const {height} = Dimensions.get('window');

const Signup = ({navigation}) => {
  const [showNewPass, setShowNewPass] = React.useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referral, setReferral] = useState(null);
  const [number, setNumber] = useState('');

  const postDataSignUp = async () => {
    if (name === '') {
      alert('name is req');
    } else if (email === '') {
      alert('email is req');
    } else if (!email.includes('@')) {
      alert('email is not valid');
    } else if (password === '') {
      alert('password is req');
    } else if (number === '') {
      alert('number is req');
    } else {
      var body = {
        name: name,
        email: email,
        password: password,
        reffrence_id: referral,
        mobile: number,
      };
      console.log('body', body);
      const response = await postData('signup', body);

      console.log('response', response);
      if (response.message == 'User registered successfully') {
        navigation.navigate('Login');
        ToastAndroid.show('User registered successfully', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(response.message, ToastAndroid.SHORT);
      }
    }
  };
  return (
    <ScrollView style={{backgroundColor: '#ffff', height: height * 1}}>
      <View style={{padding: 20, marginTop: '20%'}}>
        <View>
          <Text
            style={{
              fontSize: 30,
              padding: 0,
              color: '#3087B4',
              fontWeight: 'bold',
              // fontFamily: Fonts.primarySemiBold,
            }}>
            Join Us !
          </Text>
          <Text
            style={{
              color: '#3087B4',
              // fontFamily: Fonts.primarySemiBold,
              fontWeight: '800',
            }}>
            open a free account now
          </Text>
        </View>

        <View>
          <View style={{marginTop: 20}}>
            <TextInput
              underlineColor={'transparent'}
              left={
                <TextInput.Icon
                  icon={() => <Icon name={'user-circle'} size={20} />}
                />
              }
              autoFocus
              outlineColor={'grey'}
              onChangeText={setName}
              placeholder="Name"
              mode="outlined"
              style={styles.txtinput}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextInput
              underlineColor={'transparent'}
              left={
                <TextInput.Icon
                  icon={() => <Icon name={'envelope-o'} size={20} />}
                />
              }
              autoFocus
              outlineColor={'grey'}
              onChangeText={setEmail}
              placeholder="Email"
              mode="outlined"
              style={styles.txtinput}
            />
          </View>
          <View style={{marginTop: 20}}>
            <TextInput
              underlineColor={'transparent'}
              left={
                <TextInput.Icon
                  icon={() => <Icon name={'phone'} size={20} />}
                />
              }
              autoFocus
              outlineColor={'grey'}
              onChangeText={setNumber}
              placeholder="Number"
              mode="outlined"
              keyboardType="decimal-pad"
              style={styles.txtinput}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextInput
              style={styles.txtinput}
              mode="outlined"
              secureTextEntry={showNewPass}
              outlineColor={'grey'}
              right={
                <TextInput.Icon
                  icon={showNewPass ? 'eye-off' : 'eye'}
                  onPress={() => setShowNewPass(prev => !prev)}
                />
              }
              left={<TextInput.Icon icon="lock" />}
              value={password}
              autoFocus
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder={'Password'}

              // label="Password"
            />
          </View>
          <View style={{marginTop: 20}}>
            <TextInput
              underlineColor={'transparent'}
              left={
                <TextInput.Icon
                  icon={() => <Icon name={'envelope-o'} size={20} />}
                />
              }
              autoFocus
              outlineColor={'grey'}
              onChangeText={setReferral}
              placeholder="Referral Code"
              mode="outlined"
              // keyboardType="decimal-pad"
              style={styles.txtinput}
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
              // fontFamily: Fonts.primarySemiBold,
              fontWeight: '500',
            }}
            onPress={() => postDataSignUp()}>
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Register
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
              Already registered ?{' '}
              <Text
                style={{color: '#3087B4'}}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 30,
  },

  btn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    margin: 5,
    borderColor: '#9932cc',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    lineHeight: 16 * 1.4,
  },
  txtinput: {
    // borderWidth: 0.5,
    borderRadius: 5,
  },
});
