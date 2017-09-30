// React
import React, { Component } from "react";
// React-Native
import {
    Image,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const ListUsers = ({ navigation, ...props }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigation.navigate("UserExp");
            }}
        >
            <Image
                source={require("./../../images/PIXapp_png.png")}
                style={{ height: "100%", width: "100%" }}
            />
        </TouchableOpacity>
    );
};

export default ListUsers;
