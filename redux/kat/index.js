import { SET_KAT } from './actions'
//import { AsyncStorage } from 'react-native'

const initialState = null
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_KAT :
            //TODO : AsyncStorage -> stocker le kat comme nouveau kat par défaut
            return action.kat
        default:
            return state
    }
}