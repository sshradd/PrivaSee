import React, { useState } from "react";
import { Text, View, StyleSheet, Switch, ScrollView, Modal, TouchableOpacity } from "react-native";
import { Button, Card, PaperProvider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { privaseeTheme } from "../../constants/themes";

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

  const [lowSettings, setLowSettings] = useState({
    adTrackerBlocking: false,
    vpn: false,
  });

  const [mediumSettings, setMediumSettings] = useState({
    twoFactorAuth: false,
    appPermissionsReview: false,
    appActivityLogging: false,
    restrictedLocationSharing: false,
  });

  const [highSettings, setHighSettings] = useState({
    encryptedAppData: false,
    pinCodeForApps: false,
    cameraMicNotifications: false,
    privacyLockScreen: false,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const applySettings = () => {
    setModalVisible(true);
    setModalTitle("Success");
    setModalContent(<Text>You’ve successfully changed your advanced settings!</Text>);
  };

  const openInfoModal = (level: string) => {
    let title = "";
    let content: React.ReactNode = null;

    if (level === "low") {
      title = "Low Privacy Settings";
      content = (
        <>
          <Text style={styles.boldText}>Ad Tracker Blocking:</Text>{" "}
          <Text style={styles.regularText}>Block tracking cookies and advertisements.</Text>
          {"\n\n"}
          <Text style={styles.boldText}>VPN On/Off:</Text>{" "}
          <Text style={styles.regularText}>Enable a secure VPN connection.</Text>
        </>
      );
    } else if (level === "medium") {
      title = "Medium Privacy Settings";
      content = (
        <>
          <Text style={styles.boldText}>2-Factor Authentication:</Text>{" "}
          <Text style={styles.regularText}>Require an extra verification step for login.</Text>
          {"\n\n"}
          <Text style={styles.boldText}>App Permissions Review:</Text>{" "}
          <Text style={styles.regularText}>Prompt to review app permissions periodically.</Text>
          {"\n\n"}
          <Text style={styles.boldText}>App Activity Logging:</Text>{" "}
          <Text style={styles.regularText}>Record app usage history but restrict sharing.</Text>
          {"\n\n"}
          <Text style={styles.boldText}>Restricted Location Sharing:</Text>{" "}
          <Text style={styles.regularText}>Share approximate location only.</Text>
        </>
      );
    } else if (level === "high") {
      title = "High Privacy Settings";
      content = (
        <>
          <Text style={styles.boldText}>Encrypted App Data:</Text>{" "}
          <Text style={styles.regularText}>Encrypt all app data stored on the device.</Text>
          {"\n\n"}
          <Text style={styles.boldText}>PIN Code for Apps:</Text>{" "}
          <Text style={styles.regularText}>Require a PIN code to access specific apps.</Text>
          {"\n\n"}
          <Text style={styles.boldText}>Camera and Microphone Access Notifications:</Text>{" "}
          <Text style={styles.regularText}>
            Notify when apps access the camera or microphone.
          </Text>
          {"\n\n"}
          <Text style={styles.boldText}>Privacy Lock Screen:</Text>{" "}
          <Text style={styles.regularText}>Disable notification previews on the lock screen.</Text>
        </>
      );
    }

    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { backgroundColor: theme.colors.background }]}
      >
        <Card style={styles.card}>
          <Text style={[styles.header, { color: theme.colors.primary }]}>Advanced Settings</Text>

          {/* Low Privacy Settings */}
          <View style={styles.sectionBox}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Low Privacy Settings</Text>
              <TouchableOpacity onPress={() => openInfoModal("low")}>
                <MaterialIcons name="help-outline" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>Ad Tracker Blocking</Text>
              <ToggleSwitch
                isEnabled={lowSettings.adTrackerBlocking}
                onToggle={() =>
                  setLowSettings((prev) => ({
                    ...prev,
                    adTrackerBlocking: !prev.adTrackerBlocking,
                  }))
                }
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>VPN On/Off</Text>
              <ToggleSwitch
                isEnabled={lowSettings.vpn}
                onToggle={() =>
                  setLowSettings((prev) => ({
                    ...prev,
                    vpn: !prev.vpn,
                  }))
                }
              />
            </View>
          </View>

          {/* Medium Privacy Settings */}
          <View style={styles.sectionBox}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Medium Privacy Settings</Text>
              <TouchableOpacity onPress={() => openInfoModal("medium")}>
                <MaterialIcons name="help-outline" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>2-Factor Authentication</Text>
              <ToggleSwitch
                isEnabled={mediumSettings.twoFactorAuth}
                onToggle={() =>
                  setMediumSettings((prev) => ({
                    ...prev,
                    twoFactorAuth: !prev.twoFactorAuth,
                  }))
                }
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>App Permissions Review</Text>
              <ToggleSwitch
                isEnabled={mediumSettings.appPermissionsReview}
                onToggle={() =>
                  setMediumSettings((prev) => ({
                    ...prev,
                    appPermissionsReview: !prev.appPermissionsReview,
                  }))
                }
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>App Activity Logging</Text>
              <ToggleSwitch
                isEnabled={mediumSettings.appActivityLogging}
                onToggle={() =>
                  setMediumSettings((prev) => ({
                    ...prev,
                    appActivityLogging: !prev.appActivityLogging,
                  }))
                }
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>Restricted Location Sharing</Text>
              <ToggleSwitch
                isEnabled={mediumSettings.restrictedLocationSharing}
                onToggle={() =>
                  setMediumSettings((prev) => ({
                    ...prev,
                    restrictedLocationSharing: !prev.restrictedLocationSharing,
                  }))
                }
              />
            </View>
          </View>

          {/* High Privacy Settings */}
          <View style={styles.sectionBox}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>High Privacy Settings</Text>
              <TouchableOpacity onPress={() => openInfoModal("high")}>
                <MaterialIcons name="help-outline" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>Encrypted App Data</Text>
              <ToggleSwitch
                isEnabled={highSettings.encryptedAppData}
                onToggle={() =>
                  setHighSettings((prev) => ({
                    ...prev,
                    encryptedAppData: !prev.encryptedAppData,
                  }))
                }
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>PIN Code for Apps</Text>
              <ToggleSwitch
                isEnabled={highSettings.pinCodeForApps}
                onToggle={() =>
                  setHighSettings((prev) => ({
                    ...prev,
                    pinCodeForApps: !prev.pinCodeForApps,
                  }))
                }
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>Camera & Mic Notifications</Text>
              <ToggleSwitch
                isEnabled={highSettings.cameraMicNotifications}
                onToggle={() =>
                  setHighSettings((prev) => ({
                    ...prev,
                    cameraMicNotifications: !prev.cameraMicNotifications,
                  }))
                }
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>Privacy Lock Screen</Text>
              <ToggleSwitch
                isEnabled={highSettings.privacyLockScreen}
                onToggle={() =>
                  setHighSettings((prev) => ({
                    ...prev,
                    privacyLockScreen: !prev.privacyLockScreen,
                  }))
                }
              />
            </View>
          </View>

          <Button
            mode="contained"
            style={styles.applyButton}
            onPress={applySettings}
          >
            Apply Settings
          </Button>
        </Card>

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
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  settingLabel: {
    fontSize: 16,
    flex: 1,
  },
  applyButton: {
    marginTop: 20,
    alignSelf: "center",
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
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  regularText: {
    fontSize: 16,
  },
  modalText: {
    textAlign: "left",
  },
  modalButton: {
    marginTop: 10,
  },
});

export default EditConfigs;
