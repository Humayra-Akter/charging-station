import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchBar() {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search Charging Station"
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: "AIzaSyDelrQZavcv-2Cx0runmUCFaFuA8pV7jnU",
        language: "en",
      }}
    />
  );
}
