import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import { PasswordAlert } from "./PasswordAlert";
import { Card } from "react-native-paper";

/*Alert center that can hold lots of password alert components*/
export const PasswordAlertCenter = ({ children }) => {
  return (
    <Card style={{
        maxWidth: "90%",
    }}>
      <Card.Content
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </ScrollView>
      </Card.Content>
    </Card>
  );
};
