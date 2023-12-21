import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {postData} from '../../API';
import Color from '../../theme/Color';

const ByHistory = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const user = useSelector(state => state.user);
  console.log('user', user);
  const [market, setMarket] = React.useState([]);
  const BookingHistory = async () => {
    const body = {
      user_id: user.user_id,
    };
    const response = await postData('coursehistory', body);
    console.log(response);
    setMarket(response.data);
  };
  React.useEffect(() => {
    BookingHistory();
  }, []);

  return (
    <View style={{backgroundColor: Color.white, height: height * 1}}>
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
          My Order
        </Text>
      </View>
      <ScrollView style={{marginTop: 20}}>
        {market.map(item => {
          return (
            <View>
              <Text
                style={{
                  color: '#000',
                  fontSize: 17,
                  fontWeight: '600',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                Name : {item.coursename}
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 17,
                  fontWeight: '600',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                Price : {item.price}
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 17,
                  fontWeight: '600',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                Date : {new Date(item.create_date).toLocaleString()}
              </Text>
              <View
                style={{
                  borderBottomColor: 'black', // Change the color as needed
                  borderBottomWidth: 1, // Adjust the width of the line
                  marginVertical: 10, // Add margin for spacing
                  marginHorizontal:10
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ByHistory;

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
});
