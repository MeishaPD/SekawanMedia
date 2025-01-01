import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useGlobalSearchParams } from 'expo-router'
import { database } from '../../../firebaseConfig'
import { onValue, ref } from 'firebase/database'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProjectDetail = () => {

    interface ProjectDetails {
        title: string;
        desc: string;
    }

    const { project } = useGlobalSearchParams();
    const [projectDetail, setProjectDetail] = useState<any>(null);

    useEffect(() => {
        if (!project) return;

        const projectRef = ref(database, `list/project-details/${project}`);
        const unsubscribe = onValue(projectRef, (snapshot) => {
            if (snapshot.exists()) {
                setProjectDetail(snapshot.val());
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

    return (
        <SafeAreaView className='bg-[#09182D] h-full'>
            <ScrollView>
                <View className='w-full my-6 min-h-[85vh] justify-between'>
                    <Text className='text-white text-2xl font-bold text-center'>
                        {projectDetail.title}
                    </Text>
                    <Text className='text-white text-center text-lg mt-4'>
                        {projectDetail.desc}
                    </Text>
                    <Text>
                        {''}
                    </Text>
                </View>
            </ScrollView>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

export default ProjectDetail
