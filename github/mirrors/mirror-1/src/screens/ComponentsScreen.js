import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Bye there!';
    const meeting = <Text>Nice to meet you!</Text>
    return (
        <View>
            <Text style={styles.textStyle}>Component Section</Text>
            <Text style={styles.subHeaerStyle}>{greeting}</Text>
            {meeting}
        </View>
    );
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
    },
    subHeaerStyle: {
        fontSize: 30.
    }
});


export default ComponentsScreen;
