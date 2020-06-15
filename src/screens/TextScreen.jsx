import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text style={styles.text}>Enter Name: </Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="text input"
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={styles.text}>My name is : {name}</Text>
            {name.length < 4 ? <Text>Need to be 5 characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        fontSize: 30,
    },
    text: {
        fontSize: 30
    }
})

export default TextScreen;