import React from 'react';
import {Image} from 'react-native';

const loginStyle = {
                  title: 'Login',
                  headerStyle: { backgroundColor: '#94D0CC'},
                  headerTitleStyle: { alignSelf: 'center' },
                  headerTintColor: '#fff',                  
                  headerRight: () => (
                   <Image
                      style={{
                      resizeMode: "center",
                      height: 40,
                      width: 40,
                      margin: 10,
                      }}
                      source={require("../assets/images/logo.png")}
                  />
                  ),
                }

const comSelectionStyle = {
                  title: 'Company Selection',
                  headerStyle: { backgroundColor: '#94D0CC' },
                  headerTintColor: '#fff',                  
                  headerRight: () => (                    
                   <Image
                      style={{
                      resizeMode: "contain",
                      height: 40,
                      width: 40,
                      margin: 10,
                      }}
                      source={require("../assets/images/logo.png")}
                  />                 
                  ),
                }     

const DashboardStyle = {
                  title: 'Dashboard',
                  headerStyle: { backgroundColor: '#94D0CC' },
                  headerTintColor: '#fff',                  
                  headerRight: () => (                    
                   <Image
                      style={{
                      resizeMode: "center",
                      height: 40,
                      width: 40,
                      margin: 10,
                      }}
                      source={require("../assets/images/logo.png")}
                  />                 
                  ),
                }         

const ActivityStyle = {
                  title: 'Activities',
                  headerStyle: { backgroundColor: '#94D0CC' },
                  headerTintColor: '#fff',                  
                  headerRight: () => (                    
                   <Image
                      style={{
                      resizeMode: "center",
                      height: 40,
                      width: 40,
                      margin: 10,
                      }}
                      source={require("../assets/images/logo.png")}
                  />                 
                  ),
                }            

const ApprovalStyle = {
                  title: 'Approval',
                  headerStyle: { backgroundColor: '#94D0CC' },
                  headerTintColor: '#fff',                  
                  headerRight: () => (                    
                   <Image
                      style={{
                      resizeMode: "center",
                      height: 40,
                      width: 40,
                      margin: 10,
                      }}
                      source={require("../assets/images/logo.png")}
                  />                 
                  ),
                }      
const APIStyle = {
                  title: 'API Test',
                  headerStyle: { backgroundColor: '#94D0CC' },
                  headerTintColor: '#fff',                  
                  headerRight: () => (                    
                   <Image
                      style={{
                      resizeMode: "center",
                      height: 40,
                      width: 40,
                      margin: 10,
                      }}
                      source={require("../assets/images/logo.png")}
                  />                 
                  ),
                }                     

export {loginStyle, comSelectionStyle, DashboardStyle, ActivityStyle, ApprovalStyle, APIStyle};