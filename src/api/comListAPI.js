import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../env.json';

const ComListAPI =  () => {
  const [data, setData] = useState([]);
  const mail =  AsyncStorage.getItem('mail');
  const token =  AsyncStorage.getItem('token');
  
  useEffect(() => {
    fetch(API_URL+'api/me/profile/usercompanies?email='+mail, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          }          
        })
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((error) => console.log(error.message));  
  if (data){
    return data;
  } else {
    return false;
  }
  }, [token, mail]);
}

export default ComListAPI;
