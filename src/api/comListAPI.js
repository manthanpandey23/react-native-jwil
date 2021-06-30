import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const BASE_URL='https://jwilapi-devnet5.azurewebsites.net/';

const ComListAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL+'/api/core/admin/master/company/list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }})
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (data);
}

export default ComListAPI;
