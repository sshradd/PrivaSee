import React from "react";
import { privaseeThemeDark } from "./themes";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider theme={privaseeThemeDark}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: privaseeThemeDark.colors.primary,
          },
          headerTintColor: privaseeThemeDark.colors.onPrimary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
