import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text style={styles.textHeading}>{color}</Text>
            <Button title={`${color} +`} onPress={() => onIncrease()}></Button>
            <Button title={`${color} -`} onPress={() => onDecrease()}></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default ColorCounter;