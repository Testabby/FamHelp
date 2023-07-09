import { View, Text , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import styles from '../Screens/Onboarding/styles'
import images from '../Images/ImgIndex'

const SocialButton = () => {
  return (
    <View style={styles.bottomCont}>
              <Text
               style={{padding:10}}
              >or sign up with</Text>
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
  )
}

export default SocialButton