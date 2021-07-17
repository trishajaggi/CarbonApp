/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import { View, TextInput, Button, LogBox } from 'react-native';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
   ]);

export default function VehicleScreen ({navigation}) {
    let [text, setText] = useState('');
    let [mileage, setMileage] = useState('');
    let [total, setTotal] = useState(0);

    let cars = [['car', 'electric', 'hybrid', 'gas']];
    let placeholder = 'Enter average miles traveled per month';

    const calculate = useCallback(() => {
        let num = parseInt(mileage, 10);
        if ( text === 'electric' ) {
            num = 0;
        } else if ( text === 'hybrid') {
            num = num * 0.5;
        } else {
            num = num * 0.79;
        }
        setTotal(num);
    },[mileage, text]);

    useFocusEffect(
        useCallback(() => {
            calculate();
        },[calculate])
    );

    return (
        <View>
        <View style = {{height: 52}}>
            <DropdownMenu
                style={{flex: 0.5}}
                bgColor={'grey'}
                tintColor={'#000000'}
                activityTintColor={'red'}
                handler={(selection, row) => setText(cars[selection][row])}
                data={cars}
            />
        </View>
        <View>
            <TextInput style = {{ fontSize: 20 }}
                placeholder = { placeholder }
                value = { mileage }
                onChangeText = { setMileage }
            />
            <Button style = {{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
                title = "Done"
                onPress = {() => navigation.navigate('Home', {
                    vehicleReturn: total.toString(),
                })}
            />
        </View>
        </View>

    );

}
