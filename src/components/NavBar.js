// React
import React from "react";
// React-Native
import { Image, Text, TouchableOpacity, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ea282e",
    height: 70,
    flexDirection: "row"
  },
  burger: {
    height: 30,
    resizeMode: "stretch",
    tintColor: "white",
    width: 50
  },
  logo: {
    height: 50,
    resizeMode: "contain",
    width: 70
  },
  logContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginLeft: -50
  }
});

export default (NavBar = ({ buttonOnPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          buttonOnPress && buttonOnPress();
        }}
      >
        <Image
          source={require("./../images/android-drawer.png")}
          style={styles.burger}
        />
      </TouchableOpacity>
      <View style={styles.logContainer}>
        <Image
          source={require("./../images/PIXapp_font.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
});
