// React-Native-Navigation
import { StackNavigator } from "react-navigation";
// Screens
import WalletScreen from "./../screens/WalletScreen/WalletScreen";
import ListUsers from "./../screens/WalletScreen/ListUsers";
import ListProjects from "./../screens/WalletScreen/ListProjects";
import ProjectExp from "./../screens/WalletScreen/ProjectExp";
import UserExp from "./../screens/WalletScreen/UserExp";

const routes = {
    Wallet: { screen: WalletScreen, navigationOptions: { header: null } },
    Users: { screen: ListUsers },
    Projects: { screen: ListProjects },
    ProjectExp: { screen: ProjectExp },
    UserExp: { screen: UserExp }
};

const navigationOptions = {};

export default StackNavigator(routes, navigationOptions);
