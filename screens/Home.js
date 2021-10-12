import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem, { localRestaurants } from "../components/home/RestaurantItem";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY = "YGiF_K8IiAJDhdE_7dCu_DlOgjCuOsi1dyyZkcDS634P_nRJ-_mdCBQ4dZC3je_HHKVY6zhHjBKQ-zko5R3ldxdEAzVRRCZG2Sn8WENEJohETrNNqTptAcJZ2ylhYXYx";

export default function Home({ navigation }) {

    // State Restaurants
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    // State Cities
    const [city, setCity] = useState("San Francisco");
    // State filter Delivery/Pickup
    const [activeTab, setActiveTab] = useState("Delivery");
    
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;  
    
    
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
    
        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setRestaurantData(
            json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>  
            <Divider width={1} />
            <BottomTabs />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        flex: 1
    },

    containerHeader: {
        backgroundColor: "#fff",
        padding: 15
    }
})