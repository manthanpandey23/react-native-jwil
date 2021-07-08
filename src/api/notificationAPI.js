import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../env.json';

const NotificationAPI = () => {
  const [data, setData] = useState([]);
  const token = AsyncStorage.getItem('token');
  fetch(API_URL+'api/notifications/GetNotifications?pageSize=10', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            }        
          })
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((error) => console.log(error.message));
  return data;
}

export default NotificationAPI;
