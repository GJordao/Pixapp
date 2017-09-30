// React
import React, { Component } from "react";
// React-Native
import {
    Image,
    TextInput,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class ProjectExp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1000,
            trade: 0
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Backup Pixapp</Text>
                <Text>Your exp: {this.state.value}</Text>
                <TextInput
                    value={this.state.trade.toString()}
                    onChangeText={value => {
                        this.setState({ trade: value });
                    }}
                    placeholder={"How much do you want to invest?"}
                />
                <TouchableOpacity
                    style={{ backgroundColor: "red", height: 50 }}
                    onPress={() => {
                        this.setState({
                            value: this.state.value - this.state.trade
                        });
                        alert("You backedup Pixapp");
                        this.setState({ trade: 0 });
                    }}
                >
                    <Text>Trade</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
