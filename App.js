// In App.js in a new project

import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import My_Userprofile from './src/Screens/Profile/My_Userprofile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Mainnavigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/Redux/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import Settings1 from './src/Screens/Settings/Settings1';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
let {store, persistor} = configureStore();

function App({navigation}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <GestureHandlerRootView  style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#000'} />
            <Mainnavigation />
          </GestureHandlerRootView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
