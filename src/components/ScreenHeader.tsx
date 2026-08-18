import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

interface ScreenHeaderProps {
  title: string;
  onBack: () => void;
}

export function ScreenHeader({ title, onBack }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 12,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  backButtonText: {
    color: "#edf6ff",
    fontSize: 15,
    fontWeight: "600",
  },
  title: {
    color: "#edf6ff",
    fontSize: 20,
    fontWeight: "700",
  },
});
