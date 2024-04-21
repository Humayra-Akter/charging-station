import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

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
          one click
        </Text>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 16,
            display: "flex",
            borderRadius: 99,
            marginTop: 28,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 16,
            }}
          >
            Login with GOOGLE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
