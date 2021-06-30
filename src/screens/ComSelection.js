import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import ComListComponent from '../components/ComList';
import ComListAPI from '../api/comListAPI.js';

const ComSelectionScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
            {ComListAPI().map((item, i) => <ComListComponent name={item.name} desc={item.description} key={item.companyId}/> )}
          </List>
        </Content>
      </Container>
    );
}

export default ComSelectionScreen;