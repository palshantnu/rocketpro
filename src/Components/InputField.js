import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
//import {Color, Fonts} from '../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color,Fonts } from '../theme';



export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  value,
  editable,
  secure,
  setSecure,
  maxLength
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 10,
        marginTop: 10,
        borderColor: 'lightgray',
        // zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#ddd'
      }}>
      {icon}
      {inputType == 'password' ? (
        <View
          style={{
            flex: 1,
            paddingVertical: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder={label}
            placeholderTextColor="#999"
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            editable={editable}
            value={value}
            style={{
              color: '#111',
              paddingVertical: 0,
              flex: 1,
              marginLeft:5,
              fontWeight:'bold'
            //   fontFamily: Fonts.primaryRegular,
            }}
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
            <MaterialCommunityIcons
              name={secure ? 'eye-off' : 'eye'}
              color={'#3087B4'}
              size={23}
              style={{
                paddingHorizontal: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          placeholder={label}
          editable={editable}
          placeholderTextColor="#e0e0e0"
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          value={value}
          style={{
            flex: 1,
            paddingVertical: 0,
            color: '#111',
            // fontFamily: Fonts.primaryRegular,
            fontSize:19
          }}
        />
      )}
      {/* <TouchableOpacity onPress={fieldButtonFunction}>
        <Text
          style={{
            color: '#111',
            fontWeight: '700',
            // fontFamily: Fonts.primaryBold,
            
          }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}
