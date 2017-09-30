// React
import React, { Component } from "react";
// React-Native
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const ListProjects = ({navigation, ...props}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate("ProjectExp")}} >
            <Image
                source={require("./../../images/PIXapp_png.png")}
                style={{ height: "100%", width: "100%" }}
            />
        </TouchableOpacity>
    );
};

export default ListProjects;
