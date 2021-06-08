import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProgressBar = props => {
    const { variable, min, max, color, secondaryColor, titleSection, startAnimation } = props
    const { enabled, title } = titleSection
    let titleText;

    if (typeof (min) !== 'number') {
        min = 0
    }

    if (typeof (max) !== 'number') {
        max = min + 10
    }

    if (typeof (variable) !== 'number') {
        variable = (min + max) / 2
    }

    let firstBar = variable - min
    let secondBar = max - variable
    if (variable === 0) {
        if (max === 0) {
            if (min === 0) {
                firstBar = 0.25
                secondBar = 0.75
            }
            else {
                secondBar = 1
            }
        }
    }

    if (enabled) {
        titleText = (<Text style={{ color:color, paddingLeft: 20 }}>{title}</Text>);
    }

    return (
        <View>
            {titleText}
            <View style={styles.wrapper}>
                <View style={{ backgroundColor: secondaryColor, flex: firstBar, height: 10 }} />
                <View style={{ backgroundColor: color, flex: secondBar, height: 10 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: "row",
  },
})

export default ProgressBar
