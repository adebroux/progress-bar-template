import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProgressBar = props => {
    const { variable, min, max, color, secondaryColor } = props
    const firstBar = variable - min
    const secondBar = max - variable
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
