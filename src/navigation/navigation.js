// In App.js in a new project

import * as React from 'react';
import {View, Text, Settings} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notificationpage from '../Screens/MainPage/Notificationpage';
import Profile from '../Screens/MainPage/Profile';
import Login from '../Screens/MainPage/Login';
import Signup from '../Screens/MainPage/Signup';
import VerifyOtp from '../Screens/MainPage/VerifyOtp';
import {useSelector} from 'react-redux';
import Myteam from '../Screens/MainPage/Myteam';
import Income from '../Screens/MainPage/Income';
import Mainpage from '../Screens/MainPage/Mainpage';
import ProductDetails from '../Screens/MainPage/ProductDetails';
import ByHistory from '../Screens/MainPage/ByHistory';
import TransactionHistory from '../Screens/MainPage/TransactionHistory';
import RechargeScreen from '../Screens/MainPage/Reacharge';
import AddBankAccountScreen from '../Screens/MainPage/AddBankAccount';
import WithdrawalScreen from '../Screens/MainPage/Withdrawel';
import RechargeRecordScreen from '../Screens/MainPage/RechargeRecord';

const Stack = createNativeStackNavigator();


function Mainnavigation({navigation}) {
  const user = useSelector(state => state.user);
  const LoggedIn = useSelector(state => state.isLoggedIn);
  // const type = useSelector(state => state.type);
  // const type1 = route.params
  console.log('user', user);
  console.log('LoggedIn', LoggedIn);
  // console.log('result',result);

  return (
    <Stack.Navigator
      initialRouteName={LoggedIn?'Mainpage':"Login"}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
    

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animation: 'slide_from_left',
        }}
      />

      <Stack.Screen
        name="Notificationpage"
        component={Notificationpage}
        options={{
          animation: 'slide_from_left',
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          animation: 'slide_from_left',
        }}
      />

      {/* <Stack.Screen name="Login" component={Login}
                options={{
                    animation: 'slide_from_left'
                }}
            /> */}
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        options={{
          animation: 'slide_from_left',
        }}
      />

      <Stack.Screen
        name="Myteam"
        component={Myteam}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="Income"
        component={Income}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="Mainpage"
        component={Mainpage}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="ByHistory"
        component={ByHistory}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="RechargeScreen"
        component={RechargeScreen}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="AddBankAccountScreen"
        component={AddBankAccountScreen}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="WithdrawalScreen"
        component={WithdrawalScreen}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="RechargeRecordScreen"
        component={RechargeRecordScreen}
        options={{
          animation: 'slide_from_left',
        }}
      />
    </Stack.Navigator>
  );
}

export default Mainnavigation;
