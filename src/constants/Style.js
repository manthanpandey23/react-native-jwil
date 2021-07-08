import React from 'react';
import {Image, StyleSheet} from 'react-native';

const HeaderStyle = (head) => {return ({
                  title: head,
                  headerStyle: { backgroundColor: '#000'},
                  headerTitleStyle: { alignSelf: 'center' },
                  headerTintColor: '#fff',            
                  headerRight: () => (
                   <Image
                      style={{
                      resizeMode: "center",
                      height: 40,
                      width: 40,
                      margin: 10,
                      }}
                      source={require("../assets/images/logo.png")}
                  />
                  ),
                }); }                 

export {HeaderStyle};