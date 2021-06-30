import React, { useEffect, useState } from 'react';
import { Container, Content } from 'native-base';
import {Card, Image, Title, View, Subtitle, Caption, Button, Text, Heading, TextInput} from '@shoutem/ui';
import Modal from 'react-native-modal';

const BASE_URL='https://jwilapi-devnet5.azurewebsites.net/';


const PostApprovalScreen = ({ navigation, route }) => {    
    const { actionId, status, remark }= route.params;
    const [data, setData] = useState([]);

    function onApprove(actionId, status, remark) {
    

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

    return (
        <View style={{flex:1, flexDirection:"column", backgroundColor:'#fff'}}>            
                 <Heading style={{margin:100, alignSelf:'center'}}>Thank You</Heading> 
                 <Text>{actionId}</Text>    
                 <Text>{status}</Text>            
                 <Text>{remark}</Text>     
                 <Text>{ApprovalAPI}</Text>                                  
        </View>  
    );
}

export default PostApprovalScreen;