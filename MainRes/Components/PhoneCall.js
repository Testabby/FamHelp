import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'

import call from 'react-native-phone-call';
import styles from '../Screens/Onboarding/styles';

const PhoneCall = () => {

    const [Helpline, setHelpline] = useState('7999048686')

  const triggerCall = () => {
    const args = {
      number: Helpline, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
      skipCanOpen: true // Skip the canOpenURL check
    }
    
    call(args).catch(console.error)

    console.log("entered in trigger call", args)
  }

  return (
    <View>
     <TouchableOpacity style={{ alignSelf: 'center' }}
            onPress={() => triggerCall()}>
              <Text style={[styles.bottomP2,
              { paddingVertical: 15, fontWeight:'800', fontSize:20 }]}>Call For Service</Text>
            </TouchableOpacity>
    </View>
  )
}

export default PhoneCall
