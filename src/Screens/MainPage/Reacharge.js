import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import Topnavbar from '../../Components/Topnavbar';
import Bottomnavbar from '../../Components/Bottomnavbar';
import { getData, postData } from '../../API';
import { useSelector } from 'react-redux';

const RechargeScreen = ({navigation}) => {
  const [rechargeAmount, setRechargeAmount] = useState('');
  const user = useSelector(state => state.user);

  console.log('user', user);
  const handleRecharge =async () => {
    // Perform the recharge action here
    if (rechargeAmount == '') {
        ToastAndroid.show('withdrawal Amount', ToastAndroid.SHORT);
      } else {
        const body = {
          user_id: user.user_id,
          amount: rechargeAmount,
        };
        console.log('body', body);
        const response = await postData('rechargeamount', body);
        console.log('response', response);
        // setWithdrawalHistory([newWithdrawal, ...withdrawalHistory]);
        // Clear input field after withdrawal
        ToastAndroid.show(response.message, ToastAndroid.SHORT);
        setRechargeAmount('')
      }
  };
  const [Links, setLinks] = useState();
  const getSocialLinks = async () => {
    const response = await getData('socialmedialink');
    console.log('response', response);
    setLinks(response.data);
  };
  useEffect(() => {
    getSocialLinks();
  }, []);

  return (
    <View style={[styles.containerFull]}>
      <StatusBar backgroundColor="#3087B4" />
      <Topnavbar
        navigation={navigation}
        points={Links ? Links.telegram_channel_link : null}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Recharge Your Wallet</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter recharge amount"
            keyboardType="numeric"
            value={rechargeAmount}
            onChangeText={text => setRechargeAmount(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.rechargeButton}
          onPress={handleRecharge}>
          <Text style={styles.buttonText}>Recharge</Text>
        </TouchableOpacity>
      </View>
      <Bottomnavbar page={'RechargeScreen'} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 18,
  },
  rechargeButton: {
    backgroundColor: '#3087B4',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  containerFull: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
  },
});

export default RechargeScreen;
