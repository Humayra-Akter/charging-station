import { View, Text, Image } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 100, height: 80, objectFit: "contain" }}
      />
      <Image
        source={require("../../../assets/images/login.jpg")}
        style={{ width: 400, height: 200, objectFit: "cover" }}
      />
    </View>
  );
}
