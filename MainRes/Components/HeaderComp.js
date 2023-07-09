import { View, Text } from 'react-native'
import React from 'react'
import styles from '../Screens/Onboarding/styles'

const HeaderComp = ({Title,SubTitle}) => {
  return (
    <View style={styles.greenHeader}>
    <View>
      <Text
        style={styles.logoText}
      >{Title}</Text>

      <Text
        style={styles.subLogoText}
      >{SubTitle}</Text>
    </View>
  </View>
  )
}

export default HeaderComp