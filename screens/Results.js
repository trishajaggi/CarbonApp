/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class Results extends Component {
    constructor( props ){
        super(props);
        this.state = {
            total: 10,
        };
    }
    render(){
        return (
            <View>
                <Text style = {{ fontSize: 20 }}>
                    {this.total}
                </Text>
                <Button
                    title = "Tips for reducing your footprint"
                    onPress = {() => this.props.navigation.navigate('Tips')}
                />
            </View>
        );
    }
}