import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 22 },
        { name: 'Friend #3', age: 21 },
        { name: 'Friend #4', age: 24 },
        { name: 'Friend #5', age: 29 },
        { name: 'Friend #6', age: 24 },
        { name: 'Friend #7', age: 23 },
        { name: 'Friend #8', age: 27 },
        { name: 'Friend #9', age: 29 },
        { name: 'Friend #10', age: 25 },
    ];

    return (
        <View>
            <FlatList 
                // horizontal={false}
                // showsHorizontalScrollIndicator={false} 
                keyExtractor = {friend => friends.name}
                data={friends} 
                renderItem={({ item }) => {
                    //element === {item: {name: 'Friend #1'}, index: 0}
                    //{item} === {name: 'Friend #1'}
                    return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
                }}
            />
        </View>
    );
};

export default ListScreen;

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});
