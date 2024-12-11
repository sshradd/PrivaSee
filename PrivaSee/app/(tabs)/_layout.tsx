import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Slot } from "expo-router";
import { Header } from "@react-navigation/stack";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
    //       ),
    //     }}
    //   />

    // </Tabs>

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="appDashboard"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="selectApps"
        options={{
          title: "Select Apps",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "apps" : "apps-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="selection/selectApps"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen name="oldindex" options={{ href: null }} />
      <Tabs.Screen
        name="settings"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="settingsSnapchat"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="settingsInstagram"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="settingsTikTok"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="settingsX"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="settingsSpotify"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="settingsYoutube"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="advancedsetSnapchat"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="advancedsetInstagram"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="advancedsetTikTok"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="advancedsetX"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="advancedsetSpotify"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="advancedsetYoutube"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen name="dashboard" options={{ href: null }} />
      <Tabs.Screen
        name="advancedset"
        options={{ headerShown: false, href: null }}
      />
      <Tabs.Screen
        name="password_manager"
        options={{ headerShown: false, href: null }}
      />
    </Tabs>
  );
}
