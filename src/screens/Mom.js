import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const MomScreen = ({navigation}) => {
    return (
      <View style= {styles.content}>
        <Text>This is MOM Activity Screen</Text>
      </View>
    );
}

const styles= StyleSheet.create({
  content : {
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  }
})

export default MomScreen;