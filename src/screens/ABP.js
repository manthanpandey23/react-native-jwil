import React from 'react';
import {Linking} from 'react-native'
import { Container, Content, List, ListItem, Body} from 'native-base';
import ActListComponent from '../components/ActList';
import {Button, Text, View} from '@shoutem/ui';

import ABPAPI from '../api/abpAPI';

const ABPScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
          { ABPAPI().map( (item) => <ListItem key={item.abpId} thumbnail>              
                                                  <Body>                                                    
                                                    <Text> <Text style={{fontWeight: "bold"}}>Title: </Text>{item.title}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Description: </Text>{item.description}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Creation Date: </Text>{item.dateOfCreation}</Text>
                                                     <Text> <Text style={{fontWeight: "bold"}}>Approval Date: </Text>{item.dateOfApproval}</Text>                                
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

export default ABPScreen;