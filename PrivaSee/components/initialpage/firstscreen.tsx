import { collectManifestSchemes } from "expo-linking";
import { Link } from "expo-router";
import {
  Text,
  View,
  /* @tutinfo Import <CODE>StyleSheet</CODE> to define styles. */ StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import { PaperProvider, useTheme, configureFonts } from "react-native-paper";
import { privaseeThemeDark } from "../../constants/themes";
import React from "react";

export default function BeginningScreen() {
  const theme = privaseeThemeDark;
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
        <View>
          <h1 style={{ color: theme.colors.primary, textAlign: "center" }}>
            PrivaSee
          </h1>
          <Text style={{ color: theme.colors.secondary, textAlign: "center" }}>
            Welcome to PrivaSee! Tap below to begin configuring your apps.
          </Text>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link href="/(tabs)/explore" asChild>
                <Button
                  mode="contained"
                  style={{ backgroundColor: theme.colors.primary }}
                >
                  <Text style={{ color: theme.colors.onPrimary }}>
                    Get Started
                  </Text>
                </Button>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* @tutinfo Add the value of <CODE>backgroundColor</CODE> property with <CODE>'#25292e'</CODE>.*/
    alignItems: "center",
    justifyContent: "center",
  },
});
