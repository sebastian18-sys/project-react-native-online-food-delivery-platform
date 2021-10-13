import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OrderItem({item}) {

    const {title, price} = item;

    return (
        <View style={styles.OrderItemContanier}>
            <Text style={styles.OrderItemTitle}>{title}</Text>
            <Text style={styles.OrderItemPrice}>{price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    OrderItemContanier: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999"
    },

    OrderItemTitle: {
        fontWeight: '600',
        fontSize: 16,
    },

    OrderItemPrice: {
        opacity: 0.7,
        fontSize: 16,
    }
})
