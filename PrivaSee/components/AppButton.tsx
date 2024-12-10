import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface AppButtonProps {
  appName: string;
  onPress: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({ appName, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    onPress();
  };

  return (
    <Button
      mode="outlined"
      onPress={handlePress}
      style={isPressed ? styles.pressed : styles.default}
    >
      {appName}
    </Button>
  );
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white',
    borderColor: "rgb(71, 85, 182)",
    margin: 5,
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: "rgba(71, 85, 182, 0.5)", 
    borderColor: '#00796b',     // darker border when pressed
  },
});

export default AppButton;
