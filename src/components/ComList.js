import React from 'react';
import {ListItem, Text, Left, Right, Icon, Body, Button, Thumbnail} from 'native-base';
import { useNavigation } from '@react-navigation/native';

const ComListComponent = (props) => {
    const navigation = useNavigation();
    return  (
         <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require("../assets/images/logo.png")} />
              </Left>
              <Body>
               
                <Text>{props.name}</Text>                  
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('Dashboard')}>
                  <Text>View</Text>
                </Button>
              </Right>
          </ListItem>
    );
}

export default ComListComponent;