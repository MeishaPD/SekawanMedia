import React from 'react';
import { StyleSheet, Image, Platform, Text, View, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function TabTwoScreen() {

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#09182D', dark: '#09182D' }}
      headerImage={
        <Image
          source={require('../../assets/images/logo sekawan light.png')}
          className='w-96 h-96'
          resizeMode="contain"
          style={styles.headerImage}
        />
      }
    >
      <View className='my-3 flex-row items-center'>
        <Image
          source={require('../../assets/images/_1380310 1.png')}
          className='rounded-full w-24 h-24 mr-4'
          resizeMode="cover"
        />
        <ThemedText type="title" style={styles.profileName}>
          Meisha Putradewan
        </ThemedText>
      </View>
      <Text className='text-xl justify-center' >
        Hi! My name is Meisha Putradewan, and I am currently a 6th-semester student at Universitas Brawijaya,
        Faculty of Computer Science, majoring in Information Technology with GPA of 3.83. I am passionate about designing and
        developing user-friendly and engaging digital experiences.
      </Text>

      <Collapsible title="Skills">
        <ThemedText>
          {`- UI/UX Designer: Figma, Adobe Photoshop, Adobe Illustrator
- Frontend Developer: React, Laravel, Next.js, TailwindCSS
- Mobile Developer: Java, Kotlin, React Native, Flutter`}
        </ThemedText>
      </Collapsible>

      <Collapsible title="Experiences">
        <ThemedText>
          {`- Staff Humas FILAFEST 2023
- Staff DDM FILKOM LEAGUE 2024
- Head of DDM PORSIMABA 2024
- Volunteer FILKOM Goes To School 2023 (FGTS 2023)`}
        </ThemedText>
      </Collapsible>

      <Collapsible title="Achievements">
        <ThemedText>
          {`- Finalist in several national competitions
- Teaching Assistant for Mobile Application Programming and Internet of Things (Semester 5, AY 2024/2025)`}
        </ThemedText>
      </Collapsible>

      <Collapsible title="Freelance Experience">
        <ThemedText>
          {`Although I haven't officially worked in a particular field, I have frequently assisted in task completion (freelance work) for various courses, including:
- Mobile application programming
- Web application programming (both frontend and backend)`}
        </ThemedText>
      </Collapsible>

      <Collapsible title="Contact">
        <ThemedText>
          Feel free to reach out if you'd like to collaborate or learn more about my work!
        </ThemedText>
      </Collapsible>
      <View className='flex-row justify-center gap-5 items-center mt-5'>
        <TouchableOpacity
          onPress={() => openLink('https://github.com/MeishaPD')}
        >
          <AntDesign name="github" color="black" size={28} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openLink('https://www.linkedin.com/in/putradewanm/')}
        >
          <AntDesign name="linkedin-square" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openLink('https://drive.google.com/drive/folders/1nsEUkp8R_Rls0cG6WLDke8qeXzTFxeHx?usp=sharing')}
        >
          <MaterialCommunityIcons name="certificate-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
