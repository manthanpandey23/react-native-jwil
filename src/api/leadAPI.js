import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../env.json';

const LeadAPI = () => {
  const [data, setData] = useState([]);
  const token = AsyncStorage.getItem('token');
  fetch(API_URL+'api/ttc/lead/LeadRecord/get', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
            },
          body: JSON.stringify({
            "filterByFYear": 0,
            "isLimitedToUser": true
            })              
          })
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((error) => console.log(error.message));
  return data;  
}

export default LeadAPI;
