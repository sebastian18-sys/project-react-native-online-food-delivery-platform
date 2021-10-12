import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {

    const items = useSelector((state) => state.cartReducer.selectedItems.items);

    // "$10.00"
    // replace('$', '') -> "10.00"
    // Number("10.00") -> 10.00
    // map -> [10.00, 20.00, etc]
    // reduce -> 10.00 + 20.00 + ...
    // 

    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    console.log(totalUSD);

    return (
        <>
            {total ? (
                <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", position: "absolute", bottom: 130, zIndex: 999}}>
                    <View style={style.viewCont}>
                        <TouchableOpacity style={style.vcContanier}>
                            <Text style={style.vcInfo}>View Cart</Text>
                            <Text style={{color: "#fff", fontSize: 20}}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>  
            ) : (
                <></>
            )}
        </>
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
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 15,
        borderRadius: 30,
        width: 300,
        position: "relative"
    },

    vcInfo: {
        color: "#fff",
        fontSize: 20,
        marginRight: 30
    }
})