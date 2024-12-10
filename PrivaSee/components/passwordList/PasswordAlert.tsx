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
  
  return (
    <View>
      hello
    </View>
  );
};
