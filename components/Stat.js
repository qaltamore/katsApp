import React from 'react'
import { View, Text, ProgressBar } from 'native-base'
import { ProgressBarAndroid } from 'react-native'

const Stat = (props) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>{props.statName}</Text>
            <ProgressBarAndroid
                style={{ flex: 3 }}
                styleAttr="Horizontal"
                indeterminate={false}
                progress={props.statProgress}
            />
            <Text style={{ flex: 1, textAlign: 'right' }}>{props.statNumber}</Text>
        </View>
    )
}

export default Stat