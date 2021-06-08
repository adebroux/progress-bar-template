import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProgressBar = props => {
    const { variable, min, max, color, secondaryColor } = props
    console.log(typeof (variable))
    console.log("Value:" + variable)
    let firstBar = variable - min
    let secondBar = max - variable
    if (variable == 0) {
        if (max == 0) {
            if (min == 0) {
                firstBar = 0.25
                secondBar = 0.75
            }
            else {
                secondBar = 1
            }
        }
    }
    return (
        <View style={styles.wrapper}>
            <View style={{ backgroundColor: secondaryColor, flex: firstBar, height: 10 }} />
            <View style={{ backgroundColor: color, flex: secondBar, height: 10 }} />
        </View>
    )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: "row",
  },
})

export default ProgressBar
