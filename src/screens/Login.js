import React, {useState, useRef} from 'react';
import {Image, View, ImageBackground, Button, Text} from 'react-native';
import AzureAuth from 'react-native-azure-auth';
import Client from 'react-native-azure-auth/src/networking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RBSheet from "react-native-raw-bottom-sheet";

const CLIENT_ID = 'c1e6d7cd-21c4-40f7-8c99-75a6be63c782' 

const azureAuth = new AzureAuth({
    clientId: CLIENT_ID
  });

const LoginScreen = ({ navigation }) => {  
  const [loginData, setLoginData] = useState({accessToken: null, user: '', mail: '', status: false});
  const [jToken, setjToken] = useState([]);
  const refRBSheet = useRef();

   const onLogin = () => {     
      let tokens = azureAuth.webAuth.authorize({scope: 'openid profile User.Read' })
      setLoginData({ accessToken: tokens.accessToken, user: tokens.userName, mail: tokens.userId });
      console.log(loginData);
      //getToken();
   }

  const getToken = () => {
       fetch ('https://jwilapi-devnet5.azurewebsites.net/api/security/auth/get/token', {
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
      .then((json) => setjToken(json))
      .catch((error) => console.log("Error in JWIL Token", error.message));
      if (jToken) {
        AsyncStorage.setItem('token', json.token);
        AsyncStorage.setItem('mail', loginData.mail);
        console.log(jToken);
        setLoginData({status: true});
      }         
  }

 const onLogout = () => {
  azureAuth.webAuth.clearSession()
    .then(success => {
      setLoginData({ accessToken: null, user: null, status: false });
      AsyncStorage.setItem('token', null);
      AsyncStorage.setItem('mail', null);
    })
    .catch(error => {
      setLoginData({status:false});
      console.log("Error in Logout", error.message);
    });
};

let loggedIn = loginData.status  ? true : false;   

return (      
      <View style={{flex:1, flexDirection:"column", backgroundColor:'#fff'}}> 
        <ImageBackground source={require('../assets/images/2.png')} resizeMode="cover" style={{flex: 1, justifyContent: "center"}} />              
               <Button title="Silde up for Login" onPress={() => refRBSheet.current.open()} />
                  <RBSheet
                      ref={refRBSheet}
                      closeOnDragDown={true}
                      closeOnPressMask={false}
                      height={300}
                      customStyles={{
                        wrapper: {
                          backgroundColor: "transparent",
                        },
                        container: {
                           borderWidth: 5,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20
                        }
                      }}
                    >
                    <View style={{justifyContent:'space-between', alignItems:'center', flex:1}}>
                      <Text style={{fontSize:30, fontWeight:'bold', color:'#1CC5DC'}}>Login</Text>
                        <View style={{alignItems:'center', flex:1, margin:20}}>
                        <Button 
                            title='Continue with O365'
                            onPress={onLogin}
                            color='#DC3E15'
                            style={{borderWidth: 5, borderTopLeftRadius: 20, borderTopRightRadius: 20}}                            
                          />
                          <View style={{margin:20, alignItems:'center'}}>
                              <Text>Use your existing Office 365</Text>
                              <Text>Login ID to continue</Text>
                          </View>
                          
                          </View>
                      </View>
                  </RBSheet>              
        </View>  
  );
}

export default LoginScreen;
