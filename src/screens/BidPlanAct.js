import React from 'react';
import {Linking} from 'react-native'
import { Container, Content, List, ListItem, Body} from 'native-base';
import ActListComponent from '../components/ActList';
import {Button, Text, View} from '@shoutem/ui';

import BidPlanActAPI from '../api/bidPlanActAPI';

const BidPlanActScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
          { BidPlanActAPI().map( (item) => <ListItem key={item.activityId} thumbnail>              
                                                  <Body>                                                    
                                                    <Text> <Text style={{fontWeight: "bold"}}>Name: </Text>{item.name}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Type: </Text>{item.type}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>URL: </Text>{item.navigationURL}</Text>                                                    
                                                  </Body>             
                                              </ListItem>
                              )                                         
            }       
          </List>
        </Content>
      </Container>
    );
}

export default BidPlanActScreen;