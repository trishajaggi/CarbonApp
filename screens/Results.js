/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';

export default function Results ({navigation}) {
    const [total, setTotal] = useState(0);

    return (
        <View>
            <Text style = {{ fontSize: 20 }}>
                {total}
            </Text>
            <Button
                title = "Tips for reducing your footprint"
                onPress = {() => navigation.navigate('Tips')}
            />
        </View>
    );
}