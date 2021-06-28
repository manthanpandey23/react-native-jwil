import React, {useEffect} from 'react';
import SplashScreen from  "react-native-splash-screen";
import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {  
   useEffect(() => {
      SplashScreen.hide();
   }, [])

   return <MainStackNavigator />;;   
}

export default App;