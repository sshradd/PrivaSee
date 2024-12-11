import { collectManifestSchemes } from "expo-linking";
import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Text as PaperText } from "react-native-paper";
import { 
  PaperProvider, 
  useTheme, 
  Card 
} from "react-native-paper";
import { privaseeThemeDark, privaseeTheme } from "../../constants/themes";
import React from "react";

export default function BeginningScreen() {
  const theme = privaseeTheme;

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
        {/* App Status Icon/Button */}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 40,
            right: 20,
            backgroundColor: theme.colors.primary,
            padding: 10,
            borderRadius: 50,
          }}
          onPress={() => alert("App Health: Great and up-to-date. Version 2.0.0 ")} // Alert as a placeholder
        >
          <Text
            style={{
              color: theme.colors.onPrimary,
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            App Health
          </Text>
        </TouchableOpacity>

        {/* Main Content */}
        <Card style={{ marginBottom: 10, width: 400 }}>
          <Text
            style={{
              color: theme.colors.primary,
              textAlign: "center",
              fontSize: 50,
              fontWeight: "bold",
              margin: 10,
              marginBottom: 5,
            }}
          >
            Welcome!
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
            Let's get you set up to secure your data.
          </Text>
          <Link href="/selectApps" asChild>
            <Button mode="contained">
              <Text style={{ color: theme.colors.onPrimary }}>Detect Apps</Text>
            </Button>
          </Link>
        </Card>

        <Card>
          <Card.Content>
            <Image
              source={require("../../assets/images/privasee-logo.png")}
              style={{
                width: 200,
                height: 215,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: theme.colors.primary,
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bold",
                margin: 20,
                marginBottom: 5,
              }}
            >
              Secure your Data
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
              ></View>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
