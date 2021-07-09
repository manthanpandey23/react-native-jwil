import React from 'react';
import { Container, Content, List, ListItem} from 'native-base';
import ComListAPI from '../api/comListAPI.js';
import AzureAuth from 'react-native-azure-auth';

const ComSelectionScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List style={{paddingVertical:30}}>
            { ComListAPI() ? ComListAPI().map((item, i) => <ComListComponent name={item.name} key={item.companyId}/>) : 'Loading' }
          </List>
        </Content>
      </Container>
    );
}

export default ComSelectionScreen;