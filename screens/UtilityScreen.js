/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {View, Button, TextInput} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class UtilityScreen extends Component {
    constructor ( props ){
        super( props );
        this.state = {
            gasBill: 0,
            electricBill: 0,
            fuelBill: 0,
            propaneBill: 0,
            text: '',
        }
    }
    render() {
        let numPeople = [['household size', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
        let gasPHolder = 'Enter natural gas bill in $';
        let electricPHolder = 'Enter electric bill in $';
        let fuelOilPHolder = 'Enter fuel oil bill in $';
        let propanePHolder = 'Enter propane bill in $';
        return(
            <View style = {{flex: 1}}>
            <DropdownMenu
                style={{flex: 0.5}}
                bgColor={'grey'}
                tintColor={'#000000'}
                activityTintColor={'red'}
                handler={(selection, row) => this.setState({text: numPeople[selection][row]})}
                data={numPeople}
            />
            <TextInput style = {{fontSize: 20}}
                value = {gasPHolder}
                onChangeText = {this.setState(this.gasBill)}
            />
            <Button
                title = "OK"
            />
            <TextInput style = {{fontSize: 20}}
                value = {electricPHolder}
                onChangeText = {this.setState(this.electricBill)}
            />
            <Button
                title = "OK"
            />
            <TextInput style = {{fontSize: 20}}
                value = {fuelOilPHolder}
                onChangeText = {this.setState(this.fuelBill)}
            />
            <Button
                title = "OK"
            />
            <TextInput style = {{fontSize: 20}}
                value = {propanePHolder}
                onChangeText = {this.setState(this.propaneBill)}
            />
            <Button style = {{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
                   title = "Done"
                   onPress = {() => this.props.navigation.navigate('Home')}
               />
            </View>
        );
    }
}
