export const SET_KAT = "SET_KAT"
export const SET_ENERGY = "SET_ENERGY"

export const setCurrentKat = katName => {
    return {
        type: SET_KAT,
        katName
    }
}

export const setCurrentKatEnergy = energy => {
    return {
        type: SET_ENERGY,
        energy
    }
}