/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';


export default function HomeScreen ({navigation}) {
    const [vehicleReturn, setVehicleReturn] = useState('');
    const [utilityReturn, setUtilityReturn] = useState('');
    const [airReturn, setAirReturn] = useState('');
    return (
        <View style = { styles.home }>

            <TextInput style = { styles.border }

            />

            <Button style = {{fontSize: 30}}
                title = "Vehicle"
                onPress = {() => navigation.navigate('Vehicle')}

            />

            <TextInput style = { styles.border }
                placeholder = {''}
            />

            <Button style = {{fontSize: 30}}
                title = "Utility"
                onPress = {() => navigation.navigate('Utility')}

            />

            <TextInput style = { styles.border }
                placeholder = {''}
            />

            <Button style = {{fontSize: 30}}
                title = "Air Travel"
                onPress = {() => navigation.navigate('Air Travel')}

            />

            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>

            <Button
                title = "Results"
                onPress = {() => navigation.navigate('Results')}
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
        backgroundColor: 'blue',
        width: 100,
        height: 10,
        fontSize: 30,
        alignItems: 'center',
        borderColor: 'black',
    },
});
