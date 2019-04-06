import { SET_KAT, SET_ENERGY } from './actions'
import { AsyncStorage } from 'react-native'

var actualKatEnergy
var initialState = {
    katName: '',
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
        var maxKatEnergy = 9 //TODO : on récupère l'énergie max du Kat depuis la base
        actualKatEnergy = JSON.parse(await AsyncStorage.getItem("actualKatEnergy"))
        console.log("actual kat energy :", actualKatEnergy)
        if(actualKatEnergy == null)
            actualKatEnergy = maxKatEnergy
        initialState.energy = 8

        var energyStorageDate = JSON.parse(await AsyncStorage.getItem("energyStorageDate"))
        console.log("Date : ", energyStorageDate)
        console.log("Soustraction : ", Date.now())
        var timeSpent = Math.trunc(((Date.now() - energyStorageDate) / 1000) / 60)
        console.log("minutes spent : ", timeSpent)

        //on fait le calcul pour savoir combien d'énergie il a gagné entre temps
        if(timeSpent) {
            if(actualKatEnergy + timeSpent > maxKatEnergy)
                actualKatEnergy = maxKatEnergy
            else {
                actualKatEnergy = actualKatEnergy + timeSpent
            }

            AsyncStorage.setItem("actualKatEnergy", JSON.stringify(actualKatEnergy))
            AsyncStorage.setItem("energyStorageDate", JSON.stringify(Date.now()))
        }

        console.log("final actual kat energy : ", actualKatEnergy)
        initialState.energy = 5
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
                AsyncStorage.setItem("energyStorageDate", JSON.stringify(Date.now()))
            }
            return {
                ...state,
                energy: action.energy
            }
        default:
            return state
    }
}
