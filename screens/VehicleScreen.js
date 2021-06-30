/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import { View, TextInput, Button } from 'react-native';

export default class VehicleScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            mileage: '0',
        };
    }

    render(){
        let cars = [['car', 'electric', 'hybrid', 'gas']];
        return (
            <View>
            <View style = {{height: 52}}>
            <DropdownMenu
                style={{flex: 0.5}}
                bgColor={'grey'}
                tintColor={'#000000'}
                activityTintColor={'red'}
                handler={(selection, row) => this.setState({text: cars[selection][row]})}
                data={cars}
             />
             </View>
            <View >
            <TextInput style = {{fontSize: 30}}
                    value={this.text}
                    onChangeText = {this.setState(this.mileage)}
               />
               <Button style = {{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
                   title = "Done"
                   onPress = {() => this.props.navigation.navigate('Home')}
               />
            </View>
            </View>

        );
    }
}
