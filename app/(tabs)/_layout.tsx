import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: 20 }}>
              <FontAwesomeIcon icon={faHouse} size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: 20 }}>
              <FontAwesomeIcon icon={faCreditCard} size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: 20 }}>
              <FontAwesomeIcon icon={faLocationDot} size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
