import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import { setProvidesAudioData } from 'expo/build/AR';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: 0, green: 0, blue: 0 }
    // action === { type: 'change_red' payload: 15 }

    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload }
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload }
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;

    return (
        <View>
            <View style={{ height: 150, width: 400, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
            <Text style={styles.textHeading}>rgb({red}, {green}, {blue})</Text>
            <ColorCounter color="Red" onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })} />
            <ColorCounter color="Green" onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })} />
            <ColorCounter color="Blue" onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })} />
        </View>
    )
}

const styles = StyleSheet.create({
    textHeading: {
        textAlign: 'center',
        fontSize: 30,
    }
})

export default SquareScreen;