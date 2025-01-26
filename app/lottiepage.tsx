import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from "lottie-react-native"

const Lottiepage = () => {
    const animation = useRef<LottieView>(null)
    useEffect(() => { })
    return (
        <View>
            <LottieView autoPlay ref={animation} style={{ width: 200, height: 200 }} source={require("../assets/lottie/startscreen.json")} />
        </View>
    )
}

export default Lottiepage