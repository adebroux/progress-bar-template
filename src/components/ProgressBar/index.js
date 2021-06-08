import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProgressBar = props => {
    const { variable, min, max, color, secondaryColor, titleSection } = props
    const { title } = titleSection

    useEffect(() => {

    }, [variable])

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

    if (typeof (min) !== 'number') {
        min = 0
    }

    if (typeof (max) !== 'number') {
        max = min + 10
    }

    if (typeof (variable) !== 'number') {
        variable = (min + max) / 2
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
    flexDirection: "row",
  },
})

export default ProgressBar
