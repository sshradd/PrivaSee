import React, { useState } from "react";
import { Text, View, StyleSheet, Switch, Modal, TouchableOpacity } from "react-native";
import { Button, Card, PaperProvider } from "react-native-paper";
import { Link } from "expo-router";
import { privaseeTheme } from "../../constants/themes";
import { MaterialIcons } from "@expo/vector-icons";

const ToggleSwitch = ({ isEnabled, onToggle }: { isEnabled: boolean; onToggle: () => void }) => (
  <Switch
    trackColor={{ false: "#767577", true: privaseeTheme.colors.primary }}
    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
    onValueChange={onToggle}
    value={isEnabled}
  />
);

const EditConfigs = () => {
  const theme = privaseeTheme;

  const [selectedToggle, setSelectedToggle] = useState("medium");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const applySettings = () => {
    setModalVisible(true);
    setModalTitle("Settings Applied!");
    setModalContent(<Text>Your settings have been successfully applied!</Text>);
  };

  const openInfoModal = (level: string) => {
    let title = "";
    let content: React.ReactNode = null;

    if (level === "low") {
      title = "Low Privacy Setting";
      content = <Text>Prioritize convenience over privacy: this configuration applies the minimal amount of privacy in order to maximize the app's ease of use.</Text>;
    } else if (level === "medium") {
      title = "Medium Privacy Setting";
      content = <Text>Balanced convenience and privacy: the app will be reasonably secure while the user can still access commonly-used features easily.</Text>;
    } else if (level === "high") {
      title = "High Privacy Setting";
      content = <Text>High Privacy: this setting prioritizes the user's privacy above all else, which may lead to some inconveniences during usage.</Text>;
    }

    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <PaperProvider theme={theme}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Card style={styles.card}>
          <Text style={[styles.header, { color: theme.colors.primary }]}>Edit Configs</Text>
          <Text style={styles.subHeader}>Fine-tune your privacy settings</Text>

          <Text style={styles.sectionTitle}>Privacy Levels:</Text>

          {['low', 'medium', 'high'].map((level) => (
            <View key={level} style={styles.sectionRow}>
              <Text style={styles.settingLabel}>{level.charAt(0).toUpperCase() + level.slice(1)} Setting</Text>
              <TouchableOpacity onPress={() => openInfoModal(level)}>
                <MaterialIcons name="help-outline" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          ))}

          <Text style={styles.sectionTitle}>Recommended Setting Applied:</Text>

          {['low', 'medium', 'high'].map((level) => (
            <View key={level} style={styles.section}>
              <Text style={styles.settingLabel}>{level.charAt(0).toUpperCase() + level.slice(1)}</Text>
              <ToggleSwitch
                isEnabled={selectedToggle === level}
                onToggle={() => setSelectedToggle(level)}
              />
            </View>
          ))}

          <Link href="/(tabs)/advancedsetYoutube" asChild>
            <Button mode="outlined" style={styles.advancedButton}>
              <Text style={{ color: theme.colors.primary }}>Advanced Settings</Text>
            </Button>
          </Link>

          <Button mode="contained" style={styles.applyButton} onPress={applySettings}>
            <Text style={{ color: theme.colors.onPrimary }}>Apply Settings</Text>
          </Button>
        </Card>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <Text style={styles.modalText}>{modalContent}</Text>
              <Button mode="contained" onPress={() => setModalVisible(false)} style={styles.modalButton}>
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
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
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
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    marginTop: 10,
  },
});

export default EditConfigs;
