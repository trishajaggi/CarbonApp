/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TipsScreen ({navigation}) {
    return (
        <View>
            <Text style = { styles.paragraph} >
                - Incorporate walking or biking to some of your regular short-trip destinations{'\n'}
                - Turn off lights and unplug devices when you're not using them {'\n'}
                - Reuse and Recycle {'\n'}
            </Text>
            <Button
                title = "Home"
                onPress = {() => navigation.navigate('Home')}
                color = "green"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'left',
    },
});
