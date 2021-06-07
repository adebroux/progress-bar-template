import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProgressBar = props => {
  const { min, max, color, secondaryColor } = props

  return (
    <View style={styles.wrapper}>
      <View style={{ backgroundColor: color, flex: 1 }}></View>
      <View style={{ backgroundColor: color, flex: 0.25 }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ProgressBar
