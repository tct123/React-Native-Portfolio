import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

const audiosource = require('../assets/audio/happy-birthday-whistled.wav');

const Audioplayer = () => {
    const player = useAudioPlayer(audiosource);
    player.play();

    return (
        <View>
            <Text>Audioplayer</Text>
        </View>
    );
};

export default Audioplayer;