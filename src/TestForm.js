import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, View, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

const Separator = () => (
    <View style={styles.separator} />
  );

export default function TestForm() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text>Welcome to the app.</Text>
            <Text style="display: none;" />
            <Image 
                fadeDuration={1000}            
                source={{ 
                    width: 200,
                    height: 200,
                    uri: "https://picsum.photos/seed/picsum/200" }}/>
            <Button onPress={() => Alert.alert("Button pressed")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
        </SafeAreaView>


    )

}







const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }, 
  });
  