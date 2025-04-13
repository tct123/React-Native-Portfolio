import { View, Text, StyleSheet, ImageBackground, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton'

const General = () => {
    const router = useRouter()
    const background = require("../assets/images/background.jpg")
    const data: { id: string; name: string; path: "/" | `/?${string}` }[] = [
        { id: '1', name: 'Home', path: '/' },
        { id: '2', name: 'Video', path: '/videoplayer' },
        { id: '3', name: 'Audio', path: '/audioplayer' },
        { id: '4', name: 'Lottie', path: '/lottiepage' },
        { id: '5', name: 'Notification', path: '/notificationspage' }
    ];
    return (
        <ImageBackground style={styles.bg} source={background}>
            <View style={styles.headerview}>
                <Text style={styles.title}>Choose example</Text>
            </View>
            <FlatList style={styles.flatlist} data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                <View style={styles.container}>
                    <CustomButton onPress={() => router.push(item.path)} title={item.name} />
                </View>
            )}>
            </FlatList>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bg: {
        flex: 1, resizeMode: "cover",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    container: {
        flex: 1, justifyContent: "center", margin: 7,
    },
    flatlist: {
        flex: 1,
    },
    headerview: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { flex: 1, fontSize: 50, fontWeight: "bold" },
})
export default General