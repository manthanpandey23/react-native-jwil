import React from 'react';
import { Card, Image, View, Subtitle, Title, Heading } from '@shoutem/ui';

const NewCard = (props) => {
    return (
        <Card style={{marginTop:20}}>
            <Image
                styleName="medium-wide"
                source={props.link}
            />
            <View styleName="content">
                <Heading style={{color:"#4299f5", fontWeight:"bold"}}>{props.title}</Heading>
                <View styleName="horizontal v-center space-between">
                    <Subtitle style={{color: "#f542b9", paddingLeft:60}}>{props.subtitle}</Subtitle>                   
                </View>
            </View>
        </Card>
    );
}

export default NewCard;