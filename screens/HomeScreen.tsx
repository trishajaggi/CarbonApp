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
                setVehicleReturn( route.params.vehicleReturn + ' CO2e');
            }
        }, [ route ])
    );

    useFocusEffect(
        useCallback(() => {
            if ( route.params ) {
                setAirReturn( route.params.airReturn + ' CO2e');
            }
        }, [ route ])
    );

    useFocusEffect(
        useCallback(() => {
            if ( route.params ) {
                setUtilityReturn( route.params.utilityReturn + ' CO2e');
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

            <Button
                title = "Vehicle"
                onPress = {() => navigation.navigate('Vehicle')}
                color = "green"
            />

            <TextInput style = { styles.border }
                placeholder = { 'input data at utility screen' }
                value = { utilityReturn }
                onChangeText = { setUtilityReturn }
            />

            <Button
                title = "Utility"
                onPress = {() => navigation.navigate('Utility')}
                color = "green"
            />

            <TextInput style = { styles.border }
                placeholder = { 'input data at air travel screen' }
                value = { airReturn }
                onChangeText = { setAirReturn }
            />

            <Button
                title = "Air Travel"
                onPress = {() => navigation.navigate('Air Travel')}
                color = "green"
            />

            <View style = { styles.end }>

            <Button
                title = "Results"
                onPress = {() => navigation.navigate('Results', {
                    vehNum: parseInt(vehicleReturn, 10),
                    utilNum: parseInt(utilityReturn, 10),
                    airNum: parseInt(airReturn, 10),
                })}
                color = "green"
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
        width: 200,
        height: 10,
        fontSize: 30,
        alignItems: 'center',
        borderColor: 'black',
    },

    end: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});
