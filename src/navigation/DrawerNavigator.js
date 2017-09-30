// React
import React from "react";
// React-Native-Navigation
import { DrawerNavigator } from "react-navigation";
// Routes
import HomeNavigator from "./HomeNavigator";
import CalendarScreen from "./../screens/CalendarScreen/CalendarScreen";
import WalletScreen from "./../screens/WalletScreen/WalletScreen"
// Components
import Drawer from "./components/Drawer";

const routes = {
  Home: { screen: HomeNavigator },
  Calendar: { screen: CalendarScreen },
  Wallet: { screen: WalletScreen}
};

const navigationOptions = {
  drawerWidth: 250,
  contentComponent: props => <Drawer {...props} />
};

export default DrawerNavigator(routes, navigationOptions);
