import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BeginningScreen from "../components/initialpage/firstscreen";
import SelectApps from "./(tabs)/selectApps";
import AppDashboard from "./(tabs)/appDashboard";
import Dashboard from "./(tabs)/dashboard";
import EditConfigs from "./(tabs)/settings";
import AdvancedSettings from "./(tabs)/advancedset";
import PasswordManager from "./(tabs)/password_manager";

// Define your navigation parameter list
export type RootStackParamList = {
  Beginning: undefined;
  Dashboard: undefined;
  SelectApps: undefined;
  AppDashboard: { selectedApps: string[] };
  EditConfigs: undefined;
  AdvancedSettings: undefined;
  PasswordManager:  { selectedApps: string[] };
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <React.Fragment>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Beginning">
          <Stack.Screen
            name="Beginning"
            component={BeginningScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectApps"
            component={SelectApps}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppDashboard"
            component={AppDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditConfigs"
            component={EditConfigs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdvancedSettings"
            component={AdvancedSettings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PasswordManager"
            component={PasswordManager}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
