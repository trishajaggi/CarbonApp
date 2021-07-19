/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useCallback} from 'react';
import { View, Text, Button } from 'react-native';

export default function Results ({navigation, route }) {
    const [total, setTotal] = useState(0);


    const calculate = useCallback(() => {
        let num = 0;
        if ( route.params ) {
            num = route.params.vehNum + route.params.utilNum + route.params.airNum;
        }
        setTotal(num);
    }, [route]);

    useFocusEffect(
        useCallback(() => {
            calculate();
        },[ calculate ])
    );

    return (
        <View>
            <Text style = {{ fontSize: 20 }}>
                {total}
            </Text>
            <Button
                title = "Tips for reducing your footprint"
                onPress = {() => navigation.navigate('Tips')}
                color = "green"
            />
        </View>
    );
}