import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTab from './BottomTab';
import ForgotPass from '../Screens/Onboarding/ForgotPass';

import SignUp from '../Screens/Onboarding/Signup';
import Login from '../Screens/Onboarding/Login';

import AcService from '../Screens/Service/AcService';
import CpService from '../Screens/Service/CpService';
import FrService from '../Screens/Service/FrService';
import PlService from '../Screens/Service/PlService';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{ headerShown: false }}
        >
            {/* Home is a screen defined in bottom tab but its not mentioned on component to include bottom tab in it */}
            <Stack.Screen
                name="Home"
                component={BottomTab}
            /> 

            <Stack.Screen
                name="Signup"
                component={SignUp}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                
            />

            <Stack.Screen
                name="Forgot"
                component={ForgotPass}
                
            />

<Stack.Screen
                name="AcService"
                component={AcService}
                
            />
            <Stack.Screen
                name="CpService"
                component={CpService}
                
            />
            <Stack.Screen
                name="FrService"
                component={FrService}
                
            />
            <Stack.Screen
                name="PlService"
                component={PlService}
                
            />

           
        </Stack.Navigator>
        
    )
}

export default Routes;