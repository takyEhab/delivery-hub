import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

interface HomeScreenProps {
  onOpenSearch: () => void;
  onOpenAddCustomer: () => void;
}

export function HomeScreen({
  onOpenSearch,
  onOpenAddCustomer,
}: HomeScreenProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.container}>
        <View style={styles.heroGlow} />
        <View style={styles.heroGlowTwo} />

        <View style={styles.headerSection}>
          <Text style={styles.tag}>Smart operations</Text>
          <Text style={styles.title}>Delivery Hub</Text>
          <Text style={styles.subtitle}>
            Manage deliveries, search records, and onboard customers faster.
          </Text>
        </View>

        <View style={styles.actionsGrid}>
          <Pressable
            onPress={onOpenSearch}
            style={[styles.actionCard, styles.searchCard]}
          >
            <View style={styles.iconWrapSearch}>
              <Text style={styles.iconText}>⌕</Text>
            </View>
            <Text style={styles.actionTitle}>Search</Text>
            <Text style={styles.actionText}>
              Find customers and deliveries instantly
            </Text>
          </Pressable>

          <Pressable
            onPress={onOpenAddCustomer}
            style={[styles.actionCard, styles.addCard]}
          >
            <View style={styles.iconWrapAdd}>
              <Text style={styles.iconText}>＋</Text>
            </View>
            <Text style={styles.actionTitle}>Add Customer</Text>
            <Text style={styles.actionText}>
              Create a new customer profile with ease
            </Text>
          </Pressable>
        </View>

        <View style={styles.infoPanel}>
          <Text style={styles.infoTitle}>Quick overview</Text>
          <View style={styles.metricRow}>
            <View style={styles.metricBox}>
              <Text style={styles.metricNumber}>248</Text>
              <Text style={styles.metricLabel}>Active</Text>
            </View>
            <View style={styles.metricBox}>
              <Text style={styles.metricNumber}>16</Text>
              <Text style={styles.metricLabel}>Today</Text>
            </View>
            <View style={styles.metricBox}>
              <Text style={styles.metricNumber}>96%</Text>
              <Text style={styles.metricLabel}>On time</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 32,
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    position: "relative",
  },
  heroGlow: {
    position: "absolute",
    top: 40,
    right: -30,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(91, 186, 255, 0.22)",
  },
  heroGlowTwo: {
    position: "absolute",
    bottom: 120,
    left: -18,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(143, 115, 255, 0.18)",
  },
  headerSection: {
    marginTop: 18,
    zIndex: 1,
  },
  tag: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(124, 240, 206, 0.12)",
    color: colors.mintLight,
    borderRadius: 999,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  title: {
    marginTop: 18,
    color: colors.textPrimary,
    fontSize: 42,
    fontWeight: "800",
    letterSpacing: -1.4,
  },
  subtitle: {
    marginTop: 12,
    color: colors.textSecondary,
    fontSize: 17,
    lineHeight: 25,
    maxWidth: 310,
  },
  actionsGrid: {
    marginTop: 32,
    gap: 18,
    zIndex: 1,
  },
  actionCard: {
    borderRadius: 28,
    padding: 20,
    minHeight: 180,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  searchCard: {
    borderWidth: 1,
    borderColor: "rgba(130, 201, 255, 0.32)",
    backgroundColor: colors.blueCard,
  },
  addCard: {
    backgroundColor: colors.indigoCard,
    borderWidth: 1,
    borderColor: "rgba(170, 149, 255, 0.32)",
  },
  iconWrapSearch: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "rgba(137, 215, 255, 0.18)",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapAdd: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "rgba(172, 148, 255, 0.17)",
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    color: "#f4fbff",
    fontSize: 30,
    fontWeight: "700",
  },
  actionTitle: {
    marginTop: 18,
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: "700",
  },
  actionText: {
    marginTop: 8,
    color: "#d9e6f5",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 240,
  },
  infoPanel: {
    marginTop: 28,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderRadius: 26,
    padding: 18,
    zIndex: 1,
  },
  infoTitle: {
    color: "#edf6ff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  metricRow: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metricBox: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 4,
  },
  metricNumber: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: "800",
  },
  metricLabel: {
    marginTop: 6,
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
});
