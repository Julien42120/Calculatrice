import Clear from './clear';
import Egal from './egal';
import Chiffres from './chiffre';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import Resultat from './Resultat';


const chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/'];

function Calculatrice() {

    function AffichageChiffres() {
        return chiffres.map((key) => {
            return <Chiffres key={key} chiffre={key} />
        })
    }

    return (
        <View style={styles.body}>
            < Resultat />
            <View style={styles.container}>
                {AffichageChiffres()}
                <Clear />
                <Egal />
            </View>
        </View>
    )
}

export default Calculatrice;

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
    },

    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});