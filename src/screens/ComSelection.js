import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import ComListComponent from '../components/ComList';
import ListOfComp from '../constants/listOfComp';

const ComSelectionScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
            {ListOfComp.map((item, i) => <ComListComponent name={item.name} key={i}/> )}
          </List>
        </Content>
      </Container>
    );
}

export default ComSelectionScreen;