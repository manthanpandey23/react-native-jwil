import React from 'react';
import { Container, Content, List, ListItem, Body} from 'native-base';
import ActListComponent from '../components/ActList';
import ActivityList from '../constants/activity';
import {Button, Text, View} from '@shoutem/ui';

import ActivityAPI from '../api/activityAPI';

const ActivityScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
        { ActivityAPI().map( (item) =>           <ListItem key={item.id} thumbnail onPress={()=> navigation.navigate('Approval', {
                                                                          module: item.moduleName,
                                                                          submodule: item.subModuleName,
                                                                          date: item.assignedOn,
                                                                          status: item.actionTaken,
                                                                          actionData: item.actionData,
                                                                          actionId: item.actionId
                                                })}>              
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