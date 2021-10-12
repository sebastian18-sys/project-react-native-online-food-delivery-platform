import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ViewCart() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent="center", flexDirection: "row", position: "absolute", bottom: 80, zIndex: 999}}>
            <View style={style.viewCont}>
                <TouchableOpacity style={style.vcContanier}>
                    <Text style={style.vcInfo}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>  
    )
}

const style= StyleSheet.create({

    viewCont: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },

    vcContanier: {
        marginTop: 20,
        backgroundColor: "#000",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: "relative"
    },

    vcInfo: {
        color: "#fff",
        fontSize: 20
    }
})