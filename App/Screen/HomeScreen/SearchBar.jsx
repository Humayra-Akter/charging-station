import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function SearchBar({ searchedLocation }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 16,
        paddingHorizontal: 6,
        backgroundColor: Colors.WHITE,
        borderRadius: 6,
      }}
    >
      <Ionicons
        name="location-sharp"
        size={24}
        color={Colors.GRAY}
        style={{ paddingTop: 10 }}
      />
      <GooglePlacesAutocomplete
        placeholder="Search Charging Station"
        fetchDetails={true}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          searchedLocation(details?.geometry?.location);
        }}
        query={{
          key: "AIzaSyDelrQZavcv-2Cx0runmUCFaFuA8pV7jnU",
          language: "en",
        }}
      />
    </View>
  );
}
