import React from 'react';
import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Button, Text} from '@shoutem/ui';
import NewCard from '../components/NewCard';
import ActivityAPI from '../api/activityAPI';

const images = {
  Activity: require('../assets/images/activity.jpg'),
  Message: require('../assets/images/message.jpg'),
  Notification:  require('../assets/images/notify.webp'),
  Document: require('../assets/images/document.jpg')
}

const DashboardScreen = ({ navigation }) => {
    return (
        <Container>       
          <Content>
            <Grid>
                <Col style={{margin:20}}>
                  <Button onPress={() => navigation.navigate('Activity')}>
                    <NewCard title="Activities"  subtitle={ActivityAPI()} link={images.Activity}  />
                  </Button>
                </Col>                           
                  <Col style={{margin:20}}>
                    <Button onPress={() => navigation.navigate('Activity')}>   
                      <NewCard title="Messages" subtitle="01" link={images.Message} />
                    </Button>  
                  </Col>                          
            </Grid>
            <Grid>
                <Col style={{margin:20}}>
                  <Button onPress={() => navigation.navigate('Activity')}>
                    <NewCard title="Notifications" subtitle="50" link={images.Notification} />
                  </Button>
                </Col>
                <Col style={{margin:20}}>
                  <Button onPress={() => navigation.navigate('Activity')}>
                    <NewCard title="Documents" subtitle="$" link={images.Document}  />
                  </Button>
                </Col>           
            </Grid>          
          </Content>
        </Container>
    );
}

export default DashboardScreen;