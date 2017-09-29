import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "rgb(13,13,13)",
    flex: 1
  },
  logo: {
    height: 100,
    resizeMode: "contain",
    width: 100
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  separator: {
    marginTop: 10,
    marginBottom: 10,
    height: 1,
    width: "100%",
    backgroundColor: "#ea282e"
  },
  text: {
    marginLeft: 10,
    fontSize: 25
  }
});

export default class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  renderSeparator() {
    return <View style={style.separator} />;
  }

  renderRoutes(routeName) {
    const color = routeName === this.props.activeItemKey ? "white" : "#fdcf1a";
    return <Text style={[style.text, { color: color }]}>{routeName}</Text>;
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image
            source={require("./../../images/PIXapp_font.png")}
            style={style.logo}
          />
        </View>
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  if (this.props.activeItemKey !== item.routeName) {
                    this.props.navigation.navigate(item.routeName);
                  } else {
                    this.props.navigation.navigate("DrawerClose");
                  }
                }}
              >
                {this.renderRoutes(item.routeName)}
              </TouchableOpacity>
              {this.renderSeparator()}
            </View>
          );
        })}
      </View>
    );
  }
}
