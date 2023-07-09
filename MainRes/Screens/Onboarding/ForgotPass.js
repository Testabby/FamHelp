import React, { useState } from 'react';
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
  View
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { Formik } from 'formik';
import * as yup from 'yup';

const ForgotPass = ({ navigation }) => {

  const UpdateFb = (val) => {
    firestore()
      .collection('Users')
      .where('phone', '==', val.phone)
      .where('email', '==', val.email)
      .get()
      .then(rep => {
        if (rep.docs.length > 0) {
          console.log("got the docs", rep.docs)
          firestore()
            .collection('Users')
            .update('password', val.password)
            .then(() => { console.log("Password successfuly updated", rep.docs) })
            .catch(error => { console.log("Password not changed", error); })
        } else
          console.log("Account not found", rep.docs, "with inputs: ",val.email,"/",val.phone)
      })
      .catch(error => { console.log("Error on update:", error); })
  }

  return (

    <Formik
      initialValues={{
        email: 'abby2@gmail.com',
        phone: '1234567892',
        password: '12345',
      }}
      onSubmit={values => {
        UpdateFb(values)
        Alert.alert(JSON.stringify(values))
      }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email()
          .required('Please, provide your email'),
        phone: yup
          .string()
          .required('Please, provide your phone')
          .min(10, 'Please enter valid Phone No.')
          .max(12, 'Phone should not excced 12 chars.'),

        password: yup
          .string()
          .min(4, 'Please enter valid Password')
          .max(10, 'Password should not excced 10 chars.')
          .required("Please provide new password"),
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
              }}>Forgot Password</Text>
            <Text
              style={{
                fontSize: 18,
                color: AppColors.BLACK_600,
                paddingHorizontal: 20,
              }}>Enter your details to reset password </Text>
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
              value={values.email}
              placeholder='Enter your Email Id '
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}

              style={{
                fontSize: 16,
                paddingHorizontal: 20,
                backgroundColor: AppColors.GREY_100,
                borderRadius: 12,
                marginBottom: 10,
              }} />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingBottom: 10 }}>{errors.email}</Text>
            }

            <TextInput
              placeholder='Enter your Phone No.'
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              value={values.phone}
              keyboardType={'phone-pad'}

              style={{
                fontSize: 16,
                paddingHorizontal: 20,
                backgroundColor: AppColors.GREY_100,
                borderRadius: 12,
                marginBottom: 10,
              }} />
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
              <Text style={{ fontSize: 12, color: '#FF0D10',paddingBottom: 10  }}>{errors.password}</Text>
            }



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
              onPress={handleSubmit}>
              <Text
               
                style={{
                  fontSize: 16,
                  color: AppColors.WHITE,
                }}> Update Password </Text>


            </TouchableOpacity>


            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                marginBottom: 50,
              }}>

              <Text style={{
                fontSize: 18,
              }}>
                Dont Have an account ?
              </Text>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: AppColors.TEXT_BLACK,
                  }}> Login </Text>
              </TouchableOpacity>
            </View>



          </ScrollView>
        </View>
      )}
    </Formik>
  );
}


export default ForgotPass;