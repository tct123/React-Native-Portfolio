import { View, Text } from 'react-native'
import React from 'react'
import { Audio } from 'expo-av'
import { Asset } from 'expo-asset'

const Audioplayer = async () => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const MyAudio = Asset.fromURI(require("../assets/audio/happy-birthday-whistled.wav")).uri;
    const player = new Audio.Sound();
    player.loadAsync({ uri: MyAudio })
    player.playAsync()
    return (
        <View>
            <Text>Audioplayer</Text>
        </View>
    )
}

export default Audioplayer