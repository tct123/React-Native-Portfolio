import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo-av';

const Audioplayer = () => {
    useEffect(() => {
        const loadAudio = async () => {
            const { sound: playbackObject } = await Audio.Sound.createAsync(
                require('../assets/audio/happy-birthday-whistled.wav'),
                { shouldPlay: true }
            );
        };

        loadAudio();
    }, []);

    return (
        <View>
            <Text>Audioplayer</Text>
        </View>
    );
};

export default Audioplayer;