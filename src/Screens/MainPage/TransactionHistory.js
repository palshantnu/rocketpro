import {
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  BackHandler,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {postData} from '../../API';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TransactionHistory = ({navigation}) => {
  const user = useSelector(state => state.user);
  const LoggedIn = useSelector(state => state.isLoggedIn);

  const [history, setHistory] = useState([]);

  //   console.log('LoggedIn', LoggedIn);
  // console.log('result',result);
  const {width, height} = Dimensions.get('window');

  const getHistory = async () => {
    // setLoading(true)
    const body = {
      user_id: user.user_id,
    };
    const response = await postData('allstatement', body);
    console.log('response', response);
    setHistory(response.data);
  };

  useEffect(() => {
    getHistory();
  }, []);
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
  const paymentHistoryData = [
    {
      id: '1',
      date: 'Dec 25, 2023',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      id: '2',
      date: 'Dec 18, 2023',
      amount: '$30.00',
      status: 'Completed',
    },
    // Add more payment history items as needed...
  ];
  const renderPaymentItem = ({item}) => (
    <View style={styles.paymentItem}>
      <View style={styles.details}>
        <Text style={styles.date}>{item.description}</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.date}>{'Price :  '}</Text>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.date}>{'Remaining Balance :  '}</Text>
          <Text style={styles.amount}>{item.balance}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.date}>{'created_at :  '}</Text>
          <Text style={styles.amount}>{item.created_at}</Text>
        </View>
      </View>
    </View>
  );

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
          Payment History
        </Text>
      </View>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Payment History</Text> */}
        <FlatList
          data={history}
          keyExtractor={item => item.id}
          renderItem={renderPaymentItem}
        />
      </View>
    </ScrollView>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  topview: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#3087B4',
  },
  gohomeicon: {
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    color: '#000',
  },
  icon: {
    marginRight: 10,
    color: '#000',
  },
  iconText: {
    fontSize: 14,
    color: '#000',
  },
  details: {
    flex: 1,
    color: '#000',
  },
  date: {
    fontSize: 15,
    marginBottom: 5,
    color: '#000',
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});
