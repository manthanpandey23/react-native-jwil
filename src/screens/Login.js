import React, {useState} from 'react';
import {Image, View, ImageBackground} from 'react-native';
import {Button, Text} from '@shoutem/ui';
import AzureAuth from 'react-native-azure-auth';
import Client from 'react-native-azure-auth/src/networking';

const CLIENT_ID = 'c1e6d7cd-21c4-40f7-8c99-75a6be63c782' 

const azureAuth = new AzureAuth({
    clientId: CLIENT_ID
  });

var message= ""; 

const LoginScreen = ({ navigation }) => {  
  const [loginData, setLoginData] = useState({accessToken: null, user: '', userId: '', mail: '', message:'', status: 'false'});

  const onLogin = async () => {
    try {
      let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read' })
      //console.log('CRED>>>', tokens)
      setLoginData({ accessToken: tokens.accessToken });
      let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: 'me'})
      //console.log('info', info)
      setLoginData({ user: info.displayName, userId: tokens.userId, mail: info.mail, status: 'true' })
    } catch (error) {
      //console.log('Error during Azure operation', error)
    }
  };

const onLogout = () => {
  azureAuth.webAuth
    .clearSession()
    .then(success => {
      setLoginData({ accessToken: null, user: null });
    })
    .catch(error => console.log(error));
};

let loggedIn = loginData.status  ? true : false;   

return (      
      <View style={{flex:1, flexDirection:"column", justifyContent:'center'}}>      
            <ImageBackground
              source={require("../assets/images/loginBack.jpg")}
              style={{ flex: 1, resizeMode: 'cover' }}
            >
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
                onPress={onLogin}
              >
                  <Text>{loggedIn ? navigation.navigate('API') || 'You already logged in' : 'Login with Office 365'}</Text>
              </Button>                           
            </ImageBackground>
      </View>  
  );
}

export default LoginScreen;
