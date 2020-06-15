import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'friend1' },
        { name: 'friend2' },
        { name: 'friend3' },
        { name: 'friend4' },
        { name: 'friend5' },
        { name: 'friend6' },
        { name: 'friend7' },
        { name: 'friend8' },
        { name: 'friend9' },
    ]

    return (
        // flatlist instead of map()
        <FlatList
            // scrolls horizontally
            // horizontal
            // hides scrollbar
            showsHorizontalScrollIndicator={false}
            //  keyExtractor creates a key for each friend element rendered in FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                // element === {item: {name: 'friend1'}, index: 0}
                // item === { name: 'friend1' }
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 50,
        textAlign: 'center',

    }
});

export default ListScreen;