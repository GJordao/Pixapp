// React
import React, { Component } from "react";
// React-Native
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
// Components
import NavBar from "./../../components/NavBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01a7ee',
  },

  align: {
    justifyContent: 'center',
    //alignItems: 'center',
  },

  infoContainer: {
    backgroundColor: '#fdcf1a',
    marginHorizontal: 50,
    marginVertical: 15,
    elevation: 10
  },

  currencyContainer: {
    backgroundColor: 'white',
    marginHorizontal: 50,
    marginBottom: 20,
    elevation: 10
  },

  h1: {
    fontSize: 30,
    fontWeight: '300',
    fontFamily: 'Lato,sans-serif',
    color: '#333',
    marginLeft: 50,
    marginTop:30,
  },

  h2: {
    fontSize: 20,
    fontWeight: '300',
    color: '#333',
    textAlign: 'left',
    marginLeft:20
  },

  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },

  conversion: {
    fontSize: 20,
    fontWeight: '300',
    color: '#333',
    textAlign: 'left',
  },

  conversion2: {
    fontSize: 20,
    fontWeight: '300',
    color: '#333',
    marginLeft: 20
  },

  image: {
    height: 70,
    width: '100%',
    resizeMode: 'contain',
    marginTop: 20
  },

  qr: {
    height:200,
    width: 200,
    resizeMode: 'contain'
  },

  button: {
    marginHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: '#ea282e',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    elevation: 10
   }
});

export default class WalletScreen extends Component {
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <NavBar
          buttonOnPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
        />
        <View style={[styles.align]}>
          <Image source={require('./../../images/mywallet.png')} style={styles.image}/>
        </View>

        <Text style={[styles.align, styles.h1]}>Wallet Info</Text>
        <View style={[styles.infoContainer, styles.align]}>
          <View style={{marginTop:10, marginLeft:30}}>
            <Text style={[styles.h3]}>Account Balance:</Text>
            <Text style={[styles.h2]}>1000 ETH</Text>
          </View>
          <View style={{marginTop:10, marginLeft:30, marginBottom: 10}}>
            <Text style={[styles.h3]}>Token Balance:</Text>
            <Text style={[styles.h2]}>400 EXP</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#333', textAlign: 'left', marginTop: 10}}>Your Address:</Text>
          </View>
          <View style={{alignItems: 'center', marginTop:5, paddingBottom:20}}>
            
            <Image source={require('./../../images/qr_code.png')} style={styles.qr}/>
          </View>
        </View>

        <View>
          <View style={[styles.currencyContainer, styles.align]}>
            <View style={{marginTop:10, marginLeft:30}}>
              <Text style={[styles.h3]}>Equivalent Values:</Text>
              <View style={{flexDirection: 'row', marginTop:10}}>
                <Text style={[styles.conversion]}>BTC: 70.5</Text>
                <Text style={[styles.conversion2]}>       REP: 14,340</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop:10}}>
                <Text style={[styles.conversion]}>USD: $295,09</Text>
                <Text style={[styles.conversion2]}>EUR: €248,96</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop:10, paddingBottom: 15}}>
                <Text style={[styles.conversion]}>CHF: 298,45</Text>
                <Text style={[styles.conversion2]}>  GBP: £221,35</Text>
              </View>
          </View>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Text style = {styles.button}>Invest</Text>
         </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}