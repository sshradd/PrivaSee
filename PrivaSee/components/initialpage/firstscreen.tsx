import { collectManifestSchemes } from "expo-linking";
import { Link } from "expo-router";
import {
  Text,
  View,
  /* @tutinfo Import <CODE>StyleSheet</CODE> to define styles. */ StyleSheet,
} from "react-native";
import { Button, Text as PaperText } from "react-native-paper";
import {
  PaperProvider,
  useTheme,
  configureFonts,
  Card,
} from "react-native-paper";
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
        <Card>
          <Card.Content>
            <PaperText
              variant="displayLarge"
              style={{ color: theme.colors.onSurface, textAlign: "center" }}
            >
              Welcome!
            </PaperText>
            <PaperText
              variant="bodyLarge"
              style={{
                marginTop: 10,
                marginBottom: 10,
                color: theme.colors.onSurface,
                textAlign: "center",
              }}
            >
              Welcome to PrivaSee! Tap below to begin configuring your apps.
            </PaperText>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
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
                  <Button mode="contained">
                    <Text style={{ color: theme.colors.onPrimary }}>
                      Get Started
                    </Text>
                  </Button>
                </Link>
              </View>
            </View>
          </Card.Actions>
        </Card>
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
