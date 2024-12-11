import React from "react";
import { privaseeThemeDark, privaseeTheme } from "../constants/themes";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider theme={privaseeTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: privaseeTheme.colors.primary,
          },
          headerTintColor: privaseeTheme.colors.onPrimary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="testpwdalerts" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="selectApps" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
