import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const BASE_URL='https://jwilapi-devnet5.azurewebsites.net/';

const ActivityAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL+'/api/CommunicationHubActionCenter/getUsersPendingActions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cookie': 'ARRAffinity=b6c882a5e013db277ef434fb044e8255f520bbdc70059876373bab098d534452; ARRAffinitySameSite=b6c882a5e013db277ef434fb044e8255f520bbdc70059876373bab098d534452'
          }})
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (data);
}

export default ActivityAPI;
