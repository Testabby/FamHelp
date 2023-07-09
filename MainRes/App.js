import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Navigation/Routes';
// import BottomTab from './Navigation/BottomTab';

const App = () => {
  return (
    <NavigationContainer>
      
      <Routes/>
      {/* <BottomTab/> */}

    </NavigationContainer>
  )
};

export default App;