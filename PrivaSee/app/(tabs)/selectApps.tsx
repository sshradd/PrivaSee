import { collectManifestSchemes } from "expo-linking";
import { Link } from "expo-router";
import AppButton from "@/components/appButton";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Button, Text as PaperText } from "react-native-paper";
import {
  PaperProvider,
  useTheme,
  configureFonts,
  Card,
} from "react-native-paper";
import { privaseeThemeDark, privaseeTheme } from "../../constants/themes";
import React from "react";
import { useState } from "react";

const selectApps = () => {
  const theme = privaseeTheme;

  return (
    <View>
      <PaperProvider theme={theme}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.background,
          }}
        >
          <Card style={{ marginBottom: 50, width: 440 }}>
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

          <Card>
            <Card.Content>
              <View style={styles.appButtonContainer}>
                <AppButton />
                <AppButton />
                <AppButton />
                <AppButton />
                <AppButton />
                <AppButton />
              </View>

              <Text
                style={{
                  color: theme.colors.primary,
                  textAlign: "center",
                  fontSize: 45,
                  fontWeight: "bold",
                  margin: 20,
                  marginBottom: 5,
                }}
              >
              </Text>
            </Card.Content>

            <Card.Actions style={{ alignSelf: "center" }}>
              <View
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
                  <Link href="/(tabs)/dashboard" asChild>
                    <Button mode="contained">Done</Button>
                  </Link>
                </View>
              </View>
            </Card.Actions>
          </Card>
        </View>
      </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    flexDirection: "row",     // Row layout
    flexWrap: "wrap",         // Wrap to next line after exceeding width
    justifyContent: "center", // Center buttons horizontally
    alignItems: "center",     // Center buttons vertically within each row
    gap: 15,                  // Adjust space between buttons
    width: 400,            // Make the container flexible in width
    paddingHorizontal: 20,    // Add padding on the sides if needed
  },
});

export default selectApps;
