import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { selectClear } from '../action';

const ClearConnect = ({ selectClear }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => selectClear()} style={styles.button}>
                <Text style={styles.text}>AC</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state, props) => {
    return {
        props: props,
        state: state,
        chiffre: state.chiffre,
        resultat: state.resultat
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectClear: (payload) => dispatch(selectClear(payload)),
    };
}
const Clear = connect(mapStateToProps, mapDispatchToProps)(ClearConnect);

export default Clear;

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
        backgroundColor: "red",
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