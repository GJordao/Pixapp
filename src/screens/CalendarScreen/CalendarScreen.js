// React
import React, { Component } from "react";
// React-Native
import { ScrollView, StyleSheet, Text, View } from "react-native";
// Components
import NavBar from "./../../components/NavBar";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class CalendarScreen extends Component {
  render() {
    return (
      <View stlye={styles.container}>
        <NavBar
          buttonOnPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
        />
        <Text>Calendar</Text>
      </View>
    );
  }
}
