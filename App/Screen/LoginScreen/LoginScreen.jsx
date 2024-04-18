import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function LoginScreen() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 100, height: 80, objectFit: "contain" }}
      />
      <Image
        source={require("../../../assets/images/login.png")}
        style={{ width: "100%", height: 260, objectFit: "cover" }}
      />
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Yur ultimate Charging Station finder App
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit",
            textAlign: "center",
            marginTop: 16,
            color: Colors.GRAY,
          }}
        >
          Find EV charging station near you, plan trip and so much more just in
          one clck
        </Text>
      </View>
    </View>
  );
}
