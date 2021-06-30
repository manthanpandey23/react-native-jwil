import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from  "react-native-splash-screen";

//Screens
import ActivityScreen from '../screens/Activity';
import ComSelectionScreen from '../screens/ComSelection';
import LoginScreen from '../screens/Login';
import DashboardScreen from '../screens/Dashboard';
import ApprovalScreen from '../screens/Approval';
import APIScreen from '../screens/API';
import PostApprovalScreen from '../screens/PostApproval';

//Constants
import {loginStyle, comSelectionStyle, DashboardStyle, ActivityStyle, ApprovalStyle, APIStyle, PostApprovalStyle} from '../constants/Style';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={() => (loginStyle)}   
            />
        <Stack.Screen 
            name="ComSelection"                  
            component={ComSelectionScreen}
            options={() => (comSelectionStyle)}                  
        />
        <Stack.Screen 
            name="Dashboard"                  
            component={DashboardScreen}
            options={() => (DashboardStyle)}                  
        />
        <Stack.Screen 
            name="Activity"                  
            component={ActivityScreen}
            options={() => (ActivityStyle)}                  
        />
         <Stack.Screen 
            name="Approval"                  
            component={ApprovalScreen}
            options={(item) => (ApprovalStyle)}                  
        />
         <Stack.Screen 
            name="API"                  
            component={APIScreen}
            options={() => (APIStyle)}                  
        />
        <Stack.Screen 
            name="PostApprove"                  
            component={PostApprovalScreen}
            options={() => (PostApprovalStyle)}                  
        />
        </Stack.Navigator>
      </NavigationContainer>   
  );
}

export default MainStackNavigator;