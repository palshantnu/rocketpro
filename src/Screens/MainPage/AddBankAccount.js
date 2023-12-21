import React, {useState, useEffect} from 'react';
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
import {useSelector} from 'react-redux';
import {postData} from '../../API';

const AddBankAccountScreen = ({navigation}) => {
  const [newAccountNumber, setNewAccountNumber] = useState('');
  const [newIFSCCode, setNewIFSCCode] = useState('');
  const [newAccountHolderName, setNewAccountHolderName] = useState('');
  const [oldAccountDetails, setOldAccountDetails] = useState();
  const user = useSelector(state => state.user);
  console.log('user', user);
  // Simulated initial old account details (replace with your actual data-fetching logic)

  const handleAddAccount = async () => {
    // Implement logic to add new bank account details
    // For demonstration, just console logging the new details
    console.log('New Account Number:', newAccountNumber);
    console.log('New IFSC Code:', newIFSCCode);
    console.log('New Account Holder Name:', newAccountHolderName);

    // Simulate adding new account to old accounts list
    if (
      newAccountNumber == '' ||
      newIFSCCode == '' ||
      newAccountHolderName == ''
    ) {
      ToastAndroid.show('some fields are empty!', ToastAndroid.SHORT);
    } else {
      const newAccount = {
        user_id: user.user_id,
        accountnumber: newAccountNumber,
        ifsc: newIFSCCode,
        holdername: newAccountHolderName,
      };
      console.log('newAccount', newAccount);
      const response = await postData('addbankaccount', newAccount);
      console.log('response', response);
      if (response.status) {
        ToastAndroid.show(response.message, ToastAndroid.SHORT);
        getOldBankAccount();
      } else {
        ToastAndroid.show(response.message, ToastAndroid.SHORT);
      }

      // setOldAccountDetails([...oldAccountDetails, newAccount]);

      // Clear input fields after adding account
      setNewAccountNumber('');
      setNewIFSCCode('');
      setNewAccountHolderName('');
    }
  };
  const getOldBankAccount = async () => {
    const newAccount = {
      user_id: user.user_id,
    };
    console.log('newAccount', newAccount);
    const response = await postData('addbankaccountget', newAccount);
    console.log('response', response);
    // if (response.status) {
    //   ToastAndroid.show(response.message, ToastAndroid.SHORT);
    // } else {
    //   ToastAndroid.show(response.message, ToastAndroid.SHORT);
    // }
    if (response.data == null) {
    } else {
      setOldAccountDetails(response.data);
    }
  };
  React.useEffect(() => {
    getOldBankAccount();
  }, []);
  console.log('oldAccountDetails', oldAccountDetails);
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
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
            Add Bank Account
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.addAccountContainer}>
            <Text style={styles.title}>Add Bank Account Details</Text>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                placeholder="Account Number"
                value={newAccountNumber}
                onChangeText={text => setNewAccountNumber(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="IFSC Code"
                value={newIFSCCode}
                autoCapitalize="characters"
                keyboardType="visible-password"
                onChangeText={text => setNewIFSCCode(text.toUpperCase())}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Account Holder Name"
                value={newAccountHolderName}
                onChangeText={text => setNewAccountHolderName(text)}
              />
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddAccount()}>
              <Text style={styles.buttonText}>Add Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.oldAccountsContainer}>
            <Text style={styles.title}>Old Bank Account Details</Text>
            <View style={styles.oldAccountItem}>
              <Text
                // multiline={true}
                // numberOfLines={2}
                style={{
                  color: 'grey',
                  fontSize: 17,
                  fontWeight: '700',
                  flexWrap: 'wrap',
                }}>{`Account Number: ${
                oldAccountDetails ? oldAccountDetails.accountnumber : ''
              }`}</Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 17,
                  fontWeight: '700',
                  marginTop: 10,
                }}>{`IFSC Code: ${
                oldAccountDetails ? oldAccountDetails.ifsc : ''
              }`}</Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 17,
                  fontWeight: '700',
                  marginTop: 10,
                }}>{`Account Holder: ${
                oldAccountDetails ? oldAccountDetails.holdername : ''
              }`}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  addAccountContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
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
  addButton: {
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
  oldAccountsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  oldAccountItem: {
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

export default AddBankAccountScreen;
