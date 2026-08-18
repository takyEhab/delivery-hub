import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeader } from "../components/ScreenHeader";
import { AddCustomerScreen } from "../screens/AddCustomerScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { colors } from "../theme/colors";
import type { Screen } from "./types";

const screenTitles: Record<Screen, string> = {
  home: "Delivery Hub",
  search: "Search",
  addCustomer: "Add Customer",
};

export function AppNavigator() {
  const [screen, setScreen] = useState<Screen>("home");

  const renderScreen = () => {
    switch (screen) {
      case "search":
        return <SearchScreen />;
      case "addCustomer":
        return <AddCustomerScreen onSave={() => setScreen("home")} />;
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
            <ScreenHeader
              title={screenTitles[screen]}
              onBack={() => setScreen("home")}
            />
          ) : null}
          {renderScreen()}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  appShell: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
