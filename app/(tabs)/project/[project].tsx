import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { database } from '../../../firebaseConfig'
import { onValue, ref } from 'firebase/database'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import * as Linking from 'expo-linking';

const ProjectDetail = () => {

    interface ProjectDetails {
        title: string;
        desc: string;
        href: string;
    }

    const { project } = useLocalSearchParams();
    const [projectDetail, setProjectDetail] = useState<any>(null);
    const [imageURL, setImageURL] = useState<string | null>(null);

    useEffect(() => {
        if (!project) return;

        const projectRef = ref(database, `list/project-details/${project}`);
        const unsubscribe = onValue(projectRef, (snapshot) => {
            if (snapshot.exists()) {
                setProjectDetail(snapshot.val());

                if (snapshot.val().href.image) {
                    setImageURL(snapshot.val().href.image);
                }

            } else {
                setProjectDetail(null);
            }
        });

        return () => unsubscribe();
    }, [project]);

    if (!projectDetail) {
        return (
            <View className="flex-1 items-center justify-center bg-[#1C2938]">
                <Text className="text-white text-lg">Loading project details...</Text>
            </View>
        );
    }

    const openLink = (url: string) => {
        Linking.openURL(url).catch((err) => {
            console.error("Failed to open URL:", err);
        });
    };

    return (
        <SafeAreaView className='bg-[#09182D] h-full'>
            <ScrollView>
                <View className='w-full my-6 min-h-[85vh] justify-between'>
                    <Text className='text-white text-2xl font-bold text-center'>
                        {projectDetail.title}
                    </Text>
                    <View className='mx-6 items-center'>
                        {projectDetail.href?.image && (
                            <Image
                                source={{ uri: imageURL || '' }}
                                className='w-96 h-96'
                                resizeMode='contain'
                            />
                        )}
                        <Text className='text-white text-center text-lg mt-4'>
                            {projectDetail.desc}
                        </Text>
                        <Text className='text-slate-400 text-center text-md mt-4'>
                            {`\nClick on the icons to view the project on GitHub, Figma, or to view the certificate.`}

                        </Text>
                    </View>
                    <View className="flex-row justify-center gap-5 items-center mt-5">
                        {projectDetail.href?.github && (
                            <TouchableOpacity
                                onPress={() => openLink(projectDetail.href.github)}
                            >
                                <AntDesign size={28} name="github" color="#FFFFFF" />
                            </TouchableOpacity>
                        )}
                        {projectDetail.href?.figma && (
                            <TouchableOpacity
                                onPress={() => openLink(projectDetail.href.figma)}
                            >
                                <Feather size={28} name="figma" color="#FFFFFF" />
                            </TouchableOpacity>
                        )}
                        {projectDetail.href?.certif && (
                            <TouchableOpacity
                                onPress={() => openLink(projectDetail.href.certif)}
                            >
                                <MaterialCommunityIcons
                                    size={28}
                                    name="certificate-outline"
                                    color="#FFFFFF"
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

export default ProjectDetail
