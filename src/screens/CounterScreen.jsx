import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    // state === {count: numger}
    // action === {type: 'increment || 'decrement, payload: 1}
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        default:
            return;
    }
}

const CounterScreen = () => {
    // array destructuring, the variable, the setter function
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <View>
            <Text style={styles.textStyle}>Current Count</Text>
            <Text style={styles.textStyle}>{state.count}</Text>
            <Button
                title="Increase"
                onPress={() => {
                    // dont modify state directly!
                    // counter++;
                    dispatch({ type: 'increment', payload: 1 })
                }}
            />
            <Button
                title="Increase"
                onPress={() => {
                    dispatch({ type: 'decrement', payload: 1 })
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 50,
    }
})

export default CounterScreen;