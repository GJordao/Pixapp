import React from "react";
import { AppRegistry } from "react-native";
import MainNavigator from "./navigation/DrawerNavigator";
import { Provider } from "react-redux";
import store from "./config/store";

const App = () => {
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
};

AppRegistry.registerComponent("Pixapp", () => App);
