const initialState = {
    chiffre: '',
    resultat: 0,
};

function rootReducer(state = initialState, action) {

    let newState;

    switch (action.type) {
        case "CLEAR":
            newState = {
                ...state,
                chiffre: state.chiffre = "",
                resultat: state.resultat = 0
            }

            console.log(newState);
            return newState;

        case "SETCHIFFRE":
            newState = {
                ...state,
                chiffre: state.chiffre.toString() + action.payload.toString()
            }

            console.log(newState);
            return newState;


        case "SETRESULTAT":
            newState = {
                ...state,
                resultat: action.payload
            }

            console.log(newState);
            return newState;

        default:
            return state
    }

};

export default rootReducer;