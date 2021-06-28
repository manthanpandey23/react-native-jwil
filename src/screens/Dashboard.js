import React from 'react';
import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Button, Text} from '@shoutem/ui';
import NewCard from '../components/NewCard';

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
                    <NewCard title="Activities"  subtitle="50" link={images.Activity}  />
                  </Button>
                </Col>               
                <Col style={{margin:20}}>
                    <NewCard title="Messages" subtitle="01" link={images.Message} />
                </Col>           
            </Grid>
            <Grid>
                <Col style={{margin:20}}>
                  <NewCard title="Notifications" subtitle="50" link={images.Notification} />
                </Col>
                <Col style={{margin:20}}>
                  <NewCard title="Documents" subtitle="$" link={images.Document}  />
                </Col>           
            </Grid>          
          </Content>
        </Container>
    );
}

export default DashboardScreen;