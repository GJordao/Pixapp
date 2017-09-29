// React-Native-Navigation
import { StackNavigator } from "react-navigation";
// Screens
import HomeScreen from "./../screens/HomeScreen/HomeScreen";

const routes = {
  Home: { screen: HomeScreen, navigationOptions: { header: null } }
};

const navigationOptions = {};

export default StackNavigator(routes, navigationOptions);
