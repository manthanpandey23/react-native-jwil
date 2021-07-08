import React from 'react';
import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Button, Text} from '@shoutem/ui';
import NewCard from '../components/NewCard';
import ActivityAPI from '../api/activityAPI';
import {StyleSheet} from 'react-native';

const DashboardScreen = ({ navigation }) => {
    return (
        <Container>      
          <Content>
            <Grid>
                <Col style={{margin:20}}>
                  <Button onPress={() => navigation.navigate('Activity')}>
                    <NewCard title="Activities"   />
                  </Button>
                </Col>                           
                  <Col style={{margin:20}}>
                    <Button onPress={() => navigation.navigate('Message')}>   
                      <NewCard title="Messages" subtitle="01"  />
                    </Button>  
                  </Col>                          
            </Grid>
            <Grid>
                <Col style={{margin:20}}>
                  <Button onPress={() => navigation.navigate('Notification')}>
                    <NewCard title="Notifications" subtitle="50"  />
                  </Button>
                </Col>
                <Col style={{margin:20}}>
                  <Button onPress={() => navigation.navigate('Activity')}>
                    <NewCard title="Documents" subtitle="$"   />
                  </Button>
                </Col>           
            </Grid>    
            <Grid>
              <Row><Text style={styles.link} onPress={() => navigation.navigate('ABP')}>Click here for Annual Business Plan</Text></Row>
              <Row><Text style={styles.link} onPress={() => navigation.navigate('BidPlanAct')}>Click here for Bid Plan Activities</Text></Row>
              <Row><Text style={styles.link} onPress={() => navigation.navigate('TenderBasic')}>Click here for Tender Basic Details</Text></Row>
               <Row><Text style={styles.link} onPress={() => navigation.navigate('AllLead')}>Click here for List of all Leads</Text></Row>
            </Grid>      
          </Content>
        </Container>
    );
}

const styles=StyleSheet.create({
  link:{
   alignItems:'center',
   justifyContent:'space-between',
   padding:20,
   color: 'green'
  }
})

export default DashboardScreen;