
import React, { useState } from 'react';
import AppColors from '../theme/AppColors';
import AppTypography from '../theme/AppTypography';
import { myHeight, myWidth } from '../theme/AppScaling';
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


const Dlogin = ({navigation}) => {

  const [email, setemail] = useState("abby@yopmail.com");
  const [password, setpassword] = useState("12345");
  const [userId, setuserId] = useState();
  
  const [loginData, setloginData] = useState(null);

  const checkEmail = () => {
    firestore()
    .collection('Users')
    .where('email','==',email )
    .get()
    .then(snap => { 
      if(snap.docs.length>0){
        console.log("email found: " ,snap.docs[0]._data)
      checkPass(snap)
    }else{
      checkPhone()
    }
      
    })
    .catch(err =>
       {console.log("email not found", err);}
        );
  }

  const checkPhone = () => {
    firestore()
    .collection('Users')
    .where('phone','==',email )
    .get()
    .then(snap => { 
      if(snap.docs.length>0){
        console.log("Phone found: ",snap.docs[0]._data)
        checkPass(snap)
      }else{
        {console.log("Account not found", err);}
      }
      
    })
    .catch(err =>
       {console.log("phone not found", err);}
        );
  }

  const checkPass = (resp) => {
    if(resp.docs.length > 0){
      console.log("User found :",resp.docs[0]._data.password)
      if(resp.docs[0]._data.password == password){
        console.log("password matched")
        setloginData(resp.docs[0]._data)
        navigation.navigate('Home')
       
      }else(
        console.log("Wrong password")
      )
    } else(
      console.log("Account not found")
    )
  }

  const login = () =>{
    checkEmail()
    } 

  return (
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
          placeholder='Enter your Email Id / Phone No.'
          onChangeText={(e) => setemail(e)}
          value={email}
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            backgroundColor: AppColors.GREY_100,
            borderRadius: 12,
            marginBottom: 10,
          }} />


          <TextInput
          placeholder='Enter your Password'
          onChangeText={(e) => setpassword(e)}
          value={password}
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            backgroundColor: AppColors.GREY_100,
            borderRadius: 12,
          }} />
        
        <View
          style={{
            
            alignItems:'flex-end',
            padding: 10,
            // backgroundColor:'red'
          }}>
        <TouchableOpacity>
          <Text
          onPress={()=>navigation.navigate('Forgot')}
            style={{
              fontSize: 16,
              fontWeight:'bold',
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
          }}>
          <Text
          onPress={() => login()}
            style={{
              fontSize: 16,
              color: AppColors.WHITE,
            }}> Login </Text>


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
          onPress={()=>navigation.navigate('Signup')}
            style={{
              fontSize: 18,
              fontWeight:'bold',
              color: AppColors.TEXT_BLACK,
            }}> Signup </Text>
        </TouchableOpacity>
        </View>



      </ScrollView>
    </View>
  )
}

export default Dlogin

const styles = StyleSheet.create({})