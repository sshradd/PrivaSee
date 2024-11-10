import React, { useState } from "react";
import { Text, View, StyleSheet, Switch, Modal, TouchableOpacity } from "react-native";
import { Button, PaperProvider } from "react-native-paper";
import { Link } from "expo-router";
import { privaseeTheme } from "../../constants/themes";
import { useNavigation } from "@react-navigation/native";
 
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
 
const AdvancedSettings: React.FC = () => {
  const theme = privaseeTheme;
  const [passwordProtection, setPasswordProtection] = useState(false);
  const [lockingApps, setLockingApps] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
 
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const navigation = useNavigation();
 
  const openModal = (content: string) => {
    setModalContent(content);
    setModalVisible(true);
  };
 
  return (
    <PaperProvider theme={theme}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.card}>
          <Text style={[styles.header, { color: theme.colors.primary }]}>Advanced Settings</Text>
          <Text style={styles.subHeader}>Fine-tune your privacy settings</Text>
 
          {/* Setting items with onPress to open modal */}
          <TouchableOpacity onPress={() => openModal("Password Protection refers to the protection of passwords.")}>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>Password Protection</Text>
              <ToggleSwitch isEnabled={passwordProtection} onToggle={() => setPasswordProtection(!passwordProtection)} />
            </View>
          </TouchableOpacity>
 
          <TouchableOpacity onPress={() => openModal("Locking Apps prevents unauthorized access to specific apps.")}>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>Locking Apps</Text>
              <ToggleSwitch isEnabled={lockingApps} onToggle={() => setLockingApps(!lockingApps)} />
            </View>
          </TouchableOpacity>
 
          <TouchableOpacity onPress={() => openModal("2FA (Two-Factor Authentication) adds an extra layer of security.")}>
            <View style={styles.section}>
              <Text style={styles.settingLabel}>2FA</Text>
              <ToggleSwitch isEnabled={twoFactorAuth} onToggle={() => setTwoFactorAuth(!twoFactorAuth)} />
            </View>
          </TouchableOpacity>
 
          <Link href="/(tabs)/appDashboard" asChild>
            <Button mode="contained" style={styles.applyButton} >
              <Text style={{ color: theme.colors.onPrimary }}>Apply Settings</Text>
            </Button>
          </Link>
        </View>
 
        {/* Modal for info pop-up */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{modalContent}</Text>
              <Button mode="contained" onPress={() => setModalVisible(false)} style={styles.modalButton}>
                Got It
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
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  settingLabel: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: privaseeTheme.colors.primary,
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
 
export default AdvancedSettings;