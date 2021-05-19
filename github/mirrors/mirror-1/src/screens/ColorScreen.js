import React from 'react';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const ColorScreen = () => {
    
    const [colors, setColors] = useState([]);
    
    
    return (
        <View>
            <Button title="Add a color" onPress={() => {
                    setColors([...colors, randomRgb()]);
                    }}
                />
            
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{...styles.baseColorStyle, backgroundColor: item }} />
                }}
            />
        </View>
    );
};


const randomRgb = () => {
    const red = Math.floor(Math.random() * 265);
    const green = Math.floor(Math.random() * 265);
    const blue = Math.floor(Math.random() * 265);

    return `rgb(${red}, ${green}, ${blue})`;
}

export default ColorScreen;

const styles = StyleSheet.create({
    baseColorStyle: {
        height: 100,
        width: 100,
    },
});
