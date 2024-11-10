import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BeginningScreen from '../components/initialpage/firstscreen';
import SelectApps from './(tabs)/selectApps'; 
import AppDashboard from './(tabs)/appDashboard'; 
import Dashboard from './(tabs)/dashboard'; 
import EditConfigs from './(tabs)/settings';
import AdvancedSettings from './(tabs)/advancedset';

// Define your navigation parameter list
export type RootStackParamList = {
  Beginning: undefined;
  Dashboard: undefined;
  SelectApps: undefined;
  AppDashboard: { selectedApps: string[] };
  EditConfigs: undefined;
  AdvancedSettings: undefined;
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <React.Fragment>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Beginning">
          <Stack.Screen name="Beginning" component={BeginningScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="SelectApps" component={SelectApps} />
          <Stack.Screen name="AppDashboard" component={AppDashboard} />
          <Stack.Screen name="EditConfigs" component={EditConfigs} />
          <Stack.Screen name="AdvancedSettings" component={AdvancedSettings} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
