import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AcService from './AcService'
import AppColors from '../../theme/AppColors'
import { myHeight, myWidth } from '../../theme/AppScaling'
import styles from '../Onboarding/styles'
import HeaderComp from '../../Components/HeaderComp'
import IMAGESC from '../../Assets/images'

const ServiceHome = ({ navigation }) => {


  return (
    <View style={styles.bgContainer}>
      <View style={{height:myHeight/6}}>
        <HeaderComp
          Title={'Family Helper'}
          SubTitle={'All Services'}
        />
      </View>


      {/*  */}
          <ScrollView
          persistentScrollbar={true}
          style={{marginBottom:20}}>
          <View
        style={styles.serviceboxCont}>

        <TouchableOpacity
          style={[styles.servicebox,{flexDirection:'row', backgroundColor:'#FCFAF8'}]}
          onPress={()=>navigation.navigate('AcService')}>
            <Image
              source={IMAGESC.Ac}
              style={{
                height:myHeight/6,
                width:myWidth/3,
                resizeMode:'contain',
                position:'relative',
                left:0,
              }}
              />
          <Text>
            
            Ac Service
          </Text>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.servicebox,{flexDirection:'row', backgroundColor:'#FCFAF8'}]}
          onPress={()=>navigation.navigate('PlService')}>
            <Image
              source={IMAGESC.Plumb}
              style={{
                height:myHeight/6,
                width:myWidth/3,
                resizeMode:'contain'
              }}
              />
          <Text>
          Plumbing
        </Text>
        </TouchableOpacity>


        

        <TouchableOpacity
          style={[styles.servicebox, {flexDirection:'row', backgroundColor:'#FCFAF8'}]}
          onPress={()=>navigation.navigate('CpService')}>
            <Image
              source={IMAGESC.Carp}
              style={{
                height:myHeight/6,
                width:myWidth/3,
                resizeMode:'contain'
              }}
              />
          <Text>
          Carpentar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.servicebox, {flexDirection:'row', backgroundColor:'#FCFAF8'}]}
          onPress={()=>navigation.navigate('FrService')}>
            <Image
              source={IMAGESC.Furn}
              style={{
                height:myHeight/6,
                width:myWidth/3,
                resizeMode:'contain'
              }}
              />
          <Text>
          Furniture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.servicebox, {flexDirection:'row', backgroundColor:'#FCFAF8'}]}
          onPress={()=>navigation.navigate('FrService')}>
            <Image
              source={IMAGESC.Mech}
              style={{
                height:myHeight/6,
                width:myWidth/3,
                resizeMode:'contain'
              }}
              />
          <Text>
          Mechanic
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.servicebox, {flexDirection:'row', backgroundColor:'#FCFAF8'}]}
          onPress={()=>navigation.navigate('FrService')}>
            <Image
              source={IMAGESC.Rep}
              style={{
                height:myHeight/6,
                width:myWidth/3,
                resizeMode:'contain'
              }}
              />
          <Text>
          Repair
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.servicebox, {flexDirection:'row', backgroundColor:'#FCFAF8'}]}
          onPress={()=>navigation.navigate('FrService')}>
            <Image
              source={IMAGESC.Light}
              style={{
                height:myHeight/6,
                width:myWidth/3,
                resizeMode:'contain'
              }}
              />
          <Text>
          Electrician
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.servicebox, {flexDirection:'row', backgroundColor:'#FCFAF8'}]}
          onPress={()=>navigation.navigate('FrService')}>
            <Image
              source={IMAGESC.Paint}
              style={{
                height:myHeight/6,
                width:myWidth/3,
                resizeMode:'contain'
              }}
              />
          <Text>
          Painter
          </Text>
        </TouchableOpacity>

        </View>
        </ScrollView>


    </View>
  )
}

export default ServiceHome