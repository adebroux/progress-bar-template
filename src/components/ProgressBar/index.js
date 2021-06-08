import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProgressBar = props => {
    const { variable, min, max, color, secondaryColor } = props
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
    console.log("Min:" + min)
    console.log("Max:" + max)
    console.log("Variable:" + variable)
    console.log("First bar:" + firstBar)
    console.log("Second Bar:" + secondBar)
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
