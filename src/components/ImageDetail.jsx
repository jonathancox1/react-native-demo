import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Text style={styles.textHeading}>{props.title}</Text>
            <Image style={styles.image} source={props.imageSource} />
            <Text>Image Score: {props.imgScore}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 30,
        textAlign: 'center',
    },
    image: {
        alignItems: 'center',
    }
})

export default ImageDetail;