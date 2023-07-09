// this is a copy of previous signup without formik and
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
  ImageBackground
} from 'react-native';
import styles from '../Screens/Onboarding/styles';
import images from '../Images/ImgIndex';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const SignUp = (props) => {

  const [name, setName] = useState('abby')
  const [email, setEmail] = useState('abby@yopmail.com')
  const [password, setPassword] = useState('Test@123')
  const [phone, setPhone] = useState('9787367389')
  const [city, setCity] = useState('Noida')
  const [state, setState] = useState('UP')
  const [zip, setZip] = useState('7001')
  const [address, setAddress] = useState('NOthing here')

  const submit = () => {

  //   let data = JSON.stringify({
  //     name: name,
  //     email: email,
  //     password: password,
  //     phone: phone,
  //     city: city,
  //     state: state,
  //     zip: zip,
  //     address: address,
  //   })
   };

  return (

    <View style={styles.bgContainer}>

      <ImageBackground
        source={images.bgImage} style={styles.bgImg}>
        <Text style={styles.bgTitleL}>
          {'CREATE AN ACCOUNT'}
        </Text>
        <Text style={styles.bgParaL}>
          Tell us a bit about yourself
        </Text>


        <View style={styles.bgloginM}>
          <View style={styles.whiteContainer}>
            <Text style={styles.statictest}>Please provide the following details</Text>
            <TouchableOpacity style={styles.allign}
              // onPress={() => openModal()}
              >
              {/* <Image
                resizeMode={'cover'}
                source={fileImage ? { uri: fileImage } : images.defaultP} style={styles.dpic} /> */}
              <Text style={[styles.bottomP2, { paddingTop: 12 }]}>Add profile photo</Text>
            </TouchableOpacity>
            <TextInput
              placeholder='Enter Your Name'
              style={[styles.inputAll]}
              onChangeText={(text) => setName(text)}
              value={name}
            />
           
            <TextInput
              style={styles.inputAll}
              placeholder='Enter Email ID'
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.inputAll}
              placeholder='Enter Password'
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TextInput
              style={styles.inputAll}
              placeholder='Enter Phone no.'
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
            <TextInput
              style={styles.inputAll}
              placeholder='Enter City Name'
              onChangeText={(text) => setCity(text)}
              value={city}
            />
            <TextInput
              style={styles.inputAll}
              placeholder='Enter State Name'
              onChangeText={(text) => setState(text)}
              value={state}
            />
            <TextInput
              style={styles.inputAll}
              placeholder='Enter Zip Code'
              onChangeText={(text) => setZip(text)}
              value={zip}
            />
            <TextInput
              style={[styles.inputAll, { minHeight: 100, textAlignVertical: 'top' }]}
              placeholder='Enter Full Address here'
              multiline={true}
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
            {/* Submit button here */}
            <TouchableOpacity
              style={styles.btnCont}
              // onPress={submit}
            >
              <Text style={styles.btnLogin}>Sign up</Text>
            </TouchableOpacity>
            {/* Submit button here */}
            <View style={styles.bottomCont}>
              <Text>or sign up with</Text>
              <View style={styles.btnContB}>
                <TouchableOpacity
                // onPress={() => GsignIn()}
                >
                  <Image source={images.handleA} style={[styles.allHandle,]} />
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={() => GsignIn()}
                >
                  <Image source={images.handleG} style={[styles.allHandle]} />
                </TouchableOpacity>

                <TouchableOpacity
                // onPress={() => GsignIn()}
                >
                  <Image source={images.handleF} style={[styles.allHandle]} />
                </TouchableOpacity>
              </View>

            </View >

            {/* social media handle box ends here */}
            < View style={styles.footer} >

              <TouchableWithoutFeedback>
                <Text style={[styles.bottomP]}>Already have an account?</Text>
              </TouchableWithoutFeedback>
              <TouchableOpacity
                // onPress={login}
                >
                <Text style={[styles.bottomP2, { textDecorationLine: 'underline' }]}> Sign In here</Text>
              </TouchableOpacity>

            </View >


            <TouchableOpacity style={{ alignSelf: 'center' }}>
              <Text style={[styles.bottomP2,
              { paddingVertical: 10 }]}>Continue as guest</Text>
            </TouchableOpacity>

          </View >

        </View >
      </ImageBackground >
    </View >
  )
};
export default SignUp;