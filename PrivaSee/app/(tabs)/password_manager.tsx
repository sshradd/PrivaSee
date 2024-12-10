import { collectManifestSchemes } from "expo-linking";
import { Link } from "expo-router";
import {
  Text,
  TextInput,
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
import React, { useEffect, useState } from "react";
import { PasswordAlertCenter } from "@/components/passwordnotifs/PasswordAlertCenter";
import { PasswordAlert } from "@/components/passwordnotifs/PasswordAlert";
import { PasswordListCenter } from "@/components/passwordList/PasswordListCenter";
import AppButton from "@/components/AppButton";
import { useRoute, RouteProp } from '@react-navigation/native';

// Define a type for the route parameters
type RouteParams = {
  selectedApps: string[]; // The type for selectedApps should be an array of strings
};

export default function BeginningScreen() {
  const theme = privaseeTheme;
  type PasswordManagerRouteProp = RouteProp<{ params: RouteParams }, 'params'>;
  const route = useRoute<PasswordManagerRouteProp>();
  const { selectedApps = [] } = route.params || {}; // Extract selected apps with a default value

  const [passwords, setPasswords] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Function to fetch passwords for the selected apps
    const fetchPasswords = async () => {
      const fetchedPasswords: { [key: string]: string } = {};
      for (const app of selectedApps) {
        // Replace this with your actual password fetching logic
        fetchedPasswords[app] = await getPasswordForApp(app);
      }
      setPasswords(fetchedPasswords);
    };

    fetchPasswords();
  }, [selectedApps]);

  // Dummy function to simulate fetching passwords
  const getPasswordForApp = async (app: string): Promise<string> => {
    // Replace this with your actual password fetching logic
    return "dummyPassword";
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
        {/* Main Content */}
        <Card style={{ width: 400 }}>
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
            Password Manager
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
            View and change your passwords.
          </Text>
        </Card>

        <Card
          style={{
            margin: 20,
            width: 400,
          }}
        >
          <Card.Content>
            <Text
              style={{
                color: theme.colors.primary,
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                margin: 20,
              }}
            >
              Alerts
            </Text>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PasswordAlertCenter>
                <PasswordAlert title="Password Similarity" message="Test1 message" />
                <PasswordAlert title="Unrecognized Device" message="Test3 message" />
                <PasswordAlert title="Weak Password" message="Test3 message" />
              </PasswordAlertCenter>
            </View>
          </Card.Content>
          <Card.Actions style={{ alignSelf: "center" }}>
            <View
              style={{
                margin: 20,
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

        <PasswordListCenter>
          {selectedApps.map((app) => (
            <View
              key={app}
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <AppButton appName={app} onPress={() => {}} />
              <TextInput
                style={{
                  marginRight: 10,
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  padding: 5,
                  width: 150,
                }}
                value={passwords[app] || ""}
                secureTextEntry={true}
                editable={false}
              />
            </View>
          ))}
        </PasswordListCenter>
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