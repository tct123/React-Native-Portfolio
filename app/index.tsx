import CustomButton from "@/components/CustomButton";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import background from "@/assets/images/background.jpg";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter()
  return (
    <ImageBackground style={styles.bg}
      source={background} resizeMode="cover">
      <View
        style={styles.topview}
      >
        <StatusBar barStyle={"dark-content"} />
        <Text style={styles.title}>My Portfolio</Text>
      </View>
      <View style={styles.bottomview}>
        <CustomButton onPress={() => router.push("/general")} title={"Test button"} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: "cover" },
  topview: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottomview: { flex: 1, justifyContent: "center" },
  title: { flex: 1, fontSize: 50, fontWeight: "bold" },
}
)