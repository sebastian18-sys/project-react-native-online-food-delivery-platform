import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
    price: "$$",
    reviews: "1500",
    rating: 4.5,
    categories: [{title: 'Thai'}, {title: "Comfort Food"}]

};

export default function About(props) {

    const {name, image, price, reviews, rating, categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" · ");

    const description = `${formattedCategories} ${price ? ' · ' + price : ""} · 🎫 · ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
};

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={style.RestImageContainer} />
);

const RestaurantName = (props) => (
    <Text style={style.titleContainer}>{props.name}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={style.descriptionContainer}>{props.description}</Text>
);

const style = StyleSheet.create({
    RestImageContainer: {
        width: "100%",
        height: 180
    },

    titleContainer: {
        fontSize: 29,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 15
    },

    descriptionContainer: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15
    }
});