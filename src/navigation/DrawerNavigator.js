// React
import React from "react";
// React-Native-Navigation
import { DrawerNavigator } from "react-navigation";
// Routes
import HomeNavigator from "./HomeNavigator";
// Components
import Drawer from "./components/Drawer";

const routes = {
  Home: { screen: HomeNavigator }
};

const navigationOptions = {
  drawerWidth: 250,
  contentComponent: props => <Drawer {...props} />
};

export default DrawerNavigator(routes, navigationOptions);
