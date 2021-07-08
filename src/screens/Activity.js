import React from 'react';
import {Linking} from 'react-native'
import { Container, Content, List, ListItem, Body} from 'native-base';
import ActListComponent from '../components/ActList';
import {Button, Text, View} from '@shoutem/ui';

import ActivityAPI from '../api/activityAPI';

const ActivityScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
          { ActivityAPI().map( (item) => <ListItem key={item.id} thumbnail onPress={()=> {
                                                  if(item.activityType=='BID_PLAN_ACTIVITY') {
                                                    Linking.openURL('https://jwilbusiness.azurewebsites.net/#/index/ttc/dashboard') 
                                                  } else {
                                                    navigation.navigate('Approval', {
                                                    module: item.moduleName,
                                                    submodule: item.subModuleName,
                                                    date: item.assignedOn,
                                                    status: item.actionTaken,
                                                    actionData: item.actionData,
                                                    actionId: item.actionId,
                                                    activityType: item.activityType,
                                                    documentId: item.documentId
                                                  })
                                                  }
                                                  }}>              
                                                  <Body>                                                    
                                                    <Text> <Text style={{fontWeight: "bold"}}>Project Name: </Text>{item.moduleName}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Submodule Name: </Text>{item.subModuleName}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Date: </Text>{item.assignedOn} </Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Status: </Text><Text style={{color:'green', fontWeight: "bold"}}> {item.actionTaken} </Text></Text>
                                                  </Body>             
                                        </ListItem>
                              )                                         
            }       
          </List>
        </Content>
      </Container>
    );
}

export default ActivityScreen;