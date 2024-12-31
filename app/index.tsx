import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/ui/CustomButton';

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-[#09182D] h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full min-h-[85vh] justify-between items-center px-4'>
          <View className='flex-row w-full justify-center items-center'>
            <Image
              source={require('../assets/images/logo sekawan light.png')}
              className='w-40 h-40 mr-safe-or-5'
              resizeMode='contain'
            />
            <Image
              source={require('../assets/images/Logo Symbol 1.png')}
              className='w-14 h-14'
              resizeMode='contain'
            />
          </View>
          <View className='relative mt-5 justify-center items-center'>
            <View className='flex-row justify-center items-center'>
              <Text className='text-gray-200 pr-4 text-2xl font-bold text-justify'>
                Well, Hello There!{' '}
              </Text>
              <HelloWave />
            </View>
            <Image
              source={require('../assets/images/iPhone 16 Pro - 1.png')}
              className='w-96 h-96 my-5'
              resizeMode='contain'
            />
            <Text className='mt-5 text-gray-200 pr-4 text-xl font-bold text-center'>
              This is Meisha's App for Sekawan Media selection process!
            </Text>
          </View>
          <CustomButton
            title={'Get Started'}
            handlePress={() => router.push('/home')}
            containerStyles={'w-full mt-7'}
            textStyles={""}
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
