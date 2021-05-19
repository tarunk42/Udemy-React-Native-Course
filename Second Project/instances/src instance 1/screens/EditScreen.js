import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context } from '../context/BlogContext';


const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);


    return (
        <View>
            <Text>Edit Screen - {navigation.getParam('id')}</Text>
            <Text>Edit Title:</Text>
            <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
            <Text>Edit Content:</Text>
            <TextInput value={content} onChangeText={(newContent) => setContent(newContent)}  />
            <Button title="Update Post"/>
        </View>
    );
};

export default EditScreen;

const styles = StyleSheet.create({});
