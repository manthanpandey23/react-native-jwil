import React from 'react';
import {Linking} from 'react-native'
import { Container, Content, List, ListItem, Body} from 'native-base';
import ActListComponent from '../components/ActList';
import {Button, Text, View} from '@shoutem/ui';

import MessageAPI from '../api/messageAPI';

const MessageScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
          { MessageAPI().map( (item) => <ListItem key={item.id} thumbnail>              
                                                  <Body>                                                    
                                                    <Text> <Text style={{fontWeight: "bold"}}>Project Name: </Text>{item.project}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Submodule Name: </Text>{item.subModuleName}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Subject: </Text>{item.subject}</Text>
                                                     <Text> <Text style={{fontWeight: "bold"}}>Description: </Text>{item.description}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Date: </Text>{item.createdOn} </Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Type: </Text><Text style={{color:'green', fontWeight: "bold"}}> {item.messageType} </Text></Text>
                                                  </Body>             
                                              </ListItem>
                              )                                         
            }       
          </List>
        </Content>
      </Container>
    );
}

export default MessageScreen;