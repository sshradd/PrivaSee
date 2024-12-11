import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

/* Alert center that can hold lots of password alert components */
import { ReactNode } from "react";

export const PasswordListCenter = ({ children }: { children: ReactNode }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true} // Enable vertical scroll indicator
        >
          {children}
        </ScrollView>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    maxWidth: "70%",
    width: 200,
    height: 400,
    marginVertical: 0, // Add some vertical spacing if needed
  },
  cardContent: {
    justifyContent: "flex-start", // Align items to the start for vertical scrolling
    alignItems: "flex-start",
    
    flexGrow: 1,
  },
  scrollViewContent: {
    alignItems: 'flex-start', // Center horizontally
    maxHeight: 500,
    overflow: "scroll",
    paddingVertical: 10, // Add padding for spacing
  },
});
