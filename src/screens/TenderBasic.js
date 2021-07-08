import React from 'react';
import {Linking} from 'react-native'
import { Container, Content, List, ListItem, Body} from 'native-base';
import ActListComponent from '../components/ActList';
import {Button, Text, View} from '@shoutem/ui';

import TenderBasicAPI from '../api/tenderBasicAPI';

const TenderBasicScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
          { TenderBasicAPI().map( (item) => <ListItem key={item.tenderId} thumbnail onPress={() => Linking.openURL('https://jwilbusiness.azurewebsites.net/#/index/ttc/dashboard') }>              
                                                  <Body>                                                    
                                                    <Text> <Text style={{fontWeight: "bold"}}>TenderCode: </Text>{item.tenderCode}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Reference Number: </Text>{item.tenderReferenceNumber}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Status: </Text>{item.tenderStatusName}</Text>                                           
                                                  </Body>             
                                              </ListItem>
                              )                                         
            }       
          </List>
        </Content>
      </Container>
    );
}

export default TenderBasicScreen;