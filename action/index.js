export function selectEgal(payload) {
    return { type: "EGAL", payload }
};

export function selectClear(payload) {
    return { type: "CLEAR", payload }
};

export function selectSetChiffre(payload) {
    return { type: "SETCHIFFRE", payload }
};

export function selectSetResultat(payload) {
    return { type: "SETRESULTAT", payload }
};

