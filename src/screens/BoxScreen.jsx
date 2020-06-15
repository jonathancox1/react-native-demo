import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Child1</Text>
                <Text style={styles.textStyle}>Child2</Text>
                <Text style={styles.textStyle}>Child3</Text>
            </View>
            <View style={styles.fill}><Text>test</Text></View>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
    },
    fill: {
        ...StyleSheet.absoluteFillObject,
        borderWidth: 5,
    }
})

export default BoxScreen;