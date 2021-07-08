import React, {useState, useEffect} from 'react';
import { Container, Content } from 'native-base';
import {Card, Image, Title, View, Subtitle, Caption, Button, Text, Heading, TextInput} from '@shoutem/ui';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL='https://jwilapi-devnet5.azurewebsites.net/';

const ApprovalScreen = ({ navigation, route }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [remark, setRemark] = useState();
    const {module, submodule, date, status, actionData, actionId, activityType, documentId}= route.params;
    const [data, setData] = useState([]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function onSave () {
        const token = AsyncStorage.getItem('token');
        if (activityType == 'APPROVAL') {            
             fetch(BASE_URL+'api/WorkflowProcess/PerformAction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "actionId": actionId,
                "actionTaken": status,
                "actionRemarks": remark
            })
            })
        .then((response) => setData(response.json()))
        .catch((error) => console.error(error));    
        console.log(data);
        } else {
             fetch(BASE_URL+'api/MoM/completeMoMActionItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "actionId": actionId,
                "documentId": documentId,
                "remark": remark
            })
            })
        .then((response) => setData(response.json()))
        .catch((error) => console.error(error));    
        console.log(data);
        } 
       
    }

    return (
        <Container>       
          <Content>
           <Card style={{width:'100%'}}> 
                
                <Title style={{margin:20, fontWeight:'bold'}}>Project Name: <Title>{module}</Title></Title>
                <Title style={{margin:20, fontWeight:'bold'}}>Submodule Name: <Title>{submodule}</Title></Title>
                <Title style={{margin:20, fontWeight:'bold'}}>Date: <Title>{date}</Title></Title>
                <Title style={{margin:20, fontWeight:'bold'}}>Status: <Title style={{color:'green', fontWeight:'bold'}}>{status}</Title></Title>
                <View style={{flex: 1}} styleName="horizontal">
                    <Button styleName="confirmation" style={{backgroundColor:"#39A2DB"}} onPress={toggleModal}>
                        <Text style={{color:'white'}}>{activityType == 'APPROVAL' ? 'Approve' : 'Mark as complete'}</Text>
                    </Button>                
                    <Button styleName="confirmation" style={{backgroundColor:"#D83A56"}}>
                        <Text style={{color:'white'}}>{activityType == 'APPROVAL' ? 'Reject' : 'Close'}</Text>
                    </Button>
                </View> 

                <Modal isVisible={isModalVisible}>
                    <View style={{flex: 1}}>                        
                        <Heading style={{backgroundColor:'#94D0CC', padding: 10, fontWeight:'bold'}}>Remarks</Heading> 
                        <TextInput                       
                            selectionColor={"#CDF0EA"}
                            placeholder={'Type your remarks here...'}   
                            placeholderTextColor={"#CDF0EA"}
                            style={{width:200}}   
                            onChangeText={text => setRemark(text)}    
                            defaultValue={remark}                
                        />  
                        <View style={{flex: 1}} styleName="horizontal">         
                            <Button styleName="confirmation" style={{backgroundColor:"#39A2DB"}} onPress={() => onSave()}>
                                <Text style={{color:'white'}}>Save</Text>
                            </Button>
                             <Button styleName="confirmation" style={{backgroundColor:"#D83A56"}} onPress={toggleModal}>
                                <Text style={{color:'white'}}>Close</Text>
                            </Button>
                        </View>              
                    </View>
                </Modal>   
                     
            </Card>
          </Content>
        </Container>
    );
}

export default ApprovalScreen;