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

const dashboard = () => {
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
            Dashboard.
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
        </Card>
        <Card>
          <Card.Content>
            
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
                      Done
                    </Text>
                  </Button>
                </Link>
              </View>
            </View>
          </Card.Actions>
        </Card>
      </View>
    </PaperProvider>
    </View>
  )
}

export default dashboard