/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useFocusEffect} from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AirTravelScreen ({ navigation }) {

    let [miles, setMiles] = useState( '' );
    let [total, setTotal] = useState( 0 );

    let placeholder = 'Enter average miles traveled per month';

    const calculate = useCallback(() =>{
        let num = parseInt( miles, 10 );
        num = num * 0.24;
        setTotal( num );
    }, [ miles ]);

    useFocusEffect(
        useCallback(() => {
            calculate();
        },[ calculate ])
    );

    return (
        <View>
            <TextInput style = { styles.text }
                placeholder = { placeholder }
                value = { miles }
                onChangeText = { setMiles }
            />

            <Button
                title = "Done"
                onPress = { () => navigation.navigate( 'Home', {
                    airReturn: total.toString(),
                    })}
                color = "green"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        height: 60,
        fontSize: 20,
    },
});