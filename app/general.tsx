import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import background from "@/assets/images/background.jpg";
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton'

const General = () => {
    const router = useRouter()
    const data: { id: string; name: string; path: "/" | `/?${string}` }[] = [{ id: '1', name: 'Home', path: '/' }];
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
    bg: { flex: 1, resizeMode: "cover" },
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