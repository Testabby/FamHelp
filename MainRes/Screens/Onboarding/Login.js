
import React, { useState, useEffect } from 'react';
import AppColors from '../../theme/AppColors';
import AppTypography from '../../theme/AppTypography';
import { myHeight, myWidth } from '../../theme/AppScaling';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import GetLocation from 'react-native-get-location';

import { Formik } from 'formik';
import * as yup from 'yup';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SocialButton from '../../Components/SocialButton';
import PhoneCall from '../../Components/PhoneCall';


const Dlogin = ({ navigation }) => {

  useEffect(() => {
    GetCurrentLoc();
  }, [])
  
  const GetCurrentLoc = async () => {

    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 40000,
    })
      .then(location => {
        console.log("from GetCurrentLoc on login",location);

        setcurrCords({
          lat: location.latitude, long: location.longitude
        })

      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }
  const [currCords, setcurrCords] = useState({
    //bhopal,mp
    lat: '23.252320', long: '77.431090'
  })

  const saveUserData= async(value) =>{ 
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem("Userdata", jsonValue)
        console.log("saveUserData value sent :",value)
      } catch (e) {
        console.log("Error on Saveuser data", e)
      }
  }
  const saveUserCord= async(value) =>{ 
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem("UserCords", jsonValue)
      console.log("saveUserCord value sent: ",value)
    } catch (e) {
      console.log("Error on Saveuser data", e)
    }
}

  const checkEmail = (val) => {
    firestore()
      .collection('Users')
      .where('email', '==', val.phone)
      .get()
      .then(snap => {
        if (snap.docs.length > 0) {
          console.log("email found: ", snap.docs[0]._data)
          checkPass(snap, val.password)
        } else {
          { console.log("Account not found", err); }
        }

      })
      .catch(err => { console.log("email not found", err); }
      );
  }

  const checkPhone = (val) => {
    firestore()
      .collection('Users')
      .where('phone', '==', val.phone)
      .get()
      .then(snap => {
        if (snap.docs.length > 0) {
          console.log("Phone found: ", snap.docs[0]._data)
          checkPass(snap, val.password)
        } else {
          checkEmail(val)
        }

      })
      .catch(err => { console.log("phone not found", err); }
      );
  }

  const checkPass = (resp, pass) => {
    if (resp.docs.length > 0) {
      console.log("User found :", resp.docs[0]._data.password)
      if (resp.docs[0]._data.password == pass) {
        console.log("password matched",resp.docs[0]._data)
        saveUserData(resp.docs[0]._data)
        saveUserCord(currCords)
        navigation.navigate('Home')

      } else (
        console.log("Wrong password")
      )
    } else (
      console.log("Account not found")
    )
  }

  const login = (val) => {
    checkPhone(val)
  }

  return (
    <Formik
      initialValues={{
        phone: '1234567891',
        password: '12345'
      }}
      onSubmit={values => {
        login(values)
        // Alert.alert(JSON.stringify(values))
      }}
      validationSchema={yup.object().shape({
        phone: yup
          .string()
          .required('Please, provide your phone or email'),
        // email: yup
        //   .string()
        //   .email()
        //   .required(),
        password: yup
          .string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required(),
      })}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (

        <View
          style={{
            backgroundColor: AppColors.COLOR_PRIMARY_APP,
            flex: 1,
          }}>
          <View
            style={{
              height: myHeight / 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: AppTypography.ICON_30,
                fontWeight: 'bold',
                padding: 20,

                fontFamily: AppTypography.FONT_REGULAR,
                color: AppColors.BLACK_800
              }}>Welcome Back</Text>
            <Text
              style={{
                fontSize: 18,
                color: AppColors.BLACK_600,
                paddingHorizontal: 20,
              }}>Enter your credentials to login </Text>
          </View>

          <ScrollView
            style={{
              backgroundColor: AppColors.WHITE,
              flex: 1,
              borderRadius: 50,
              padding: 25,

            }}
          >
            <TextInput
              value={values.phone}
              style={{
                fontSize: 16,
                paddingHorizontal: 20,
                backgroundColor: AppColors.GREY_100,
                borderRadius: 12,
                marginBottom: 10,
              }}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              placeholder="Enter your Phone No./ Email Id"
            />
            {touched.phone && errors.phone &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingBottom: 10 }}>{errors.phone}</Text>
            }
            <TextInput
              value={values.password}
              style={{
                fontSize: 16,
                paddingHorizontal: 20,
                backgroundColor: AppColors.GREY_100,
                borderRadius: 12,
                marginBottom: 10,
              }}
              onChangeText={handleChange('password')}
              placeholder="Enter your Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10',paddingBottom: 10 }}>{errors.password}</Text>
            }

            <View
              style={{

                alignItems: 'flex-end',
                padding: 10,
                // backgroundColor:'red'
              }}>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate('Forgot')}
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: AppColors.TEXT_BLACK,
                  }}> Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                alignItems: 'center',
                padding: 10,
                fontSize: 16,
                backgroundColor: AppColors.GREEN_PASSWORD_TEXT,
                borderRadius: 12,
                marginBottom: 20,
              }}
              
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: AppColors.WHITE,
                }}> Login </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                marginBottom: 20,
              }}>

              <Text style={{
                fontSize: 18,
              }}>
                Dont Have an account ?
              </Text>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate('Signup')}
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: AppColors.TEXT_BLACK,
                  }}> Signup </Text>
              </TouchableOpacity>
              
            </View>

                  <SocialButton/>
            

            <PhoneCall/>

          </ScrollView>
        </View>
      )}
    </Formik>
  );

}

export default Dlogin