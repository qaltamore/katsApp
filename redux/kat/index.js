import { SET_KAT, SET_ENERGY } from './actions'
import { AsyncStorage } from 'react-native'

var actualKatEnergy
var initialState = {
    katName: 'Nero',
    energy: actualKatEnergy
}
const initiateInitialState = async () => {
    try {
        //Kat
        actualKat = JSON.parse(await AsyncStorage.getItem("actualKat"))
        console.log("actual kat :", actualKat)
        if(actualKat == null)
            actualKat = 'Nero'
        initialState.katName = actualKat

        //Energy
        actualKatEnergy = JSON.parse(await AsyncStorage.getItem("actualKatEnergy"))
        console.log("actual kat energy :", actualKatEnergy)
        if(actualKatEnergy == null)
            actualKatEnergy = 10
        initialState.energy = actualKatEnergy
    } catch(error) {
        console.log("Error in redux kat index, initiateInitialState : ", error)
    }
}
initiateInitialState()

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_KAT :
            AsyncStorage.setItem("actualKat", JSON.stringify(action.katName))
            return {
                ...state,
                katName: action.katName
            }
        case SET_ENERGY :
            if(action.energy <= 10) {
                AsyncStorage.setItem("actualKatEnergy", JSON.stringify(action.energy))
                //AsyncStorage.setItem("energyStorageDate", Date.now())
            }
            return {
                ...state,
                energy: action.energy
            }
        default:
            return state
    }
}
