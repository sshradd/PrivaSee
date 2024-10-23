import { Text, Button } from "react-native-paper";
import { useState } from "react";
import React from "react";
import { View } from "react-native";
import { privaseeTheme } from "@/constants/themes";

export default function AppButton() {
  const [buttonColor, setButtonColor] = useState('grey');
  const theme = privaseeTheme;

  const handlePress = () => {
    setButtonColor(buttonColor === 'black' ? 'grey' : 'black');
  };

  return (
    <View style={{ alignItems: "center" }}>  {/* Center the contents */}
      <Button
        mode="contained"
        onPress={handlePress}
        style={{ backgroundColor: buttonColor, width: 85, height: 80 }}
      >
        AppX
      </Button>
      <Text style={{ color: theme.colors.primary, textAlign: "center", marginTop: 5 }}> {/* Reduced marginTop */}
        App Name
      </Text>
    </View>
  );
}
