import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';


const DBfirstore = () => {

  const [Mydata, setMydata] = useState(null)
  
  
  const getDatabase = async()=>{
    try {
      const data = await firestore()
      .collection('testing')
      .doc("GAFWdSekpeClBDSfbfO8")
      .get();
      
      setMydata(data._data);

      // .then(() => {
      //   console.log('data fetched');
      // });
    } catch (error) {
      console.log("error on fetching firestore database :",error);
    }
  }

  return (
    <View>
      <Text>Splash</Text>
      <TouchableOpacity
      onPress={()=>getDatabase()}>
        <Text>Tap on It</Text>
        </TouchableOpacity>
        <View>
          <Text>
            Name= {Mydata ? Mydata.Name: "loading..."}
          </Text>
          <Text>
            Number= {Mydata ? Mydata.Number: "loading.."}
          </Text>
          <Text>
            Hobby = {Mydata ? Mydata.Hobby.map(list=> `  ${list},`): "loading.."}
          </Text>
        </View>
    </View>
  )
}

export default DBfirstore;