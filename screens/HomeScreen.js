/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';


export default class HomeScreen extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            carCO2: 0,
            utilityCO2: 0,
            airCO2: 0,
        };
    }
    render () {
        let items = ['Vehicle', 'Utility', 'Air Travel'];
    return (
        <View style = { styles.home }>
            <FlatList
                contentContainerStyle = {{flexGrow: 1}}
                data = { items }
                renderItem = { ({ item }) => (
                    <TouchableOpacity onPress = {() => {
                        if (item === 'Vehicle') {
                            this.props.navigation.navigate( 'Vehicle' );
                        } else if (item === 'Utility'){
                            this.props.navigation.navigate( 'Utility' );
                        } else {
                            this.props.navigation.navigate( 'Air Travel' );
                        }
                    }
                    }
                    >
                    <Text>
                        { item }
                   </Text>
                   </TouchableOpacity>
                )}
            />
            <Button
                title = "Results"
                onPress = {() => this.props.navigation.navigate('Results')}
            />
        </View>
    );
    }
}



const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});
