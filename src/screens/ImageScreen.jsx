import React from 'react';
import ImageDetail from '../components/ImageDetail';
import { View, Text, StyleSheet } from 'react-native';

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.textHeading}>Image Screen</Text>
            <ImageDetail
                title="Forest"
                imageSource={require('../../assets/forest.jpg')}
                imgScore={'10'} />
            <ImageDetail
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}
                imgScore={'7'} />
            <ImageDetail
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                imgScore={'4'} />
        </View>
    )
};

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 30,
        textAlign: 'center',
    }
})

export default ImageScreen;