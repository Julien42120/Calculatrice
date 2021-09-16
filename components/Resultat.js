import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { selectSetResultat } from '../action';

const ResultatConnect = ({ resultat, chiffre }) => {



    return (
        <View style={style.container}>
            <Text style={style.text} >{(chiffre)}</Text>
            <Text style={style.text}>={(resultat)}</Text>
        </ View>
    )
}

const mapStateToProps = (state, props) => {
    return {
        chiffre: state.chiffre,
        resultat: state.resultat,
        props: props,
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSetResultat: (payload) => dispatch(selectSetResultat(payload)),
    };
}

const Resultat = connect(mapStateToProps, mapDispatchToProps)(ResultatConnect);

export default Resultat;


const style = StyleSheet.create({
    container: {
        width: "100%",
        height: "30%",
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        borderStyle: 'solid',
        marginTop: "20%",
        backgroundColor: "black"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
    }
});