/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';

export default class AirTravelScreen extends Component {
    constructor( props ){
        super( props );
        this.state = {
            miles: '0',
        };
    }
    render() {
        let placeholder = 'Enter average miles traveled per month';
        return (
            <View>
                <TextInput style = {{height: 60, fontSize: 20}}
                    placeholder = {placeholder}
                    value = { this.miles }
                    onChangeText = { this.setState( this.miles ) }
                />

                <Button style = {{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
                    title = "Done"
                    onPress = {() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}