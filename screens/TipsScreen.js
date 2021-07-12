/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TipsScreen ({navigation}) {
    return (
        <View>
            <Text style = { styles.paragraph} >
                - {'\n'}
                - {'\n'}
                - {'\n'}
                -
            </Text>
            <Button
                title = "Home"
                onPress = {() => navigation.navigate('Home')}
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
