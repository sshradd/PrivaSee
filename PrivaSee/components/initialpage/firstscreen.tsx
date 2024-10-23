import { collectManifestSchemes } from "expo-linking";
import { Link } from "expo-router";
import {
  Text,
  View,
  /* @tutinfo Import <CODE>StyleSheet</CODE> to define styles. */ StyleSheet,
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
        </Card>
        <Card>
          <Card.Content>
            <Image
              source={require("../../assets/images/privasee-logo.png")}
              style={{
                width: 200,
                height: 350,
                alignSelf: "center",
              }}
            />
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
              Secure your Data
            </Text>
          </Card.Content>
          <Card.Actions style={{ alignSelf: "center" }}>
            <View
              style={{
                margin: 20,
                marginBottom:50
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href="/(tabs)/selectApps" asChild>
                  <Button mode="contained">
                    <Text style={{ color: theme.colors.onPrimary }}>
                      Detect Apps
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
