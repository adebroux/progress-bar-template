import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const ProgressBar = props => {
    const { variable, min, max, color, secondaryColor, titleSection, startAnimation } = props
    const [firstBar, setFirstBar] = useState(0.25)
    const [ secondBar, setSecondBar ] = useState(0.75)
    //const firstBar = useRef(new Animated.Value(0)).current
    //const secondBar = useRef(new Animated.Value(1)).current
    let titleEnabled = false
    let titleInput = ""
    let titleText;

    if (typeof (titleSection) !== 'undefined') {
        const { enabled, title } = titleSection
        titleEnabled = enabled
        titleInput = title
    }
    else {

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

    if (titleEnabled) {
        titleText = (<Text style={{ color:color, paddingLeft: 20 }}>{titleInput}</Text>);
    }

    //let firstBar = variable - min
    //let secondBar = max - variable
    //if (variable === 0) {
    //    if (max === 0) {
    //        if (min === 0) {
    //            firstBar = 0.25
    //            secondBar = 0.75
    //        }
    //        else {
    //            secondBar = 1
    //        }
    //    }
    //}

    useEffect(() => {
        setFirstBar(() => variable - min)
        setSecondBar(() => max - variable)
        if (variable === 0) {
            if (max === 0) {
                if (min === 0) {
                    setFirstBar(() => 0.3)
                    setSecondBar(() => 0.7)
                }
                else {
                    setSecondBar(() => 1)
                }
            }
        }
        console.log("Did mount. First bar: " + firstBar +". Second bar: " + secondBar)
    }, [])

    //useEffect((prevVariable) => {
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
