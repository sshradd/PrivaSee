import { Link } from "expo-router";
import { Button, Card } from "react-native-paper";
import { PaperProvider } from "react-native-paper";
import { privaseeTheme } from "../constants/themes";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "@/components/AppButton";

const SelectApps = () => {
  const theme = privaseeTheme;

  // State to keep track of selected apps
  const [selectedApps, setSelectedApps] = useState<string[]>([]);

  const handleAppSelect = (appName: string) => {
    setSelectedApps((prev) => {
      if (prev.includes(appName)) {
        // If app is already selected, remove it
        return prev.filter((app) => app !== appName);
      } else {
        // Otherwise, add it to the selected apps
        return [...prev, appName];
      }
    });
  };

  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <Card style={{ marginBottom: 50, width: "90%" }}>
          <Text
            style={{
              color: theme.colors.primary,
              textAlign: "center",
              fontSize: 50,
              fontWeight: "bold",
              margin: 20,
              marginBottom: 5,
            }}
          >
            Choose apps.
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
            Select the apps you would like to track.
          </Text>
        </Card>

        <Card style={{ height: "50%" , width: 370}}>
          <Card.Content>
            <View style={styles.appButtonContainer}>
              {/* Render AppButton for each app */}
              {[
                "Instagram",
                "TikTok",
                "Snapchat",
                "X",
                "Spotify",
                "Youtube",
              ].map((app, index) => (
                <AppButton
                  key={index}
                  appName={app}
                  onPress={() => handleAppSelect(app)}
                />
              ))}
            </View>

            <Text
              style={{
                color: theme.colors.primary,
                textAlign: "center",
                fontSize: 45,
                fontWeight: "bold",
                margin: 5,
                marginBottom: 5,
              }}
            ></Text>
          </Card.Content>

          <Card.Actions style={{ alignSelf: "center" }}>
            {/* <View
              style={{
                margin: 20,
                marginBottom: 50,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              </View>
            </View> */}
            <Link
              href={{
                pathname: "/(tabs)/appDashboard",
                params: { selectedApps: JSON.stringify(selectedApps) }, // Make sure it's a string
              }}
              asChild
            >
              <Button mode="contained">Apply</Button>
            </Link>
          </Card.Actions>
        </Card>
        {/* <Card style={{ marginTop: "15%" }}></Card> */}
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    flexDirection: "row", // Row layout
    flexWrap: "wrap", // Wrap to next line after exceeding width
    justifyContent: "center", // Center buttons horizontally
    alignItems: "center", // Center buttons vertically within each row
    gap: 15, // Adjust space between buttons
    width: "90%", // Make the container flexible in width
    paddingHorizontal: 20, // Add padding on the sides if needed
    marginBottom: 0,
  },
});

export default SelectApps;
