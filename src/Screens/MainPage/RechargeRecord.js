import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { postData } from '../../API';

const RechargeRecordScreen = ({navigation}) => {
  const [rechargeHistory, setRechargeHistory] = useState([]);

  // Example data for recharge history (replace with actual data fetching logic)
  useEffect(() => {
    // Simulating fetching recharge history data
    const fakeRechargeData = [
      {id: '1', amount: 100, date: '2023-12-01'},
      {id: '2', amount: 200, date: '2023-11-25'},
      {id: '3', amount: 150, date: '2023-11-20'},
      // Add more recharge records as needed
    ];
    setRechargeHistory(fakeRechargeData);
  }, []);
  const user = useSelector(state => state.user);

  console.log('user', user);
  const getWithdrawalStatus = async () => {
    const newAccount = {
      user_id: user.user_id,
    };
    console.log('newAccount', newAccount);
    const response = await postData('rechargeamountget', newAccount);
    console.log('response xjks', response);
    // if (response.status) {
    //   ToastAndroid.show(response.message, ToastAndroid.SHORT);
    // } else {
    //   ToastAndroid.show(response.message, ToastAndroid.SHORT);
    // }
    setRechargeHistory(response.data);
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
         Reacharge Records
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Recharge History</Text>
        <FlatList
          data={rechargeHistory}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.rechargeItem}>
              <Text style={styles.amountText}>Amount: ₹{item.amount}</Text>
              <Text style={styles.dateText}>Date: {item.create_date}</Text>
              <Text style={styles.dateText}>Balance: {item.balance}</Text>
            </View>
          )}
          contentContainerStyle={{paddingBottom: 20}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  rechargeItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  dateText: {
    fontSize: 16,
    color: '#888',
  },
  topview: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#3087B4',
    paddingHorizontal: 10,
  },
});

export default RechargeRecordScreen;
