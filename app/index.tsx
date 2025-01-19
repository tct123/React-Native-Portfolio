import CustomButton from "@/components/CustomButton";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import background from "@/assets/images/background.jpg"
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter()
  return (
    <ImageBackground style={styles.bg}
      source={background} resizeMode="cover">
      <View
        className="flex-1"
      >
        <CustomButton onPress={()=>router.push("/general")} title={"Test button"} />
        <StatusBar barStyle={"dark-content"} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: "cover", justifyContent: "center" }
}
)