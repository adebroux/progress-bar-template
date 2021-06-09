import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const ProgressBar = props => {
    let { variable, min, max, color, secondaryColor, styleSection, titleSection, startAnimation } = props
    const [firstBar, setFirstBar] = useState(0.25)
    const [ secondBar, setSecondBar ] = useState(0.75)
    //const firstBar = useRef(new Animated.Value(0)).current
    //const secondBar = useRef(new Animated.Value(1)).current
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
        const { styleSelection } = styleSection
        if (styleSelection) {
            progressStyles.push(styles.roundedLeft)
            backgroundStyles.push(styles.roundedRight)
            if (firstBar === 0) {
                backgroundStyles.push(styles.roundedLeft)
            }
            if (secondBar === 0) {
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

    //useEffect((prevVariable, prevMin, prevMax) => {
    //    const interval = (variable - prevVariable) / 20
    //    let timer = setInterval(function () {
    //        setFirstBar(prev => prev + interval)
    //        setSecondBar(prev => prev - interval)
    //        if ((firstBar + interval) >= (variable - min)) {
    //            setFirstBar(() => variable - min)
    //            setSecondBar(() => max - variable)
    //            clearInterval(timer)
    //        }
    //    }, 50)
    //    console.log("Did change. First bar: " + firstBar + ". Second bar: " + secondBar)
    //}, [variable])

    //useEffect(() => {
    //    Animated.timing(
    //        firstBar,
    //        {
    //            toValue: variable - min,
    //            duration: 3000
    //        }
    //    ).start()
    //}, [firstBar])//Haven't factored in secondBar at all. Fix

    return (
        <View>
            {titleText}
            <View style={ styles.wrapper }>
                <View style={progressStyles} />
                <View style={ backgroundStyles } />
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
