import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProgressBar = props => {
    const { variable, min, max, color, secondaryColor, titleSection, startAnimation } = props
    const { enabled, title } = titleSection
    //const [firstBar, setFirstBar] = useState(0)
    //const [ secondBar, setSecondBar ] = useState(0)
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

    if (enabled) {
        titleText = (<Text style={{ color:color, paddingLeft: 20 }}>{title}</Text>);
    }

    const firstBar = variable - min
    const secondBar = max - variable
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

    //useEffect(() => {
    //    firstBar = variable - min
    //    secondBar = max - variable
    //    if (variable === 0) {
    //        if (max === 0) {
    //            if (min === 0) {
    //                setFirstBar(() => 0.25)
    //                setSecondBar(() => 0.75)
    //            }
    //            else {
    //                setSecondBar(() => 1)
    //            }
    //        }
    //    }
    //}, [])

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
    //}, [variable])

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
