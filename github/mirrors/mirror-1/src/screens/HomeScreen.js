import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen!</Text>
      <Button
        onPress={() => navigation.navigate('Components')} 
        title="Go to Components" 
      />
      <Button
        onPress={() => navigation.navigate('List')} 
        title="Go to List" 
      />
      <Button
        onPress={() => navigation.navigate('Image')} 
        title="Go to Image" 
      />
      <Button
        onPress={() => navigation.navigate('Counter')} 
        title="Go to Counter" 
      />
      <Button
        onPress={() => navigation.navigate('Color')} 
        title="Go to Color" 
      />
      <Button
        onPress={() => navigation.navigate('Square')} 
        title="Go to Square" 
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
