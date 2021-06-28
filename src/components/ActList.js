import React from 'react';
import {ListItem, Text, Left, Right, Icon, Body, Button, Thumbnail, Caption} from 'native-base';
import { useNavigation } from '@react-navigation/native';

const ActListComponent = (props) => {
    const navigation = useNavigation();
    return  (
         <ListItem thumbnail>              
              <Body>
                <Text> <Text style={{fontWeight: "bold"}}>Project Name: </Text>{props.name}</Text>
                <Text> <Text style={{fontWeight: "bold"}}>Submodule Name: </Text>{props.subname}</Text>
                <Text> <Text style={{fontWeight: "bold"}}>Date: </Text>{props.date} </Text>
                <Text> <Text style={{fontWeight: "bold"}}>Status: </Text><Text style={{color:'green', fontWeight: "bold"}}> {props.status} </Text></Text>
              </Body>             
          </ListItem>
    );
}

export default ActListComponent;