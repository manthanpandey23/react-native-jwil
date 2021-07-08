import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../env.json';

const ApprovalAPI = (id, status, remark) => {
  const [data, setData] = useState([]);
  const token = AsyncStorage.getItem('token');
  fetch(API_URL+'/api/WorkflowProcess/PerformAction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: {
              "actionId": id,
              "actionTaken": status,
              "actionRemarks": remark
          }
          })
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((error) => console.log(error.message));
  return data;
}

export default ApprovalAPI;
