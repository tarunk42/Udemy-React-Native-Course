import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost =state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    
    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <View style={styles.ContentBox}>
                <Text style={styles.content}>{blogPost.content}</Text>
            </View>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity 
                onPress={() => 
                    navigation.navigate('Edit', { id: navigation.getParam('id') })
                }
            >
                <EvilIcons name="pencil" size={35} color="black" />
            </TouchableOpacity>
        )
    };
};


export default ShowScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft:10,
        marginTop: 10,
    },
    content: {
        fontSize: 18,
        color: '#666666',
    },
    ContentBox: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 3,
        margin: 10,
        padding: 10,
    }
});
