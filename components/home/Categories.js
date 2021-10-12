import React from "react";
import { View, Text, Image, StyleSheet, ScrollView} from "react-native";

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts"
    },
]

export default function Categories() {
    return (
        <View style={style.categoriesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* Loops Start */}
                {items.map((item, index) => (
                    <View key={index} style={{alignItems: "center", marginRight: 30}}>
                        <Image source={item.image} style={style.categoriesIcons} />
                        <Text style={style.categoriesText}>{item.text}</Text>
                    </View>
                ))}
                {/* End Loop */}
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({

    categoriesContainer: {
        backgroundColor: "#fff",
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20
    },

    categoriesIcons: {
        width: 50,
        height: 40,
        resizeMode: 'contain'
    },

    categoriesText: {
        fontSize: 13, 
        fontWeight: "bold",
    }
})