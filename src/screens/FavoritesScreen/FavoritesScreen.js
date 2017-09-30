// React
import React, { Component } from "react";
// React-Native
import { ScrollView, StyleSheet, Text, View } from "react-native";
// React-Redux
import { connect } from "react-redux";
// Components
import NavBar from "./../../components/NavBar";
import FTimeslotItem from "./components/FTimeslotItem";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#01a7ee",
        flex: 1
    },
    noFavoritesContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    noFavoritesContainerText: {
        color: "black",
        fontSize: 22,
        fontWeight: "bold"
    }
});

class FavoritesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: 0
        };
    }

    renderCalendar() {
        const values = [];
        this.props.schedule.days[
            this.state.selectedDay
        ].timeslots.forEach((timeslot, index) => {
            values.push(<FTimeslotItem key={index} timeslot={timeslot} />);
        });
        return values;
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar
                    buttonOnPress={() => {
                        this.props.navigation.navigate("DrawerOpen");
                    }}
                />
                {this.props.favorites.length === 0 ? (
                    <View style={styles.noFavoritesContainer}>
                        <Text style={styles.noFavoritesContainerText}>
                            You have no favorites, try and add some
                        </Text>
                    </View>
                ) : (
                    <ScrollView>{this.renderCalendar()}</ScrollView>
                )}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        schedule: state.schedule
    };
};

export default connect(mapStateToProps)(FavoritesScreen);
