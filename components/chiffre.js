import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { selectSetChiffre } from '../action/index'


function ChiffresConnect({ props, selectSetChiffre }) {

    function GetChiffre(chiffre) {

        selectSetChiffre(chiffre)
        return (chiffre)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => GetChiffre(props.chiffre)}>
                <Text style={styles.text}>{props.chiffre}</Text>
            </TouchableOpacity>
        </View >
    );
}

const mapStateToProps = (state, props) => {
    return {
        props: props,
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSetChiffre: (payload) => dispatch(selectSetChiffre(payload)),
    };
}

const Chiffres = connect(mapStateToProps, mapDispatchToProps)(ChiffresConnect);

export default Chiffres;

const styles = StyleSheet.create({
    container: {
        width: "25%",
        height: "25%",
        borderWidth: 2,
        borderColor: 'grey',
        borderStyle: 'solid',

    },

    button: {
        alignItems: "center",
        backgroundColor: "#666363",
        width: "100%",
        height: "100%",
        justifyContent: "center",

    },

    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})