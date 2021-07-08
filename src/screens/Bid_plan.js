import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import ComListComponent from '../components/ComList';
import ComListAPI from '../api/comListAPI.js';
import AzureAuth from 'react-native-azure-auth';

const BidPlanScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <Text>Welcome to Bid Plan Screen</Text>
        </Content>
      </Container>
    );
}

export default BidPlanScreen;