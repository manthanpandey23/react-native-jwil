import React from 'react';
import {Image, StyleSheet} from 'react-native';

const loginStyle = {
                  title: 'Login',
                  headerStyle: { backgroundColor: '#000'},
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
                  headerStyle: { backgroundColor: '#000' },
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
                  headerStyle: { backgroundColor: '#000' },
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
                  headerStyle: { backgroundColor: '#000' },
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
                  headerStyle: { backgroundColor: '#000' },
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
                  headerStyle: { backgroundColor: '#000' },
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

const PostApprovalStyle = {
                  title: 'Confirmation',
                  headerStyle: { backgroundColor: '#000' },
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

const styles = StyleSheet.create({
  primary:{
    color:'#0000FF',
    alignSelf: "center"
  },
  secondary: {
    color:'#6600FF',
    alignSelf: "center"
  },
  textPrimary: {
    color: '#FFFFFF'
  },
  textSecondary: {
    color: '#000000'
  },
  back: {
    color:'#FF0000'
  }
})                   

export {loginStyle, comSelectionStyle, DashboardStyle, ActivityStyle, ApprovalStyle, APIStyle, styles, PostApprovalStyle};