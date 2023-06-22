//MyComponent.js
import React from "react";
import { Image, Text, View } from "react-native";

const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";

export class PostItem extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: "auto", height: 250 }}
        />
        <View className="bg-red-400">
          <Text className="bg-red-500">hello</Text>
        </View>
      </View>
    );
  }
}
