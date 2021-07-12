/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React, { useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default function UtilityScreen ({navigation}) {
    const [gasBill, setGasBill] = useState(0);
    const [electricBill, setElectricBill] = useState(0);
    const [fuelBill, setFuelBill] = useState(0);
    const [propaneBill, setPropaneBill] = useState(0);
    const [text, setText] = useState('');

    let numPeople = [['household size', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']]
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
            handler={(selection, row) => setText( numPeople[selection][row] )}
            data={numPeople}
        />
        <TextInput style = {{fontSize: 20}}
            placeholder = {gasPHolder}
            value = {gasBill}
            onChangeText = {setGasBill}
        />
        <Button
            title = "OK"
        />
        <TextInput style = {{fontSize: 20}}
            placeholder = {electricPHolder}
            value = {electricBill}
            onChangeText = {setElectricBill}
        />
        <Button
            title = "OK"
        />
        <TextInput style = {{fontSize: 20}}
            placeholder = {fuelOilPHolder}
            value = {fuelBill}
            onChangeText = {setFuelBill}
        />
        <Button
            title = "OK"
        />
        <TextInput style = {{fontSize: 20}}
            placeholder = {propanePHolder}
            value = {propaneBill}
            onChangeText = {setPropaneBill}
        />
        <Button style = {{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
            title = "Done"
            onPress = {() => navigation.navigate('Home')}
        />
    </View>
    );
}
