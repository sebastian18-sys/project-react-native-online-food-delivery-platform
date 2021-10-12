import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs(props) {

    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <View style={styles.headerContain}>
            <HeaderButton Text="Delivery" BtnColor="black" TextColor="white" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <HeaderButton Text="Pickup" BtnColor="white" TextColor="black" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.Text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
    }} onPress={() => props.setActiveTab(props.Text)}>
        <Text style={{
            color: props.activeTab === props.Text ? "white" : "black",
            fontSize: 15,
            fontWeight: "bold"
        }}>{props.Text}</Text>
    </TouchableOpacity>
    
)

const styles = StyleSheet.create({
    headerContain: {
        flexDirection: "row",
        alignSelf: "center"
    },
});