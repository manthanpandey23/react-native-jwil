import React from 'react';

const getLoginDetails = async (token, mail, name) => {
    
    try {
      let response = await fetch('https://neptuneapi.azurewebsites.net/swagger/api/security/auth/get/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              token: this.state.accessToken,
              refreshToken: "",
              tokenType: "Office365",
              emailId: this.state.mail,
              companyId: 0,
              name: this.state.user
          })
      });
      let json = await response.json();
      console.log(response);
      return json;      
    } catch (error) {
       console.log(error);
    }
  };

 export default getLoginDetails; 