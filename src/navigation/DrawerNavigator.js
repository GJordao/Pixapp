// React
import React from "react";
// React-Native-Navigation
import { DrawerNavigator } from "react-navigation";
// Routes
import HomeNavigator from "./HomeNavigator";
import CalendarScreen from "./../screens/CalendarScreen/CalendarScreen";
import FavoriteScreen from "./../screens/FavoritesScreen/FavoritesScreen";
import WalletNavigator from "./WalletNavigator";
import ProfileScreen from "./../screens/ProfileScreen/ProfileScreen";
import QRScanner from "./../screens/QRScanner/QRScanner";
// Components
import Drawer from "./components/Drawer";

const routes = {
    Home: { screen: HomeNavigator },
    Calendar: { screen: CalendarScreen },
    Favorites: { screen: FavoriteScreen },
    Profile: { screen: ProfileScreen },
    Wallet: { screen: WalletNavigator },
    "QR Scanner": { screen: QRScanner }
};

const navigationOptions = {
    drawerWidth: 250,
    contentComponent: props => <Drawer {...props} />
};

export default DrawerNavigator(routes, navigationOptions);
