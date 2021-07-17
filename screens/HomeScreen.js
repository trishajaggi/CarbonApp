/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';


export default function HomeScreen ({navigation, route}) {

    let [vehicleReturn, setVehicleReturn] = useState('');
    let [utilityReturn, setUtilityReturn] = useState('');
    let [airReturn, setAirReturn] = useState('');

    useFocusEffect(
        useCallback(() => {
            if ( route.params ) {
                setVehicleReturn( route.params.vehicleReturn );
            }
        }, [route])
    );

    useFocusEffect(
        useCallback(() => {
            if ( route.params ) {
                setAirReturn( route.params.airReturn );
            }
        }, [route])
    );

    useFocusEffect(
        useCallback(() => {
            if ( route.params ) {
                setUtilityReturn( route.params.utilityReturn );
                //console.log(utilityReturn);
            }
        }, [route])
    );


    return (

        <View style = { styles.home }>

            <TextInput style = { styles.border }
                placeholder = { 'input data at vehicle screen' }
                value = { vehicleReturn }
                onChangeText = { setVehicleReturn }
            />

            <Button style = {{fontSize: 30}}
                title = "Vehicle"
                onPress = {() => navigation.navigate('Vehicle')}
            />

            <TextInput style = { styles.border }
                placeholder = { 'input data at utility screen' }
                value = { utilityReturn }
                onChangeText = { setUtilityReturn }
            />

            <Button style = {{fontSize: 30}}
                title = "Utility"
                onPress = {() => navigation.navigate('Utility')}
            />

            <TextInput style = { styles.border }
                placeholder = { 'input data at air travel screen' }
                value = { airReturn }
                onChangeText = { setAirReturn }
            />

            <Button style = {{fontSize: 30}}
                title = "Air Travel"
                onPress = {() => navigation.navigate('Air Travel')}
            />

            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>

            <Button
                title = "Results"
                onPress = {() => navigation.navigate('Results', {
                    vehNum: parseInt(vehicleReturn, 10),
                    utilNum: parseInt(utilityReturn, 10),
                    airNum: parseInt(airReturn, 10),
                })}
            />

            </View>

        </View>
    );
}




const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    border: {
        flex: 1,
        backgroundColor: 'white',
        width: 100,
        height: 10,
        fontSize: 10,
        alignItems: 'center',
        borderColor: 'black',
    },
});
