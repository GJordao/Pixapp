// React
import React, { Component } from "react";
// React-Natie
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// React-Redux
import { connect } from "react-redux";
// Actions
import { addFavorite, removeFavorite } from "./../../../ducks/favorites";
import { toggleStars } from "./../../../ducks/schedule";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 4,
        elevation: 10,
        marginHorizontal: 10,
        padding: 10,
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5
    },
    topContainer: {
        flexDirection: "row"
    },
    hearth: {
        height: 30,
        width: 30
    },
    title: {
        color: "#ea282e",
        marginLeft: 5,
        fontSize: 22,
        fontWeight: "300"
    },
    description: {
        fontSize: 16,
        fontWeight: "300"
    },
    descriptionContainer: {
        marginVertical: 10
    },
    locationContainer: {
        alignSelf: "flex-end",
        backgroundColor: "#ea282e",
        borderRadius: 4,
        height: 30,
        justifyContent: "center",
        marginRight: 10,
        marginTop: -5,
        marginBottom: 20,
        padding: 10,
        width: "70%"
    },
    locationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "300"
    },
    speakerContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 10
    },
    speakerText: {
        fontSize: 16,
        fontWeight: "300"
    },
    speakerImage: {
        height: 20,
        resizeMode: "contain",
        width: 20
    },
    starContainer: {
        flexDirection: "row"
    },
    starLogo: {
        height: 25,
        width: 25
    }
});

class Talk extends Component {
    constructor(props) {
        super(props);
        this.defaultStars = [
            { nr: 1, selected: false },
            { nr: 2, selected: false },
            { nr: 3, selected: false },
            { nr: 4, selected: false },
            { nr: 5, selected: false }
        ];
        this.state = {
            stars: this.defaultStars
        };
    }

    componentWillMount() {
        this.toggleStars(this.props.talk.stars);
    }

    toggleFavorite = () => {
        this.props.favorites.findIndex(talk => {
            return talk.id === this.props.talk.id;
        }) !== -1
            ? this.props.removeFavorite(this.props.talk)
            : this.props.addFavorite(this.props.talk);
    };

    toggleStars = starNr => {
        const newStars = [];
        this.defaultStars.forEach(star => {
            if (star.nr <= starNr) {
                newStars.push(Object.assign({}, star, { selected: true }));
            } else {
                newStars.push(Object.assign({}, star));
            }
        });
        this.setState({ stars: newStars });
        this.props.toggleStars(this.props.talk, starNr);
    };

    render() {
        const imageLink =
            this.props.favorites.findIndex(talk => {
                return talk.id === this.props.talk.id;
            }) !== -1
                ? require("./../../../images/love_full.png")
                : require("./../../../images/love_black.png");
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                this.toggleFavorite();
                            }}
                        >
                            <Image source={imageLink} style={styles.hearth} />
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            {this.props.talk.title}
                        </Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>
                            {this.props.talk.description}
                        </Text>
                    </View>
                    <View style={styles.starContainer}>
                        {this.state.stars.map(star => {
                            return (
                                <TouchableOpacity
                                    key={star.nr}
                                    onPress={() => this.toggleStars(star.nr)}
                                >
                                    <Image
                                        source={require("./../../../images/ios7-star-outline.png")}
                                        style={[
                                            styles.starLogo,
                                            {
                                                tintColor: star.selected
                                                    ? "#fdcf1a"
                                                    : null
                                            }
                                        ]}
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <View style={styles.speakerContainer}>
                        <Image
                            source={require("./../../../images/ios7-person.png")}
                            style={styles.speakerImage}
                        />
                        <Text style={styles.speakerText}>
                            {this.props.talk.speaker} |
                        </Text>
                        <Text style={styles.speakerText}>
                            {" " +this.props.talk.language}
                        </Text>
                    </View>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>
                        {this.props.talk.location}
                    </Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
};

export default connect(mapStateToProps, {
    addFavorite,
    removeFavorite,
    toggleStars
})(Talk);
