import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Button, Text} from '@shoutem/ui';
import AzureAuth from 'react-native-azure-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CLIENT_ID = 'c1e6d7cd-21c4-40f7-8c99-75a6be63c782' 

const azureAuth = new AzureAuth({
    clientId: CLIENT_ID
  });

const LoginScreen = ({ navigation }) => {  
  const [loginData, setLoginData] = useState({accessToken: null, user: '', mail: ''});

   const onLogin = async () => {     
      let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read Mail.Read' })
      setLoginData({ accessToken: tokens.accessToken, user: tokens.userName, mail: tokens.userId })
      .then(() => getToken())
      .then(() => console.log(loginData))
      .catch((error) => console.log(error));      
   };

  const getToken =  () => {
      fetch('https://jwilapi-devnet5.azurewebsites.net/api/security/auth/get/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "token": loginData.accessToken,
              "refreshToken": "",
              "tokenType": "Office365",
              "emailId": loginData.mail,
              "companyId": 0,
              "name": loginData.user
          })
      })
      .then((response) => response.json())
      .then((json) => {
        AsyncStorage.setItem('token', json.token);
        AsyncStorage.setItem('mail', loginData.mail); 
        AsyncStorage.setItem('status', loginData.isSuccess); 
        console.log(json);       
      })
      .catch((error) => { 
        console.log("Error in JWIL Token", error.message);
      });
  }

 const onLogout = () => {
  azureAuth.webAuth.clearSession()
    .then(success => {
      setLoginData({ accessToken: null, user: null });
      AsyncStorage.setItem('token', null);
      AsyncStorage.setItem('mail', null);
    })
    .catch(error => {
      setLoginData({status:false});
      console.log("Error in Logout", error.message);
    });
};

const status = AsyncStorage.getItem('status');
return ( <View style={{flex:1, flexDirection:"column", backgroundColor:'#fff'}}> 
              <Image
                  style={{
                  resizeMode: "center",
                  height: 100,
                  width: 200,                
                  margin: 100
                  }}
                  source={require("../assets/images/logo.png")}
              />
              <Button 
                styleName="secondary" 
                style={{ alignSelf: "center", backgroundColor:'#185ADB' }}
                onPress={onLogin}>
                <Text>{status == true ? navigation.navigate('ComSelection')  : 'Login with Office 365'}</Text>             
              </Button> 
      </View> );
}

export default LoginScreen;
