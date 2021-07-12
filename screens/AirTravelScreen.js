/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AirTravelScreen ({navigation}) {
    const [miles, setMiles] = useState(0);


    let placeholder = 'Enter average miles traveled per month';
    return (
        <View>
            <TextInput style = {{height: 60, fontSize: 20}}
                placeholder = {placeholder}
                value = { miles }
                onChangeText = { setMiles }
            />

            <Button style = {{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
                title = "Done"
                onPress = {() => navigation.navigate('Home')}
            />
        </View>
    );
}