import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button as RegButton,
} from "react-native";
import { FAB } from "react-native-paper";
import {
  Dialog,
  Card,
  Button,
  Modal,
  Portal,
  PaperProvider,
} from "react-native-paper";
import { privaseeTheme } from "@/constants/themes";

// Function to open alert popup

type AlertProps = {
  title: string;
  message: string;
};

export const PasswordAlert = (props: AlertProps) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  function dismiss() {
    setDismissed(true);
    setVisible(false);
  }
  return (
    <View>
      {!dismissed && (
        <FAB
          icon="alert"
          label={props.title}
          style={{
            margin: 8,
            backgroundColor: privaseeTheme.colors.errorContainer,
          }}
          color={privaseeTheme.colors.error}
          onPress={() => setVisible(true)}
        />
      )}

      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 20,
            margin: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: privaseeTheme.colors.error,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              margin: 10,
            }}
          >
            {props.message}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 10,
            }}
          >
            <Button
              onPress={() => setVisible(false)}
              style={{
                alignSelf: "flex-start",
              }}
            >
              Close
            </Button>
            <Button
              onPress={dismiss}
              style={{
                alignSelf: "flex-end",
              }}
            >
              Dismiss
            </Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};
