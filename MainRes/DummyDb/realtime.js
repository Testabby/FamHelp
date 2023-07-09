import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';

const DBrealtime = () => {

  const [Dbdata, setDbdata] = useState(null)


  const getDatabase = async () => {
    try {
      const data = await database().ref('FamilyHelp/users/1').once("value");

      console.log(data.val());
      setDbdata(data.val());

    } catch (error) {
      console.log("error on fetching database :", error);
    }
  }


  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.Header}>
          To Do App
        </Text>
        <TextInput style={styles.InputBox} placeholder="enter any value"/>
        <TouchableOpacity
        style={styles.InputBox}
        onPress={() => getDatabase()}>
        <Text style={styles.AddButton}>Tap on It</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.InputBox}>
        <Text>
          Name= {Dbdata ? Dbdata.name : "loading..."}
        </Text>
        <Text>
          Age= {Dbdata ? Dbdata.age : "loading.."}
        </Text> 
    
      </View>
      
    </View>
  )
}



const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },

  InputBox: {
    width: width - 20,
    height:200,
    borderRadius: 3,
    marginVertical: 10,
    padding: 10
  },

  AddButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  Header:{
    textAlign:'center',
    // fontSize:'30',
    fontWeight:'bold',
    height:30,
  }



})
export default DBrealtime;