import { Button, Card } from "react-native-paper";
import { privaseeTheme } from "../../constants/themes";
import { View, Text, StyleSheet, Image, Settings } from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native"; // Use route to access
import { PaperProvider } from "react-native-paper";
import AppButton from "@/components/AppButton";
import { Link } from "expo-router";

// Define a type for the route parameters
type RouteParams = {
  selectedApps: string[]; // The type for selectedApps should be an array of strings
};

const AppDashboard: React.FC = () => {
  const theme = privaseeTheme;
  const route = useRoute();
  const navigation = useNavigation();
  const { selectedApps } = route.params; // Extract selected apps

  // Parse selectedApps if it's a string (from JSON.stringify)
  const apps = Array.isArray(selectedApps)
    ? selectedApps
    : JSON.parse(selectedApps || "[]");

  return (
    <View style={styles.container}>
      <Card style={{ marginBottom: 20, width: "90%" }}>
        <Text
          style={{
            color: theme.colors.primary,
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
            margin: 20,
            marginBottom: 0,
          }}
        >
          Dashboard
        </Text>
        <Text
          style={{
            color: theme.colors.primary,
            textAlign: "center",
            fontSize: 20,
            margin: 20,
            marginTop: 5,
          }}
        >
          Monitor your footprint here.
        </Text>
        <Text
          style={{
            color: theme.colors.primary,
            textAlign: "center",
            fontSize: 20,
            margin: 20,
            marginTop: 5,
          }}
        >
          Press an app icon to see app specific settings.
        </Text>
      </Card>
      <Card style={{ width: "90%" }}>
        <Card.Content style={{ alignItems: "center" }}>
          {/* Render Selected Apps */}
          <View style={styles.appsContainer}>
            {apps.length > 0 ? (
              apps.map((app, index) => (
                <View key={index} style={styles.appIconWrapper}>
                  <Link
                    href={{
                      pathname: "/(tabs)/settings",
                    }}
                    asChild
                  >
                    <AppButton key={index} appName={app} onPress={() => {}} />
                  </Link>
                </View>
              ))
            ) : (
              <Text
                style={{
                  color: theme.colors.shadow,
                  textAlign: "center",
                  fontSize: 15,
                }}
              >
                No Apps Selected!
              </Text>
            )}
          </View>
          <Text
            style={{
              color: theme.colors.primary,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              margin: 20,
              marginBottom: 5,
              marginTop: 10,
            }}
          >
            Your Activity Chart
          </Text>
          <Image
            source={require("../../assets/images/activity-chart.png")}
            style={{
              marginTop: 10,
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
          />
          <View style={styles.usageStatsContainer}>
            <View style={styles.usageStat}>
              <View
                style={[styles.dot, { backgroundColor: "rgb(54, 19, 90)" }]}
              />
              <Text style={styles.statLabel}>Your Files</Text>
              <Text style={styles.statPercentage}>63%</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.usageStat}>
              <View
                style={[styles.dot, { backgroundColor: "rgb(95, 107, 233)" }]}
              />
              <Text style={styles.statLabel}>System</Text>
              <Text style={styles.statPercentage}>25%</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  headerCard: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    marginBottom: 30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4B2C82",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#4B2C82",
    marginTop: 5,
  },
  appsContainer: {
    flexDirection: "row", // Row layout
    flexWrap: "wrap", // Wrap to next line after exceeding width
    justifyContent: "center", // Center buttons horizontally
    alignItems: "center", // Center buttons vertically within each row
    gap: 15, // Adjust space between buttons
    width: 400, // Make the container flexible in width
    paddingHorizontal: 20, // Add padding on the sides if needed
    marginBottom: 0,
  },
  appIconWrapper: {
    alignItems: "center",
    marginRight: 20,
  },
  appName: {
    marginTop: 10,
    fontSize: 14,
    color: "#000",
  },
  addAppButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    position: "absolute",
    bottom: 40,
  },
  usageStatsContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //marginTop: 20,
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    width: 250,
  },
  usageStat: {
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(71, 85, 182)",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#333",
  },
  statPercentage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  separator: {
    width: 1,
    height: "100%",
    backgroundColor: "#CCC",
    marginHorizontal: 10,
  },
});

export default AppDashboard;
