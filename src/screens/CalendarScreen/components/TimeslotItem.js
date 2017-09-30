// React
import React, { Component } from "react";
// React-Native
import { Text, StyleSheet, View } from "react-native";
// Components
import Talk from "./Talk";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10
    },
    separator: {
        backgroundColor: "black",
        height: 1 * StyleSheet.hairlineWidth,
        marginLeft: "20%",
        marginVertical: 5,
        width: "80%"
    },
    talkContainer: {
        flex: 3
    },
    timeContainer: {
        alignItems: "center",
        flex: 1
    },
    timeText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default class TimeslotItem extends Component {
    renderTalks() {
        const values = [];
        this.props.timeslot.talks.forEach(talk => {
            values.push(<Talk key={talk.id} talk={talk} />);
        });

        return values;
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{this.props.timeslot.startTime}</Text>
                    </View>
                    <View style={styles.talkContainer}>
                        {this.renderTalks()}
                    </View>
                </View>
                <View style={styles.separator} />
            </View>
        );
    }
}
