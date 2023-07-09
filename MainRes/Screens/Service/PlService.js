import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppColors from '../../theme/AppColors'
import { myHeight, myWidth } from '../../theme/AppScaling'
import HeaderComp from '../../Components/HeaderComp'
import styles from '../Onboarding/styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import IMAGESC from '../../Assets/images/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfirmPopup from '../../Components/ConfirmPopup'
import firestore from '@react-native-firebase/firestore';

const PlService = () => {

  useEffect(() => {
    GetUserData();
    GetUserLoc();
    
  }, [])

  const GetUserData = async () => {
    try {
      const value = await AsyncStorage.getItem("Userdata")
      // return Value != null ? JSON.parse(jsonValue) : null;
      if (value !== null) {
        let data = JSON.parse(value)
        console.log("data found", data)
        setUserdataB({
          name: data.name,
          address: data.address,
          email: data.email,
          phone: data.phone,
        })
        // console.log("data before saved", UserdataA)
        console.log("data found in userdata", data)
      }
      else {
        console.log("Data not found prev user data:", UserdataA)
      }
    } catch (e) {
      console.log("Error on getuser data", e)
    }
  }
  const GetUserLoc = async () => {
    try {
      const value = await AsyncStorage.getItem("UserLoc")
      // return Value != null ? JSON.parse(jsonValue) : null;
      if (value !== null) {
        let data = JSON.parse(value)
        console.log("Loc data found", data.city)
        setNewAdd({
          addLine1: data.address_line1,
          addLine2: data.address_line2,
          county: data.county,
          address: data.place_id,
        })
        // console.log("Loc data before saved", newAdd)
        console.log("Loc data found in userdata", data)
      }
      else {
        console.log("Data not found prev user data:", newAdd)
      }
    } catch (e) {
      console.log("Error on getuser data", e)
    }
  }
  // const saveUserLoc2 = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value)
  //     await AsyncStorage.setItem("UserLoc2", jsonValue)
  //     console.log("saveUserLOc value sent: ", value)
  //   } catch (e) {
  //     console.log("Error on SaveUserLOC data", e)
  //   }
  // }

  const [UserdataB, setUserdataB] = useState({
    name: "abbyTest",
    email: 'AbbyTest@yopmail.com',
    phone: "11122334455",
    address: "Test Address"
  })

  // const ChangeAdd = () => {
  //   console.log("Address will be changed from firebase", newAdd)
  //   // saveUserLoc(newAdd)
  // }

  const jdSelected = (jd) => {
    switch (jd) {
      case '1': setJobDetail("PL Install")
        break;
      case '2': setJobDetail("PL Repair")
        break;
      case '3': setJobDetail("Repair")
        break;
      case '4': setJobDetail("Remove")
        break;

      default: console.log("none selected")
        break;
    }
  }

  const [jobDetail, setJobDetail] = useState("");
  const [newAdd, setNewAdd] = useState({
    addLine1: "Test",
    addLine2: 'Test',
    county: "Test",
    address: "none"
  });

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    refreshVal(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true);
  };

  const showTimepicker = () => {
    showMode('time');
    setShow(true);
  };

  const [orderVal, setOrderVal] = useState({
    userName:UserdataB.name,
    orderId: Date.now(),
    jobDetail: jobDetail,
    dateOrd: date,
    phoneOrd: UserdataB.phone,
    gpsAdd: newAdd,
    newAdd: UserdataB.address,
  })

  const refreshVal = (currDate) => {
   
    setOrderVal({
      ...orderVal,
      orderId: Date.now(),
    jobDetail: jobDetail,
    dateOrd: currDate,
    phoneOrd: UserdataB.phone,
    gpsAdd: newAdd,
    newAdd: UserdataB.address,
    })
    console.log("refresh val called ",orderVal)
  }

 

  const placeOrder = () => {
    refreshVal(date)
    console.log("order value after change", orderVal)
    // send this order value to firebase
   
      firestore()
      .collection('Orders')
      .add({
        userName:UserdataB.name,
        orderId: Date.now(),
        jobDetail: jobDetail,
        dateOrd: date,
        phoneOrd: UserdataB.phone,
        gpsAdd: newAdd,
        newAdd: UserdataB.address,
    })
    .then(() => {
      console.log("Order record added")
    })
  }

  return (

    <ScrollView
      style={styles.bgContainer}>
      <View
        style={{ height: myHeight / 6 }}>

        <HeaderComp
          Title={'Plumbing Services'}
          SubTitle={'Booking details'} />
      </View>

      <View
        style={{ height: myHeight / 11, flexWrap: 'wrap', justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10 }}>

        <Text
          style={{ width: myWidth, paddingStart: 5, fontWeight: '800', fontSize: 16 }}>
          Job Details:
        </Text>

        <TouchableOpacity
          style={styles.Inservicebox}
          onPress={() => jdSelected('1')}>
          <Text>
            Installation
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.Inservicebox}
          onPress={() => jdSelected('2')}>
          <Text>
            Repair
          </Text>
        </TouchableOpacity>


        {/* <TouchableOpacity
          style={styles.Inservicebox}
          onPress={()=>jdSelected('3')}>
          <Text>
            Repair
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Inservicebox}
          onPress={() =>jdSelected('4')}>
          <Text>
            Removal
          </Text>
        </TouchableOpacity> */}
      </View>

      <View
        style={{
          flex: 1 / 8,
          // backgroundColor: 'white',
        }}>
        <Text
          style={{ width: myWidth, paddingStart: 5, fontWeight: '800', fontSize: 16, paddingVertical: 10 }}>
          Schedule :
        </Text>
        <View
          style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}
        >


          <TouchableOpacity
            style={{ width: myWidth / 2.2, borderColor: 'grey', borderWidth: 2, borderRadius: 10, justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: 5, backgroundColor: 'white', }}
            // activeOpacity={0.5}
            onPress={showDatepicker}
          ><Text>{date.toLocaleDateString()}    <Image
            style={{
              width: 25,
              height: 25
            }}
            source={IMAGESC.calendar}
          />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: myWidth / 2.2, borderColor: 'grey', borderWidth: 2, borderRadius: 10,
              justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: 5, backgroundColor: 'white',
            }}
            onPress={showTimepicker}
          ><Text>{date.toLocaleTimeString().slice(0, -6)} {date.toLocaleTimeString().slice(-3)}   <Image
            style={{ resizeMode: 'contain' }}
            source={IMAGESC.clock}

          /></Text>

          </TouchableOpacity>


          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>

      </View>

      <View
        style={{
          flex: 1 / 4.5,
          // backgroundColor: 'white',
        }}>
        <Text
          style={{ width: myWidth, paddingStart: 5, fontWeight: '800', fontSize: 16, paddingVertical: 10 }}>
          Estimated Charges :

        </Text>

        <Text
          style={{ width: myWidth, padding: 5, fontSize: 16 }}>
          Visiting charges (Paid on arrival):  200
        </Text>
        <Text
          style={{ width: myWidth, padding: 5, fontSize: 16 }}>
          Service charges(Include all taxes):  50
        </Text>
        <Text
          style={{ width: myWidth, padding: 5, fontSize: 16 }}>
          * Total Charges can be estimated on arrival only
        </Text>
        <View
          style={{
            height: myHeight / 15, flexWrap: 'wrap', justifyContent: 'space-evenly', flexDirection: 'row',
            // backgroundColor:'red', 
          }}>

          <TouchableOpacity
            style={styles.Inservicebox}
            onPress={() => ConfirmOrder()}>
            <Text
              style={{ color: 'black' }}>
              Pay Now (-10%)
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.Inservicebox}
            onPress={() => ConfirmOrder()}>
            <Text
              style={{ color: 'black' }}>
              Pay After Service
            </Text>

          </TouchableOpacity>


        </View>

      </View>

      <View
        style={{
          flex: 1 / 5,
          //  backgroundColor:'green'
        }}>
        <Text
          style={{ width: myWidth, paddingStart: 5, fontWeight: '800', fontSize: 16, paddingVertical: 10 }}>
          Confirm Phone No:  <Image
            style={{ resizeMode: 'contain' }}
            source={IMAGESC.clock}
          />
          {/* on tap of clock the phone will autofill with current location */}
        </Text>
        <View
          style={{
            width: myWidth * 0.95, height: myHeight / 20, alignSelf: 'center', alignItems: 'center',
            borderRadius: 30, backgroundColor: 'white', flexDirection: 'row', paddingLeft: 20
          }}>
          <Text
          //  style={{
          //   textAlignVertical:'center',
          //    backgroundColor:'red'}}
          >+91 -</Text>
          <TextInput
            //  style={{Confirm Address: 
            //   textAlignVertical:'center',
            //   backgroundColor:'blue'}}
            placeholder={UserdataB.phone}
            onChangeText={text => setUserdataB(
              {
                ...UserdataB,
                phone: data.phone
              }
            )}>
          </TextInput>

        </View>
        <Text
          style={{ width: myWidth, paddingStart: 5, fontWeight: '800', fontSize: 16, paddingVertical: 10 }}>
          Confirm Address:  <Image
            style={{ resizeMode: 'contain' }}
            source={IMAGESC.clock}
          />
          {/* on tap of clock the address will autofill with current location */}
        </Text>
        <TextInput
          style={{
            backgroundColor: "white",
            marginHorizontal: 10,
            paddingLeft: 20,
            borderRadius: 10,
            height: myHeight / 8
          }}
          placeholder={`${newAdd.county}, ${newAdd.addLine1}, ${newAdd.addLine2}`}
          multiline={true}
          onChangeText={text => setUserdataB(
            {
              ...UserdataB,
              address: data.address
            })}
        // value={newAdd}
        />


      </View>


      <ConfirmPopup
        title={'Confirm Order'}
        Close={'Close'}
        opt1={"Confirm"}
        opt2={"Please Confirm the order and we will call you soon for details"}
        onPress={placeOrder}
        onRefresh={refreshVal}
      />

    </ScrollView>
  )
}

export default PlService

