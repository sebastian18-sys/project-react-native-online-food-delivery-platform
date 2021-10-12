import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons"
// import { AntDesign } from "react-native-vector-icons/AntDesign"

export default function SearchBar({cityHandler}) {
    return (
        <View style={style.searchContainer}>
            <GooglePlacesAutocomplete query={{key: "AIzaSyD9fBKeVhssSh4g1tHTaBjgQWgW2S16qvg"}} onPress={(data, details = null) => {
                console.log(data.description);
                const city = data.description.split(',')[0];
                cityHandler(city);
            }} placeholder="Search" styles={{
                textInput: {
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    fontWeight: "bold",
                    marginTop: 7
                },
            
                textInputContainer: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10
                }
            }} renderLeftButton={() => (
                <View style={style.leftIcon}>
                    <Ionicons name='location-sharp' size={24} />
                </View> 
            )} renderRightButton={() => (
                <View style={style.rightIcon}>
                    <AntDesign name='clockcircle' size={11} style={{marginRight: 6}} />
                    <Text>Search</Text>
                </View>
            )} />
        </View>
    )
}

const style = StyleSheet.create({
    searchContainer: {
        marginTop: 15,
        flexDirection: "row"
    },

    leftIcon: {
        marginLeft: 10
    },

    rightIcon: {
        flexDirection: "row",
        marginRight: 8,
        backgroundColor: "#fff",
        padding: 9,
        borderRadius: 30,
        alignItems: "center"
    }
})