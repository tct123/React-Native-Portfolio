import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
    buttonMargin?: number;
}
const CustomButton = ({ onPress, title, textStyles = "", buttonMargin = 10 }: CustomButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7} style={[styles.touchableopacity, { marginBottom: buttonMargin }]} onPress={onPress}>
            <Text className={`font-semibold text-large ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    touchableopacity: { backgroundColor: 'white', borderRadius: 16, minHeight: 62, justifyContent: 'center', alignItems: 'center' }, text: {
        fontWeight: '600',
        fontSize: 18,
    },
})
export default CustomButton