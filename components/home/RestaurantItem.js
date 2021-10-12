import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";


export const localRestaurants = [
    {
        name: "Beachside Bar",
        image: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5
    },
    {
        name: "Benihana",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7
    },
    {
        name: "Peruvian's Grill",
        image: "https://zellersrestaurants.com/wp-content/uploads/2019/11/Restaurant.jpg",
        price: "$$",
        reviews: 1244,
        rating: 4.8
    },
];


export default function RestaurantItem({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity key={index} activeOpacity={1} style={{marginBottom: 30}} onPress={() => navigation.navigate("RestaurantDetail", {
                    name: restaurant.name,
                    image: restaurant.image_url,
                    price: restaurant.price,
                    reviews: restaurant.review_count,
                    rating: restaurant.rating,
                    categories: restaurant.categories
                })} >
                    <View key={index} style={style.mainContainer}>
                        {/* Restaurant Image */}
                        <RestaurantImage image={restaurant.image_url} />
                        {/* Restaurant Info */}
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating}  />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image source={{uri: props.image}} style={style.image}  />
        <TouchableOpacity style={style.icon}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={style.infoContainer}>
        <View>
            <Text style={style.infoTextUp}>{props.name}</Text>
            <Text style={style.infoTextDown}>30-45 min</Text>
        </View>
        <View style={style.infoTextRight}>
            <Text>{props.rating}</Text>
        </View>
    </View>
    
);

const style = StyleSheet.create({

    mainContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "#fff"
    },  

    image: {
        width: "100%",
        height: 180
    },

    icon: {
        position: "absolute",
        right: 20,
        top: 20
    },

    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },

    infoTextUp: {
        fontSize: 15,
        fontWeight: "bold"
    },

    infoTextDown: {
        fontSize: 13,
        color: "gray"
    },

    infoTextRight: {
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    }
})