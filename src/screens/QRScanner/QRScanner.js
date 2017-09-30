// React
import React, { Component } from "react";
// React-Native
import { Image, StyleSheet, Text, View } from "react-native";
// Components
import NavBar from "./../../components/NavBar";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class QRScanner extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar
                    buttonOnPress={() => {
                        this.props.navigation.navigate("DrawerOpen");
                    }}
                />
                <Text>QRScanner</Text>
            </View>
        );
    }
}
