import React from 'react';
import {Linking} from 'react-native'
import { Container, Content, List, ListItem, Body} from 'native-base';
import ActListComponent from '../components/ActList';
import {Button, Text, View} from '@shoutem/ui';

import NotificationAPI from '../api/notificationAPI';

const NotificationScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
          { NotificationAPI().map( (item) => <ListItem key={item.id} thumbnail>              
                                                  <Body>                                                    
                                                    <Text> <Text style={{fontWeight: "bold"}}>Project Name: </Text>{item.moduleName}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Submodule Name: </Text>{item.subModuleName}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Title: </Text>{item.title}</Text>
                                                     <Text> <Text style={{fontWeight: "bold"}}>Sender: </Text>{item.senderName}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Date: </Text>{item.receivedOn} </Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Status: </Text><Text style={{color:'green', fontWeight: "bold"}}> {item.status} </Text></Text>
                                                  </Body>             
                                              </ListItem>
                              )                                         
            }       
          </List>
        </Content>
      </Container>
    );
}

export default NotificationScreen;