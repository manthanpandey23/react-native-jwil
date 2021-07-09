import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../env.json';

function JTokenAPI (token, mail, name) {
  const [data, setData] = useState([]);
  fetch(API_URL+'api/security/auth/get/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "token": token,
              "refreshToken": "",
              "tokenType": "Office365",
              "emailId": mail,
              "companyId": 0,
              "name": name
          })
      })
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((error) => console.log(error.message));  
  if (data.isSuccess) {
    AsyncStorage.setItem('token', data.token);
    console.log(data);
    return data;
  } else {
    console.log(data);
  }  
}

export default JTokenAPI;
