import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {postData} from '../../API';
import {useSelector} from 'react-redux';

const WithdrawalScreen = ({navigation}) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalHistory, setWithdrawalHistory] = useState([]);
  const user = useSelector(state => state.user);

  console.log('user', user);

  const handleWithdrawal = async () => {
    // Implement logic to handle withdrawal here
    console.log('Withdrawal Amount:', withdrawalAmount);
    // Perform actions like API calls to initiate withdrawal
    // Add withdrawal to history
    if (withdrawalAmount == '') {
      ToastAndroid.show('withdrawal Amount', ToastAndroid.SHORT);
    } else {
      const newWithdrawal = {
        user_id: user.user_id,
        amount: withdrawalAmount,
      };
      console.log('newWithdrawal', newWithdrawal);
      const response = await postData('addwidthdrwalrequest', newWithdrawal);
      console.log('response', response);
      // setWithdrawalHistory([newWithdrawal, ...withdrawalHistory]);
      // Clear input field after withdrawal
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
      setWithdrawalAmount('');
      getWithdrawalStatus();
    }
  };

  const getWithdrawalStatus = async () => {
    const newAccount = {
      user_id: user.user_id,
    };
    console.log('newAccount', newAccount);
    const response = await postData('withdrwal_request_status', newAccount);
    console.log('response', response);
    // if (response.status) {
    //   ToastAndroid.show(response.message, ToastAndroid.SHORT);
    // } else {
    //   ToastAndroid.show(response.message, ToastAndroid.SHORT);
    // }
    setWithdrawalHistory(response.data);
  };
  React.useEffect(() => {
    getWithdrawalStatus();
  }, []);
  return (
    <ScrollView>
      <View style={[styles.topview]}>
        <AntDesign
          name="left"
          size={24}
          color="#fff"
          style={[styles.gohomeicon]}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 0,
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Withdrawal
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.withdrawalContainer}>
          <Text style={styles.title}>Withdrawal</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Withdrawal Amount"
              keyboardType="numeric"
              value={withdrawalAmount}
              onChangeText={text => setWithdrawalAmount(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.withdrawalButton}
            onPress={handleWithdrawal}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.title}>Withdrawal History</Text>

          <FlatList
            data={withdrawalHistory}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.historyItem}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 17,
                    fontWeight: '700',
                    flexWrap: 'wrap',
                  }}>{`Amount: ${item.amount}`}</Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 17,
                    fontWeight: '700',
                    flexWrap: 'wrap',
                  }}>{`Balance: ${item.balance}`}</Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 17,
                    fontWeight: '700',
                    flexWrap: 'wrap',
                  }}>{`Status: ${
                  item.status == 0 ? 'Pendding' : 'Complete'
                }`}</Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 17,
                    fontWeight: '700',
                    flexWrap: 'wrap',
                  }}>{`Date: ${item.create_date}`}</Text>
              </View>
            )}
            contentContainerStyle={{paddingBottom: 20}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  withdrawalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    // marginTop: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  inputContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  withdrawalButton: {
    backgroundColor: '#3087B4',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  historyContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  historyItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  topview: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#3087B4',
    paddingHorizontal: 10,
  },
});

export default WithdrawalScreen;
