import React from 'react';
import { Container, Content, List} from 'native-base';
import ActListComponent from '../components/ActList';
import ActivityList from '../constants/activity';
import {Button, Text, View} from '@shoutem/ui';

const ActivityScreen = ({navigation}) => {
    return (
      <Container>       
        <Content>
          <List>
            { ActivityList.map( (item, i) => <View>
                                                <Button onPress={() => navigation.navigate('Approval')}>
                                                  <Text>
                                                    <ActListComponent 
                                                      key={i+1}
                                                      name={item.name} 
                                                      subname={item.subname} 
                                                      date={item.date}
                                                      status={item.status}
                                                    /> 
                                                  </Text>
                                                </Button>
                                            </View>
              )}
          </List>
        </Content>
      </Container>
    );
}

export default ActivityScreen;