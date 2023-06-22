import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { PostItem } from "./post/postItem";

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor="green" />
      <PostItem></PostItem>
    </View>
  );
}
