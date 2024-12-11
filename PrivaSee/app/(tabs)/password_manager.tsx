import { collectManifestSchemes } from "expo-linking";
import { Link } from "expo-router";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView
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
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native"; // Use route to access

// Define a type for the route parameters
type RouteParams = {
  selectedApps: string[]; // The type for selectedApps should be an array of strings
};

export default function BeginningScreen() {
  const theme = privaseeTheme;

  const [passwords, setPasswords] = useState<{ [key: string]: string }>({});
  type PasswordManagerRouteProp = RouteProp<{ params: RouteParams }, 'params'>;
  const route = useRoute<PasswordManagerRouteProp>();
  const navigation = useNavigation();
  const { selectedApps } = route.params; // Extract selected apps

  // Parse selectedApps if it's a string (from JSON.stringify)
  const apps = Array.isArray(selectedApps)
  ? selectedApps
  : JSON.parse(selectedApps || "[]");

  // Log the apps to the console
  //console.log("Parsed apps:", apps);
    // Handle changes in the input box for passwords
  const handleInputChange = (app: string, text: string) => {
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [app]: text, // Update the password for the specific app
    }));
  };
  // Track if there are any alerts
  const alerts = [
    { title: "Password Breach", message: "Your password was found in an online breach!" },
    { title: "Similar Passwords", message: "Your passwords are too similar, consider changing them!" },
    { title: "Common Password", message: "Your password is very common, consider changing them!" }
  ];

  const hasAlerts = alerts.length > 0;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const saveChanges = () => {
    setModalVisible(true);
    setModalTitle("Success");
    setModalContent(<Text>You’ve successfully saved your password(s)!</Text>);
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
  
      <Card style={{ margin: 20, width: 400 }}>
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
                {alerts.map((alert, index) => (
                  <PasswordAlert key={index} title={alert.title} message={alert.message} />
                ))}
                <View style={{width: 300, height: 50}}> 
                </View>
              </PasswordAlertCenter>
            <View style={styles.appsContainer}>
              {apps.length > 0 ? (
                apps.map((app: string, index: number) => (
                  <View key={index} style={styles.appRow}>
                    {/* App Name with Border */}
                    <View style={styles.appNameWrapper}>
                      <Text style={styles.appText}>{app}</Text>
                    </View>

                    {/* Text Input for user input */}
                    <TextInput
                      style={styles.textInput}
                      placeholder="Password 123"
                      value={passwords[app] || ""}
                      onChangeText={(text) => handleInputChange(app, text)} // Assuming handleInputChange is defined
                    />
                  </View>
                ))
              ) : (
                <Text
                  style={{
                    color: theme.colors.shadow,
                    textAlign: "center",
                    fontSize: 15,
                  }}
                >
                  No Apps Selected!
                </Text>
              )}
            </View>


          </View>
        </Card.Content>
  
        <Card.Actions style={{ alignSelf: "center" }}>
          <Button
            mode="contained"
            onPress={saveChanges}
          >
            Save Chnages
          </Button>

                  {/* Modal for Info and Success Message */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{modalTitle}</Text>
                <ScrollView>
                  <Text style={styles.modalText}>{modalContent}</Text>
                </ScrollView>
                <Button
                  mode="contained"
                  onPress={() => setModalVisible(false)}
                  style={styles.modalButton}
                >
                  Close
                </Button>
              </View>
            </View>
          </Modal>
          <View style={{ margin: 20 }}>
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
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  appRow: {
    flexDirection: "row", // Aligning items horizontally (app on the left, text box on the right)
    alignItems: "center", // Vertical alignment
    marginVertical: 20, // Increased space between app rows
    width: "100%",
    justifyContent: "space-between", // Spacing between text and input
  },
  appNameWrapper: {
    borderWidth: 1,
    borderColor: "rgb(71, 85, 182)", // Color of the border around the app name
    borderRadius: 5,
    padding: 5,
    marginRight: 10, // Space between app name and text input
  },
  appText: {
    fontSize: 18,
    color: "rgb(71, 85, 182)",
    textAlign: "center", // Center align the text inside the bordered area
  },
  textInput: {
    width: 150,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    maxHeight: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    textAlign: "left",
  },
  modalButton: {
    marginTop: 10,
  }
});
