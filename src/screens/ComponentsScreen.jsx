import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const greeting = "hi there, greeting"
    const greeting1 = <Text>Hello there!</Text>
    const name = 'Jon'

    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.textName}>My name is {name}!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        textAlign: 'center',
    },
    textName: {
        fontSize: 30,
        textAlign: 'center',
    }
});

export default ComponentsScreen;