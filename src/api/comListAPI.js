import React from 'react';

const comList = async () => {   
    let response = await fetch('https://neptuneapi.azurewebsites.net/api/core/admin/master/company/list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
      });
    let json = await response.json();
    return json;
  };

 export default comList; 