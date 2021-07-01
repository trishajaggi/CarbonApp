/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class TipsScreen extends Component {
  render() {
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
                onPress = {() => this.props.navigation.navigate('Home')}
            />
        </View>
    );
    }
}

const styles = StyleSheet.create({
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'left',
    },
});
