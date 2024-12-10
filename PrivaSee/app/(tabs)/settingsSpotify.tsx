import React, { useState } from "react";
import { Text, View, StyleSheet, Switch, Modal } from "react-native";
import { Button, Card, PaperProvider } from "react-native-paper";
import { Link } from "expo-router";
import { privaseeTheme } from "../../constants/themes";
import { List } from "react-native-paper";
import SettingInfoAccordion from "@/components/SettingInfoAccordion";

type ToggleSwitchProps = {
  isEnabled: boolean;
  onToggle: () => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isEnabled, onToggle }) => (
  <Switch
    trackColor={{ false: "#767577", true: privaseeTheme.colors.primary }}
    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
    onValueChange={onToggle}
    value={isEnabled}
  />
);

const EditConfigs: React.FC = () => {
  const theme = privaseeTheme;

  // Replaced individual toggle states with a single state to track the active toggle
  const [selectedToggle, setSelectedToggle] = useState("medium"); // Default to "medium"

  const [modalVisible, setModalVisible] = useState(false);

  const applySettings = () => {
    setModalVisible(true); // Show modal when "Apply Settings" is clicked
  };

  const toggleHandler = (toggleName: string) => {
    // Function to update the selected toggle
    setSelectedToggle(toggleName);
  };

  return (
    <PaperProvider theme={theme}>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Card style={styles.card}>
          <Text style={[styles.header, { color: theme.colors.primary }]}>
            Edit Configs
          </Text>
          <Text style={styles.subHeader}>Fine-tune your privacy settings</Text>

          <Text style={styles.sectionTitle}>Privacy Levels:</Text>
          <View style={styles.underlinedSection}>
            <SettingInfoAccordion title="Low Setting">
              <Text>
                Prioritize convenience over privacy: this configuration applies
                the minimal amount of privacy in order to maximize the app's
                ease of use.
              </Text>
            </SettingInfoAccordion>
          </View>
          <View style={styles.underlinedSection}>
            <SettingInfoAccordion title="Medium Setting">
              <Text>
                Balanced convenience and privacy: the app will be reasonably
                secure while the user can still access commonly-used features
                easily.
              </Text>
            </SettingInfoAccordion>
          </View>
          <View style={styles.underlinedSection}>
            <SettingInfoAccordion title="High Setting">
              <Text>
                High Privacy: this setting prioritizes the user's privacy above
                all else, which may lead to some inconveniences during usage.
              </Text>
            </SettingInfoAccordion>
          </View>

          <Text style={styles.sectionTitle}>Recommended Setting Applied:</Text>
          <View style={styles.section}>
            <Text style={styles.settingLabel}>Low</Text>
            <ToggleSwitch
              isEnabled={selectedToggle === "low"} // Check if "low" is active
              onToggle={() => toggleHandler("low")} // Activate "low"
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.settingLabel}>Medium</Text>
            <ToggleSwitch
              isEnabled={selectedToggle === "medium"} // Check if "medium" is active
              onToggle={() => toggleHandler("medium")} // Activate "medium"
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.settingLabel}>High</Text>
            <ToggleSwitch
              isEnabled={selectedToggle === "high"} // Check if "high" is active
              onToggle={() => toggleHandler("high")} // Activate "high"
            />
          </View>

          <Link href="/(tabs)/advancedsetSpotify" asChild>
            <Button mode="outlined" style={styles.advancedButton}>
              <Text style={{ color: theme.colors.primary }}>
                Advanced Settings
              </Text>
            </Button>
          </Link>

          <Button
            mode="contained"
            style={styles.applyButton}
            onPress={applySettings}
          >
            <Text style={{ color: theme.colors.onPrimary }}>
              Apply Settings
            </Text>
          </Button>
        </Card>

        {/* Modal for "Settings Applied!" message */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Settings Applied!</Text>
              <Button
                mode="contained"
                onPress={() => setModalVisible(false)}
                style={styles.modalButton}
              >
                OK
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 350,
    padding: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  underlinedSection: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 5,
    marginVertical: 5,
  },
  settingLabel: {
    fontSize: 18,
  },
  advancedButton: {
    marginTop: 20,
    alignSelf: "center",
  },
  applyButton: {
    marginTop: 10,
    alignSelf: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    marginTop: 10,
  },
});

export default EditConfigs;
