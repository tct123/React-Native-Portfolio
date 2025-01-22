import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'
import { Asset } from 'expo-asset'

const Videoplayer = () => {
    const video = Asset.fromModule(require("../assets/video/video.mp4")).uri
    const player = useVideoPlayer(video, (player) => {
        player.play();
        player.replay();
    })
    return (
        <View>
            <VideoView player={player} style={styles.video} allowsFullscreen allowsPictureInPicture />
        </View>
    )
}

export default Videoplayer

const styles = StyleSheet.create({
    video: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})