import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Feather, MaterialIcons, Octicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <View className='bg-[#09182D] flex-1'>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#37CBB1',
          tabBarInactiveTintColor: '#CDCDE0',
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {
              backgroundColor: '#1C2938',
              borderTopWidth: 0,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }),
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Feather size={22} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="project/[project]"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
}
