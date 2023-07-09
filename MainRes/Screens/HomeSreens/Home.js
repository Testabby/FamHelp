import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'

import { myWidth, myHeight } from '../../theme/AppScaling';
import IMAGESC from '../../Assets/images';
import AppColors from '../../theme/AppColors';
import GetLocation from 'react-native-get-location';
import AutocompleteAdd from '../../DummyDb/geoapify';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AcService from '../Service/AcService';
import CpService from '../Service/CpService';
import FrService from '../Service/FrService';
import PlService from '../Service/PlService';


const Home = ({navigation}) => {

  const [UserdataA, setUserdataA] = useState({
    name:"abby",
    email:'Abby1@yopmail.com',
    phone:"11122334455",
    address:"none"
  })

  const [currCords, setcurrCords] = useState({
    //bhopal,mp
    lat: '23.252320', long: '77.431090'
  })
  const [currAddress, setcurrAddress] = useState({
    county: "Bamoli", city: "Delhi"
  })
  // const [locEnabled, setlocEnabled] = useState(true)

  useEffect(() => {
    GetUserData();
    GetUserCord();
  }, [])

  const GetUserData = async() => {
    try {
      const value = await AsyncStorage.getItem("Userdata")
    // return Value != null ? JSON.parse(jsonValue) : null;
      if(value !== null) {
        let data= JSON.parse(value)
        console.log("data found", data.name)
        setUserdataA({
          // ...UserdataA,
          name:data.name,
          address:data.address,
          email:data.email,
          phone:data.phone,
        })
        console.log("data before saved", UserdataA)
        console.log("data found in userdata", data)
      }
      else{
        console.log("Data not found prev user data:", UserdataA)
      }
    } catch(e) {
      console.log("Error on getuser data", e)
    }
  }
  const GetUserCord = async() => {
    try {
      const value = await AsyncStorage.getItem("UserCords")
    // return Value != null ? JSON.parse(jsonValue) : null;
      if(value !== null) {
        let data= JSON.parse(value)
        console.log("Cord data found", data)
        setcurrCords(data)
        console.log("cord data before saved", currCords)
        console.log("cord data found in userdata", data)
        GetAddress(data)
      }
      else{
        console.log("Data not found prev user data:", UserdataA)
      }
    } catch(e) {
      console.log("Error on getuser data", e)
    }
  }
  const saveUserLoc= async(value) =>{ 
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem("UserLoc", jsonValue)
      console.log("saveUserLOc value sent: ",value)
    } catch (e) {
      console.log("Error on SaveUserLOC data", e)
    }
}

  const GetAddress = async (currCords) => {

    try {

      await fetch("https://api.geoapify.com/v1/geocode/reverse?lat="
        + currCords.lat + "&lon=" + currCords.long + "&apiKey=0e919525615c40d3b0ffbcdc309f68c1")

        .then((resp) => resp.json())

        .then((response) => {
          console.log("console from getadd: ", response.features[0].properties)
          // console.log("console from getadd2: ", response.features[0].properties.city)
          // console.log("console from getadd3: ", response.features[0].properties.county)

          setcurrAddress({
            county: response.features[0].properties.county,
            city: response.features[0].properties.city
          })
          saveUserLoc(response.features[0].properties)
        })

        .catch((err) => console.log('err2', err))

    } catch (error) {

      console.log('API not worked', error)

    }

    console.log("input recieved", currCords.lat, currCords.long, "output sent", currAddress.county, currAddress.city)

  }

  const GetCurrentLoc = async () => {

    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 40000,
    })
      .then(location => {
        console.log("from GetCurrentLoc",location);

        setcurrCords({
          lat: location.latitude, long: location.longitude
        })

        GetAddress(currCords)


      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  return (

    <View style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute', backgroundColor: AppColors.COLOR_SECONDARY_APP,
          Top: 0, height: myHeight / 5, width: myWidth,
          alignSelf: 'center',
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        }}
      >
        <View>
          <Text
            style={{
              alignSelf: 'center',
              color: AppColors.WHITE_DIM,
              fontSize: 25,
              fontWeight: "400",
              padding: 15
            }}
          >Family Helper</Text>

          {/*comment below to add/remove search bar */}
          <AutocompleteAdd />

          <TouchableOpacity
          onPress={()=>GetCurrentLoc()}
          style={{
            flexDirection:'row',
            justifyContent: 'center',
            alignSelf: 'center'
            }}>
          <Text
            style={{padding:5,color:AppColors.WHITE , fontSize:18}}>
            {/* latitude = {currCords.lat} and longitude = {currCords.long} */}
            {currAddress.county} , {currAddress.city}
            <Text>  </Text>
            <Image
          source={IMAGESC.refresh}
          style={{
            resizeMode: 'contain',
            height: 30,
            width: 30,
          }}
          />
          </Text>
          
          </TouchableOpacity>
          
                     <Text
            style={{ marginTop: 20,marginLeft:20 , justifyContent: 'center', alignContent: 'center' 
            ,fontSize: 22,fontWeight:'bold'}}>
             Hi {UserdataA.name}
          </Text>

          <Text
            style={{ paddingTop:5,marginLeft:20 ,justifyContent: 'center', alignContent: 'center' 
            ,fontSize: 12,}}>
             Need some Home help?
          </Text>

        </View>
        {/* Body will start here */}
        <View>
          <View
            style={{ margin: 10, justifyContent: 'center', alignContent: 'center' }}
          >

          </View>
          <View>

            {/* <TouchableOpacity
            style={{ justifyContent: 'center', alignSelf: 'center' }}
            onPress={() => GetCurrentLoc()}
          >
            <Text>
              Search bar
            </Text>
          </TouchableOpacity> */}

            <Text
            style={{ marginTop:10,justifyContent: 'center', alignSelf: 'center' 
          ,fontSize:20}}
            >
              Services We offer
            </Text>
            <View
            style={{flexDirection:'row', margin:30,justifyContent: 'space-between', alignSelf:'stretch',backgroundColor:"#FCFAF8", flexWrap:'wrap'}}
            >
            <TouchableOpacity
            style={{ margin:15 }}
            onPress={()=>navigation.navigate(AcService)}
          >
            
              <Image
              source={IMAGESC.Ac}
              style={{
                height:myHeight/5,
                width:myWidth/3,
              }}
              />
             

          </TouchableOpacity>

          <TouchableOpacity
            style={{ margin:15 }}
            onPress={() => navigation.navigate(CpService)}
          >
           
              <Image
              source={IMAGESC.Carp}
              style={{
                height:myHeight/5,
                width:myWidth/3,
              }}
              />
            

          </TouchableOpacity>

          <TouchableOpacity
            style={{margin:15 }}
            onPress={() =>navigation.navigate(FrService)}
          >
            
              <Image
              source={IMAGESC.Furn}
              style={{
                height:myHeight/5,
                width:myWidth/3,
              }}
              />
           
          </TouchableOpacity>

          <TouchableOpacity
            style={{margin:15 }}
            onPress={() =>navigation.navigate(PlService)}
          >
            
              <Image
              source={IMAGESC.Plumb}
              style={{
                height:myHeight/5,
                width:myWidth/3,
              }}
              />
           
          </TouchableOpacity>

          </View>
          </View>
        </View>
      </View>


      {/* Bottom menu starts here */}
      {/* <BottomBar /> */}

    </View>
  )
}

export default Home;

