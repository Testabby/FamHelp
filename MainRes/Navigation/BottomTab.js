import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/HomeSreens/Home';
import Search from '../Screens/Search/Search';
import ServiceHome from '../Screens/Service/ServiceHome';
import Chathome from '../Screens/Chat/Chathome';
import Profile from '../Screens/MyAccount/Profile';

import IMAGESC from '../Assets/images';
import AppColors from '../theme/AppColors';


const Tab = createBottomTabNavigator();

export default function BottomTab() {

    return(
      <Tab.Navigator
       initialRouteName='Home'
      screenOptions={{ 
        headerShown: false, 
        tabBarShowLabel:false,
        tabBarStyle:{
          // flex: 1,
          // position:'absolute',
           backgroundColor:AppColors.COLOR_SECONDARY_APP
        },
      }}
      >
{/* Here in component screen name is send whereas on routes bottomtab is send as component with name "home" */}
       <Tab.Screen name="Home" component={Home}
        options={{
            tabBarIcon: ({})=> {
              return(
              <Image
              source={IMAGESC.home} style= {{height:30, width:30, }}
              />
              )
            }
        }}
        />

        <Tab.Screen name="Search" component={Search} 
         options={{
          tabBarIcon: ({})=> {
            return(
            <Image
            source={IMAGESC.search} style= {{height:30, width:30,}}
            />
            )
          }
      }}
      />

         <Tab.Screen name="Service" component={ServiceHome}
         options={{
          tabBarIcon: ({})=> {
            return(
            <Image
            source={IMAGESC.addw} style= {{height:50, width:50, }}
            />
            )
          }
      }}
       />

  <Tab.Screen name="Chat" component={Chathome}
         options={{
          tabBarIcon: ({})=> {
            return(
            <Image
            source={IMAGESC.chat} style= {{height:30, width:30}}
            />
            )
          }
      }} 
      />

  <Tab.Screen name="Setting" component={Profile}
         options={{
          tabBarIcon: ({})=> {
            return(
            <Image
            source={IMAGESC.setting} style= {{height:45, width:45, }}
            />
            )
          }
      }} 
       />

       </Tab.Navigator>
    )

}


