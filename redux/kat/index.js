import { SET_KAT, SET_ENERGY } from './actions'
import { AsyncStorage } from 'react-native'

const initialState = {
    katName: 'Nero',
    energy: 10
}
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_KAT :
            //TODO : AsyncStorage -> stocker le kat comme nouveau kat par défaut
            return {
                ...state,
                katName: action.katName
            }
        case SET_ENERGY :
            if(action.energy <= 10) {
                console.log("setEnergy : ", action.energy)
                /*AsyncStorage.setItem("energy", action.energy)
                AsyncStorage.setItem("energyStorageDate", Date.now())*/
            }
            return {
                ...state,
                energy: action.energy
            }
        default:
            return state
    }
}