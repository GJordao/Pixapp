// React
import React from "react";
// React-Native-Navigation
import { DrawerNavigator } from "react-navigation";
// Routes
import HomeNavigator from "./HomeNavigator";
import CalendarScreen from "./../screens/CalendarScreen/CalendarScreen";
import ProfileScreen from "./../screens/ProfileScreen/ProfileScreen";
// Components
import Drawer from "./components/Drawer";

const routes = {
  Home: { screen: HomeNavigator },
  Profile: { screen: ProfileScreen },
  Calendar: { screen: CalendarScreen }
};

const navigationOptions = {
  drawerWidth: 250,
  contentComponent: props => <Drawer {...props} />
};

export default DrawerNavigator(routes, navigationOptions);
