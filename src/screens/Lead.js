import React from 'react';
import {Linking} from 'react-native'
import { Container, Content, List, ListItem, Body} from 'native-base';
import ActListComponent from '../components/ActList';
import {Button, Text, View} from '@shoutem/ui';

import LeadAPI from '../api/leadAPI';

const LeadScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
          { LeadAPI().map( (item) => <ListItem key={item.abpId} thumbnail>              
                                                  <Body>                                                    
                                                    <Text> <Text style={{fontWeight: "bold"}}>Name: </Text>{item.nameofProject}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Description: </Text>{item.detailedDescriptionProject}</Text>
                                                    <Text> <Text style={{fontWeight: "bold"}}>Module Name: </Text>{item.moduleName}</Text>
                                                     <Text> <Text style={{fontWeight: "bold"}}>Sub Module Name: </Text>{item.subModuleName}</Text>                                
                                                    <Text> <Text style={{fontWeight: "bold"}}>Status: </Text><Text style={{color:'green', fontWeight: "bold"}}> {item.statusName} </Text></Text>
                                                  </Body>             
                                              </ListItem>
                              )                                         
            }       
          </List>
        </Content>
      </Container>
    );
}

export default LeadScreen;