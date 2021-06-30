import React from 'react';

const getLoginDetails = async (token, mail, name) => {
    
    try {
      let response = await fetch('https://jwilapi-devnet5.azurewebsites.net/', {
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