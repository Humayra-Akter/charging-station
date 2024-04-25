import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import ProfileScreen from "../Screen/ProfileScreen/ProfileScreen";
import FavoriteScreen from "../Screen/FavoriteScreen/FavoriteScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => {
            <Ionicons name="search-sharp" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="favorite" component={FavoriteScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
