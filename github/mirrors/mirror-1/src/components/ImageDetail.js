import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
    return (
        <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image Score: {score}</Text>
        </View>
    );
};

export default ImageDetail;

const styles = StyleSheet.create({});
