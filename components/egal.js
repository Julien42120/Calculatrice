import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { selectSetResultat } from '../action/index'

const EgalConnect = ({ state, selectSetResultat }) => {
    function removeLastPlus(chiffre) {
        if (chiffre.endsWith("+") || chiffre.endsWith("-") || chiffre.endsWith("*") || chiffre.endsWith("/")) {
            chiffre = chiffre.slice(0, chiffre.length - 1)
            console.log(chiffre);
        }
        return chiffre
    }

    function result() {
        try {
            let chiffre = removeLastPlus(state.chiffre)
            selectSetResultat(eval(chiffre))
        } catch (error) {
            console.log(error);
            alert("Format du calcul erroné")
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => result()} style={styles.button}>
                <Text style={styles.text}>=</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state, props) => {
    return {
        props: props,
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSetResultat: (payload) => dispatch(selectSetResultat(payload)),
    };
}
const Egal = connect(mapStateToProps, mapDispatchToProps)(EgalConnect);

export default Egal;

const styles = StyleSheet.create({
    container: {
        width: "25%",
        height: "25%",
        borderWidth: 2,
        borderColor: 'grey',
        borderStyle: 'solid'
    },

    button: {
        alignItems: "center",
        backgroundColor: "green",
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
});