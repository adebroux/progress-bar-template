import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProgressBar = props => {
    let { variable, min, max, color, secondaryColor, styleSection, titleSection } = props
    const [firstBar, setFirstBar] = useState(0.25)
    const [ secondBar, setSecondBar ] = useState(0.75)
    let titleEnabled, roundEnabled = false
    let titleInput = ""
    let titleText;
    let backgroundStyles = [{ backgroundColor: color, flex: secondBar, height: 10 }]
    let progressStyles = [{ backgroundColor: secondaryColor, flex: firstBar, height: 10 }]

    if (typeof (titleSection) !== 'undefined') {
        const { enabled, title } = titleSection
        titleEnabled = enabled
        titleInput = title
    }

    if (typeof (styleSection) !== 'undefined') {
        const { styleSelection, shadow } = styleSection
        if (styleSelection) {
            progressStyles.push(styles.roundedLeft)
            backgroundStyles.push(styles.roundedRight)
            if (firstBar <= 0) {
                backgroundStyles.push(styles.roundedLeft)
            }
            if (secondBar <= 0) {
                progressStyles.push(styles.roundedRight)
            }
        }
    }

    if (titleEnabled) {
        titleText = (<Text style={{ color: color, paddingLeft: 20, fontWeight: 600 }}>{titleInput}</Text>);
    }

    useEffect(() => {
        if (typeof (min) !== 'number') {
            min = 0
        }

        if (typeof (max) !== 'number') {
            max = min + 10
        }

        if (typeof (variable) !== 'number') {
            variable = (min + max) / 4
        }

        setFirstBar(() => variable - min)
        setSecondBar(() => max - variable)
        if (variable === 0) {
            if (max === 0) {
                if (min === 0) {
                    setFirstBar(() => 0.25)
                    setSecondBar(() => 0.75)
                }
                else {
                    setSecondBar(() => 1)
                }
            }
        }
    })

    return (
        <View>
            {titleText}
            <View style={styles.wrapper}>
                <View style={ progressStyles } />
                <View style={backgroundStyles} />
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
    roundedLeft: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    roundedRight: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
})

export default ProgressBar
