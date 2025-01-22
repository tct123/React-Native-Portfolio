import { View, Text } from 'react-native'
import React from 'react'
import { useAudioPlayer } from 'expo-audio'
import { Asset } from 'expo-asset'

const Audioplayer = () => {
    const MyAudio = Asset.fromModule(require("../assets/video/video.mp4")).uri;
    const player = useAudioPlayer(MyAudio)
    player.play()
    return (
        <View>
            <Text>Audioplayer</Text>
        </View>
    )
}

export default Audioplayer