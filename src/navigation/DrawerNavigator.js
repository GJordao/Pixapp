// React
import React from "react";
// React-Native-Navigation
import { DrawerNavigator } from "react-navigation";
// Routes
import HomeNavigator from "./HomeNavigator";
import CalendarScreen from "./../screens/CalendarScreen/CalendarScreen";
import FavoriteScreen from "./../screens/FavoritesScreen/FavoritesScreen";
// Components
import Drawer from "./components/Drawer";

const routes = {
    Home: { screen: HomeNavigator },
    Calendar: { screen: CalendarScreen },
    Favorites: { screen: FavoriteScreen }
};

const navigationOptions = {
    drawerWidth: 250,
    contentComponent: props => <Drawer {...props} />
};

export default DrawerNavigator(routes, navigationOptions);
