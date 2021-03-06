// React
import React, { Component } from "react";
// React-Native
import { ScrollView, StyleSheet, Text, View } from "react-native";
// React-Redux
import { connect } from "react-redux";
// Components
import NavBar from "./../../components/NavBar";
import TimeslotItem from "./components/TimeslotItem";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#01a7ee",
        flex: 1
    }
});

class CalendarScreen extends Component {
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
            values.push(<TimeslotItem key={index} timeslot={timeslot} />);
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
                <ScrollView>{this.renderCalendar()}</ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        schedule: state.schedule
    };
};

export default connect(mapStateToProps)(CalendarScreen);
