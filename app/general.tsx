import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const General = () => {
    return (
        <View style={styles.container}>
            <Text>general</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
})
export default General