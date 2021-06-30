import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default APIScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://neptuneapi.azurewebsites.net/api/core/admin/master/company/list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }})
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
       <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data[0].name}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View> 
    </View>
  );
};