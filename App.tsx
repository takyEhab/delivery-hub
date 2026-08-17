import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Screen = "home" | "search" | "addCustomer";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");

  const currentTitle = useMemo(() => {
    if (screen === "search") return "Search";
    if (screen === "addCustomer") return "Add Customer";
    return "Delivery Hub";
  }, [screen]);

  const renderScreen = () => {
    switch (screen) {
      case "search":
        return <SearchScreen onBack={() => setScreen("home")} />;
      case "addCustomer":
        return <AddCustomerScreen onBack={() => setScreen("home")} />;
      default:
        return (
          <HomeScreen
            onOpenSearch={() => setScreen("search")}
            onOpenAddCustomer={() => setScreen("addCustomer")}
          />
        );
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />
        <View style={styles.appShell}>
          {screen !== "home" ? (
            <View style={styles.topBar}>
              <Pressable
                onPress={() => setScreen("home")}
                style={styles.backButton}
              >
                <Text style={styles.backButtonText}>← Back</Text>
              </Pressable>
              <Text style={styles.pageTitle}>{currentTitle}</Text>
            </View>
          ) : null}
          {renderScreen()}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function HomeScreen({
  onOpenSearch,
  onOpenAddCustomer,
}: {
  onOpenSearch: () => void;
  onOpenAddCustomer: () => void;
}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.homeScrollContent}
    >
      <View style={styles.pageContainer}>
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

function SearchScreen({ onBack }: { onBack: () => void }) {
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

function AddCustomerScreen({ onBack }: { onBack: () => void }) {
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

        <Pressable style={styles.primaryButton} onPress={onBack}>
          <Text style={styles.primaryButtonText}>Save Customer</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#071321",
  },
  appShell: {
    flex: 1,
    backgroundColor: "#071321",
  },
  topBar: {
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
  pageTitle: {
    color: "#edf6ff",
    fontSize: 20,
    fontWeight: "700",
  },
  homeScrollContent: {
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 32,
    flexGrow: 1,
  },
  pageContainer: {
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
    color: "#9ef6d0",
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
    color: "#f5fbff",
    fontSize: 42,
    fontWeight: "800",
    letterSpacing: -1.4,
  },
  subtitle: {
    marginTop: 12,
    color: "#c7d7ea",
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
    backgroundColor: "#143d5f",
  },
  addCard: {
    backgroundColor: "#1e3358",
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
    color: "#f5fbff",
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
    color: "#f5fbff",
    fontSize: 24,
    fontWeight: "800",
  },
  metricLabel: {
    marginTop: 6,
    color: "#bfd2ea",
    fontSize: 12,
    fontWeight: "600",
  },
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
    color: "#f5fbff",
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
    color: "#bfd2ea",
    fontSize: 13,
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
    backgroundColor: "#78d6c3",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#06263b",
    fontSize: 16,
    fontWeight: "800",
  },
});
