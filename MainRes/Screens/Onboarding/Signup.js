// this is a copy of previous signup without formik and yup
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Modal,
  ToastAndroid,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './styles';
import images from '../../Images/ImgIndex';
import AppColors from '../../theme/AppColors';
import firestore from '@react-native-firebase/firestore';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { Formik } from 'formik';
import * as yup from 'yup';

import PhoneCall from '../../Components/PhoneCall';
import SocialButton from '../../Components/SocialButton';
import { myHeight, myWidth } from '../../theme/AppScaling';

const SignUp = ({ navigation }) => {


  const submit = (val) => {
    console.log("values from signup",val)
    checkDphone(val);
   };

   checkDphone = (val)=> {
   
  firestore()
  .collection('Users')
  .where("phone",'==',val.phone)
  .get()
  .then(querySnapshot => {
    if( querySnapshot.size > 0){
      console.log('Total users with same phone: ', querySnapshot.size);
    }else{
      checkDmail(val)
    }
    // console.log('Total users: ', querySnapshot);

  });

   }

   checkDmail = (val) => {
    firestore()
    .collection('Users')
    .where("email",'==',val.email)
    .get()
    .then(querySnapshot => {
      if( querySnapshot.size > 0){
        console.log('Total users with same email are: ', querySnapshot.size);
      }else{
        addRecord(val)
      }
    });
   }

   addRecord= (vals)=> {
      console.log( "Addrecords:", vals);
      firestore()
      .collection("Users")
      .add({
          name: vals.name,
          phone: vals.phone,
          email: vals.email,
          password: vals.password,
          address: vals.address,
      })
      .then(() => {
        console.log("record added")
      })
   }
    
   

  const PHONE_NO_REGEX = /^[0-9\- ]{8,14}$/ ;

  return (

    <Formik
      initialValues={{
        name:'abby five',
        phone: '1234567895',
        email:'abby5@gmail.com',
        password: '12345',
        address:'city, state, pincode',
      }}
      onSubmit={values =>submit(values)}

      validationSchema={yup.object().shape({
        name:yup
          .string()
          .required('Please enter your name'),
        phone: yup
          .string()
          .matches(PHONE_NO_REGEX,{message:"not valid phone no",excludeEmptyString:true})
          .required('Please enter Phone'),
        email: yup
          .string()
          .email('Enter valid email id')
          .required('Please enter your email id'),
        password: yup
          .string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required(),
          address:yup
          .string()
      })}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (


    <ScrollView style={styles.bgContainer}>

          <View
           style={{
            backgroundColor: AppColors.COLOR_PRIMARY_APP,
            flex: 1,
          }}
          >
        <Text style={styles.bgTitleL}>
          {'CREATE AN ACCOUNT'}
        </Text>
        <Text style={styles.bgParaL}>
          Tell us a bit about yourself
        </Text>


        <View style={styles.bgloginM}>
          <View style={styles.whiteContainer}>
            <Text style={styles.statictest}>Please provide the following details</Text>
            {/* <TouchableOpacity style={styles.allign}
              onPress={() => openModal()}
              >
               <Image
                resizeMode={'cover'}
                source={fileImage ? { uri: fileImage } : images.defaultP} style={styles.dpic} />
              <Text style={[styles.bottomP2, { paddingTop: 12 }]}>Add profile photo</Text>
            </TouchableOpacity> */}
            <TextInput
              value={values.name}
              style={{
                fontSize: 16,
                paddingHorizontal: 20,
                backgroundColor: AppColors.GREY_100,
                borderRadius: 12,
                marginBottom: 10,
              }}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Enter your Name"
            />
            {touched.name && errors.name &&
              <Text style={{ fontSize: 12, color: '#FF0D10',paddingBottom: 10 }}>{errors.name}</Text>
            }

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
              placeholder="Enter your Phone No."
            />
            {touched.phone && errors.phone &&
              <Text style={{ fontSize: 12, color: '#FF0D10',paddingBottom: 10 }}>{errors.phone}</Text>
            }

            <TextInput
              value={values.email}
              style={{
                fontSize: 16,
                paddingHorizontal: 20,
                backgroundColor: AppColors.GREY_100,
                borderRadius: 12,
                marginBottom: 10,
              }}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="Enter your Email Id"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10',paddingBottom: 10 }}>{errors.email}</Text>
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
              onBlur={() => setFieldTouched('password')}
              placeholder="Enter your Password"
            />
            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingBottom: 10 }}>{errors.password}</Text>
            }
            <TextInput
              value={values.address}
              style={{
                fontSize: 16,
                paddingHorizontal: 20,
                backgroundColor: AppColors.GREY_100,
                borderRadius: 12,
                marginBottom: 10,
              }}
              onChangeText={handleChange('address')}
              placeholder="Enter your Address"
              onBlur={() => setFieldTouched('address')}
            />
            {touched.address && errors.address &&
              <Text style={{ fontSize: 12, color: '#FF0D10',paddingBottom: 10 }}>{errors.address}</Text>
            }
            
            
            {/* Submit button here */}
            <TouchableOpacity
              style={styles.btnCont}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Text style={styles.btnLogin}>Sign up</Text>
            </TouchableOpacity>
            {/* Submit button here */}
           
            < View style={styles.footer} >

              <TouchableWithoutFeedback>
                <Text style={[styles.bottomP]}>Already have an account?</Text>
              </TouchableWithoutFeedback>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                >
                <Text style={[styles.bottomP2, { textDecorationLine: 'underline' }]}> Sign In here</Text>
              </TouchableOpacity>

            </View >


            <PhoneCall/>
            <SocialButton/>

          </View >

        </View >
        </View>
  
    </ScrollView >
    )}
    </Formik>
  )
};
export default SignUp;