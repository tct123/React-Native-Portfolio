import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import { Asset } from 'expo-asset'

const videoplayer = () => {
    const video= Asset.fromModule(require("assets/video/video.mp4")).uri
    return (
        <View>
            <Video source={{ uri:video}} useNativeControls={true}></Video>
        </View>
    )
}

export default videoplayer

const styles = StyleSheet.create({})