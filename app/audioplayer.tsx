import { View, Text } from 'react-native'
import React from 'react'
import { Audio } from 'expo-av'
import { Asset } from 'expo-asset'

const Audioplayer = async () => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const MyAudio = Asset.fromModule(require("../assets/audio/happy-birthday-whistled.wav")).uri;
    const { sound: player } = await Audio.Sound.createAsync(
        { uri: MyAudio }, { shouldPlay: true }
    )
    player.playAsync()
    return (
        <View>
            <Text>Audioplayer</Text>
        </View>
    )
}

export default Audioplayer