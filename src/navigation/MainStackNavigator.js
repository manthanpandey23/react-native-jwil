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
import BidPlanScreen from '../screens/Bid_plan';
import MomScreen from '../screens/Mom';
import NotificationScreen from '../screens/Notification';
import MessageScreen from '../screens/Message';
import ABPScreen from '../screens/ABP';
import BidPlanActScreen from '../screens/BidPlanAct';
import TenderBasicScreen from '../screens/TenderBasic';
import LeadScreen from '../screens/Lead';

//Constants
import { HeaderStyle } from '../constants/Style';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={() => (HeaderStyle("Login"))}   
                />
            <Stack.Screen 
                name="ComSelection"              
                component={ComSelectionScreen}
                options={() => (HeaderStyle("Company Selection"))}                  
            />
            <Stack.Screen 
                name="Dashboard"              
                component={DashboardScreen}
                options={() => (HeaderStyle("Dashboard"))}                  
            />
            <Stack.Screen 
                name="Activity"                  
                component={ActivityScreen}
                options={() => (HeaderStyle("Activity"))}                  
            />
            <Stack.Screen 
                name="Approval"                  
                component={ApprovalScreen}
                options={(item) => (HeaderStyle("Approval"))}                  
            />
             <Stack.Screen 
                name="BID_PLAN"                  
                component={BidPlanScreen}
                options={() => (HeaderStyle("BID Plan Activity"))}                  
            />
             <Stack.Screen 
                name="MOM"                  
                component={MomScreen}
                options={() => (HeaderStyle("MOM Activity"))}                  
            />
            <Stack.Screen 
                name="Notification"                  
                component={NotificationScreen}
                options={() => (HeaderStyle("Notification"))}                  
            />
            <Stack.Screen 
                name="Message"                  
                component={MessageScreen}
                options={() => (HeaderStyle("Messages"))}                  
            />
            <Stack.Screen 
                name="ABP"                  
                component={ABPScreen}
                options={() => (HeaderStyle("Annual Business Plan"))}                  
            />
            <Stack.Screen 
                name="BidPlanAct"                  
                component={BidPlanActScreen}
                options={() => (HeaderStyle("Bid Plan Activity"))}                  
            />
             <Stack.Screen 
                name="TenderBasic"                  
                component={TenderBasicScreen}
                options={() => (HeaderStyle("Tender Basic"))}                  
            />
            <Stack.Screen 
                name="AllLead"                  
                component={LeadScreen}
                options={() => (HeaderStyle("All Lead Details"))}                  
            />
        </Stack.Navigator>
      </NavigationContainer>   
  );
}

export default MainStackNavigator;