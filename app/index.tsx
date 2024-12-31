import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-slate-800 h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full justify-center items-center px-4 flex-row'>
          <Text className='text-gray-200 pr-4'>
            {`Hi there!\nThis is Meisha's App\nfor Sekawan Media selection process!`}
          </Text>
          <HelloWave />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
