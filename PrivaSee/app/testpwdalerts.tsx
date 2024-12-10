import React from "react";
import { View, Text } from "react-native";
import { PasswordAlertCenter } from "@/components/passwordnotifs/PasswordAlertCenter";
import { PasswordAlert } from "@/components/passwordnotifs/PasswordAlert";

export default function MainPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PasswordAlertCenter>
        <PasswordAlert title="Test1" message="Test1 message" />
        <PasswordAlert title="Test2" message="Test2 message" />
        <PasswordAlert title="Test3" message="Test3 message" />
      </PasswordAlertCenter>
    </View>
  );
}
