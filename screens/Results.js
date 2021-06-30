/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class Results extends Component {
    constructor( props ){
        super(props);
        this.state = {
            total: 0,
        };
    }
    render(){
        return (
            <View>
                <Text>
                    {this.total}
                </Text>
            </View>
        );
    }
}