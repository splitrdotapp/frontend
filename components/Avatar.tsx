import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { StyleSheet, Text, View } from "react-native";

interface AvatarProps {
  size: number;
  initials: string;
}

export default function Avatar({ size, initials }: AvatarProps) {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    avatar: {
      width: size * 3.5,
      height: size * 3.5,
      borderRadius: size * 2,
      backgroundColor: Colors[colorScheme ?? "light"].borderColor,
      alignItems: "center",
      justifyContent: "center",
    },
    avatarText: {
      fontSize: size,
      fontWeight: "600",
      color: Colors[colorScheme ?? "light"].lighterText,
    },
  });

  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{initials}</Text>
    </View>
  );
}
