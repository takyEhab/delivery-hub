import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

interface AddCustomerScreenProps {
  onSave: () => void;
}

export function AddCustomerScreen({ onSave }: AddCustomerScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.cardPanel}>
        <Text style={styles.sectionLabel}>Customer profile</Text>
        <Text style={styles.cardTitle}>Add a customer</Text>
        <Text style={styles.cardCopy}>
          Create a clean profile for each new customer and keep the delivery
          flow organized.
        </Text>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Full name</Text>
          <Text style={styles.inputPlaceholder}>Enter customer name</Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Phone number</Text>
          <Text style={styles.inputPlaceholder}>+1 (555) 123-4567</Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Address</Text>
          <Text style={styles.inputPlaceholder}>Street, city, and ZIP</Text>
        </View>

        <Pressable style={styles.primaryButton} onPress={onSave}>
          <Text style={styles.primaryButtonText}>Save Customer</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 22,
    paddingVertical: 18,
    paddingBottom: 40,
  },
  cardPanel: {
    backgroundColor: "rgba(10, 27, 42, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    borderRadius: 28,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 15 },
    elevation: 8,
  },
  sectionLabel: {
    color: "#7ae3c4",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  cardTitle: {
    marginTop: 12,
    color: colors.textPrimary,
    fontSize: 31,
    fontWeight: "800",
  },
  cardCopy: {
    marginTop: 10,
    color: "#ccdced",
    fontSize: 15,
    lineHeight: 22,
  },
  inputBox: {
    marginTop: 16,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  inputLabel: {
    color: "#cfe0ef",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },
  inputPlaceholder: {
    color: "#8ea5be",
    fontSize: 15,
    marginTop: 8,
  },
  primaryButton: {
    marginTop: 22,
    backgroundColor: colors.mint,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: "800",
  },
});
