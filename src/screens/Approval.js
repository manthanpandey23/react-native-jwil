import React, {useState} from 'react';
import { Container, Content } from 'native-base';
import {Card, Image, Title, View, Subtitle, Caption, Button, Text, Heading, TextInput} from '@shoutem/ui';
import Modal from 'react-native-modal';

const images = {
  Activity: require('../assets/images/activity.jpg'),
  Message: require('../assets/images/message.jpg'),
  Notification:  require('../assets/images/notify.webp'),
  Document: require('../assets/images/document.jpg')
}

const ApprovalScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Container>       
          <Content>
           <Card style={{width:'100%'}}>
            <Image
                styleName="large-banner"
                source={{uri: 'https://cdn.dribbble.com/users/1423099/screenshots/5364836/approvals.png?compress=1&resize=400x300'}}
            />
           
                <Title style={{margin:20, fontWeight:'bold'}}>Project Name: <Title>Company 1</Title></Title>
                <Title style={{margin:20, fontWeight:'bold'}}>Submodule Name: <Title>Test 1</Title></Title>
                <Title style={{margin:20, fontWeight:'bold'}}>Date: <Title>25/06/2021</Title></Title>
                <Title style={{margin:20, fontWeight:'bold'}}>Status: <Title style={{color:'green'}}>active</Title></Title>
                <View style={{flex: 1}} styleName="horizontal">
                    <Button styleName="confirmation" style={{backgroundColor:"#39A2DB"}} onPress={toggleModal}>
                        <Text style={{color:'white'}}>Approve</Text>
                    </Button>                
                    <Button styleName="confirmation" style={{backgroundColor:"#D83A56"}}>
                        <Text style={{color:'white'}}>Reject</Text>
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
                        />  
                        <View style={{flex: 1}} styleName="horizontal">         
                            <Button styleName="confirmation" style={{backgroundColor:"#39A2DB"}} onPress={toggleModal}>
                                <Text style={{color:'white'}}>Save</Text>
                            </Button>
                             <Button styleName="confirmation" style={{backgroundColor:"#D83A56"}} onPress={toggleModal}>
                                <Text style={{color:'white'}}>Reject</Text>
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