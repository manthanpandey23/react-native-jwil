import React, { useEffect, useState } from 'react';

const BASE_URL='https://jwilapi-devnet5.azurewebsites.net/';

const ApprovalAPI = (id, status, remark) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL+'/api/WorkflowProcess/PerformAction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
              "actionId": id,
              "actionTaken": status,
              "actionRemarks": remark
          }
          })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (data);
}

export default ApprovalAPI;
