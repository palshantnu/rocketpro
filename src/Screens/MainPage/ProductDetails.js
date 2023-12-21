import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Color from '../../theme/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {postData} from '../../API';
import {useSelector} from 'react-redux';

const ProductDetails = ({navigation, route}) => {
  const item = route.params;
  console.log('item', item);
  const {width, height} = Dimensions.get('window');
  const user = useSelector(state => state.user);
  console.log('user', user);

  const BuyCourse = async () => {
    const body = {
      user_id: user.user_id,
      course_id: item.id,
      reffrence_id:user.refference_id
    };
    console.log(body);
    const response = await postData('buycourse', body);
    console.log(response);
    if (response.message == 'buy course successfully') {
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
      navigation.goBack();
    } else {
      ToastAndroid.show(response.message, ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{height: height * 1, flex: 1, backgroundColor: '#fff'}}>
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
          Product Details
        </Text>
        {/* <Image source={require('../../../assets/logo3.png')} style={{width:160,height:45,marginLeft:80,marginTop:0}}/> */}
      </View>
      <ScrollView style={{marginBottom: height * 0.1}}>
        <View
          style={{
            alignSelf: 'center',
            paddingVertical: 25,
          }}>
          <Image
            style={{width: width * 0.4, height: height * 0.2}}
            source={{
              uri: item.images,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: Color.black,
              fontWeight: 'bold',
              padding: 10,
              fontSize: 18,
            }}>
            {item.coursename}-{item.price}
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
            {'Rental Amount :'}
          </Text>
          <Text style={{color: '#3087B4', fontSize: 15, fontWeight: '600'}}>
            {item.price} rs
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
            {'Profit Cycle :'}
          </Text>
          <Text style={{color: '#3087B4', fontSize: 15, fontWeight: '600'}}>
            {item.days} Days
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
            {'Daily Profit :'}
          </Text>
          <Text style={{color: '#3087B4', fontSize: 15, fontWeight: '600'}}>
            {item.daily_self_income} rs
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
            {'Total Profit'}
          </Text>
          <Text style={{color: '#3087B4', fontSize: 15, fontWeight: '600'}}>
            {parseInt(item.daily_self_income) * parseInt(item.days)} rs
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'justify',
              color: '#000',
              lineHeight: 25,
              paddingHorizontal: 10,
            }}>
            {item.description}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View
          style={{marginTop: 10, width: width * 0.4, justifyContent: 'center'}}>
          <Text
            style={{
              color: '#3087B4',
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            ₹ {item.price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => BuyCourse()}
          style={{
            margin: 10,
            backgroundColor: '#3087B4',
            padding: 10,
            width: width * 0.4,
            // alignSelf: 'flex-end',
            borderRadius: 5,
            elevation: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: '500',
            }}>
            BUY NOW
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

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
