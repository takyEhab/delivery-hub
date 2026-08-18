import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

export function SearchScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.cardPanel}>
        <Text style={styles.sectionLabel}>Search dashboard</Text>
        <Text style={styles.cardTitle}>Find records</Text>
        <Text style={styles.cardCopy}>
          Search for drop-offs, delivery progress, customer details, and recent
          activity.
        </Text>

        <View style={styles.searchField}>
          <Text style={styles.searchFieldText}>
            Search by name, ID, or address
          </Text>
        </View>

        <View style={styles.resultRow}>
          <View style={styles.resultBadge} />
          <View style={styles.resultInfo}>
            <Text style={styles.resultName}>Aisha Rahman</Text>
            <Text style={styles.resultMeta}>ID #2048 • Delivered</Text>
          </View>
        </View>

        <View style={styles.resultRow}>
          <View style={[styles.resultBadge, styles.resultBadgeAlt]} />
          <View style={styles.resultInfo}>
            <Text style={styles.resultName}>Noah Smith</Text>
            <Text style={styles.resultMeta}>ID #5902 • In transit</Text>
          </View>
        </View>
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
  searchField: {
    marginTop: 22,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(125, 185, 255, 0.22)",
  },
  searchFieldText: {
    color: "#9db8d0",
    fontSize: 15,
  },
  resultRow: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 16,
    padding: 14,
  },
  resultBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#73e0b2",
  },
  resultBadgeAlt: {
    backgroundColor: "#8eb3ff",
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    color: "#f4fbff",
    fontSize: 18,
    fontWeight: "700",
  },
  resultMeta: {
    marginTop: 4,
    color: colors.textMuted,
    fontSize: 13,
  },
});
