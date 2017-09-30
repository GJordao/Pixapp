// React
import React, { Component } from "react";
// React-Native
import { Text, StyleSheet, View } from "react-native";
// React-Redux
import { connect } from "react-redux";
// Components
import Talk from "./../../CalendarScreen/components/Talk";

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

class FTimeslotItem extends Component {
    renderTalks() {
        const values = [];
        this.props.timeslot.talks.forEach(talk => {
            const index = this.props.favorites.findIndex(fTalk => {
                return fTalk.id === talk.id;
            });
            if (index !== -1) {
                values.push(<Talk key={talk.id} talk={talk} />);
            }
        });

        return values;
    }

    render() {
        const talks = this.renderTalks();
        return talks.length !== 0 ? (
            <View>
                <View style={styles.container}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>
                            {this.props.timeslot.startTime}
                        </Text>
                    </View>
                    <View style={styles.talkContainer}>{talks}</View>
                </View>
                <View style={styles.separator} />
            </View>
        ) : null;
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
};

export default connect(mapStateToProps)(FTimeslotItem);
