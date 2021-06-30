/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {View} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class UtilityScreen extends Component {
    constructor ( props ){
        super( props );
        this.state = {
            text: '',
        }
    }
    render() {
        let numPeople = [['household size', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
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
            </View>
        );
    }
}
