import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function ViewCart() {

    const [modalVisible, setModalVisible] = useState(false);

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

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

    const checkoutModalContent = () => {
        return (
            <View style={style.modalContanier}>
                <View style={style.modalCheckoutContanier}>
                    <Text style={style.restaurantName}>{restaurantName}</Text>
                    {items.map((item, index) => (
                        <OrderItem key={index} item={item} />
                    ))}
                    <View style={style.subtotalContainer}>
                        <Text style={style.subtotalText}>Subtotal</Text>
                        <Text>{totalUSD}</Text>
                    </View>
                    <View style={style.buttonContanier}>
                        <TouchableOpacity style={style.button} onPress={() => setModalVisible(false)} >
                            <Text style={style.buttonText}>Checkout</Text>
                            <Text style={{position: "absolute", right: 20, color: "#fff", fontSize: 15, top: 17}}>{total ? totalUSD : ""}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    };

    return (
        <>
            <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)} >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", position: "absolute", bottom: 130, zIndex: 999}}>
                    <View style={style.viewCont}>
                        <TouchableOpacity style={style.vcContanier} onPress={() => setModalVisible(true)} >
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
    },

    modalContanier: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)"
    },

    modalCheckoutContanier: {
        backgroundColor: "#fff",
        padding: 16,
        height: 500,
        borderWidth: 1
    },

    restaurantName: {
        textAlign: "center",
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10
    },

    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },

    subtotalText: {
        textAlign: "left",
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },

    buttonContanier: {
        flexDirection: "row",
        justifyContent: "center"
    },

    button: {
        marginTop: 30,  
        backgroundColor: "#000",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: "relative",
        // flexDirection: "row",
        // justifyContent: "flex-end"
    },

    buttonText: {
        color: "#fff",
        fontSize: 20,
        // marginRight: 55
    },

    
})