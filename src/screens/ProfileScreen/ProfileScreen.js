// React
import React, { Component } from "react";
// React-Native
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
// Components
import NavBar from "./../../components/NavBar";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class ProfileScreen extends Component {
  render() {
    return (
      <View stlye={styles.container}>
        <NavBar
          buttonOnPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
        />
        <View style={{ alignItems: 'center' }}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 100 }}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/9087231?v=3' }}
        />
        <Text style={{ fontSize: 30 }}>Penélope Gonçalves</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 16, height: 16 }}
            source={require('./../../images/github.png')}
          />
          <Text> penelopeg</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 16, height: 16 }}
            source={require('./../../images/twitter.png')}
          />
          <Text> penelope_tg</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 16, height: 16 }}
            source={require('./../../images/location.png')}
          />
          <Text> Faro, Portugal</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 16, height: 16 }}
            source={require('./../../images/briefcase.png')}
          />
          <Text> Contentserv</Text>
        </View>
        <View>
          <Text>
          A 23 years old full-stackish developer trying to find the answer to life (42), 
          who loves to program all things and to eat.
          </Text>
        </View>

        <View>
          <Text>Badges</Text>
        </View>

      </View>
    );
  }
}
