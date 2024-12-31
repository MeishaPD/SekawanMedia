import { View, Text, ScrollView, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { database } from '../../firebaseConfig';
import { onValue, ref } from 'firebase/database';

const { width } = Dimensions.get('window');

const Home = () => {

    const [data, setData] = useState([]);
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const dbRef = ref(database, 'list/projects');
        const unsubscribe = onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
            } else {
                setData([]);
            }
        });

        return () => unsubscribe();

    }, []);

    useEffect(() => {
        if (data.length === 0) return;

        const interval = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= data.length) {
                nextIndex = 0;
            }
            setCurrentIndex(nextIndex);
            flatListRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
        }, 2000); // Setiap 3 detik

        return () => clearInterval(interval); // Bersihkan interval
    }, [currentIndex, data]);

    const renderItem = ({ item }: { item: String }) => (
        <View
            className="bg-[#1C2938] rounded-lg p-5 items-center justify-center"
            style={{
                width: width * 0.8,
                marginHorizontal: width * 0.05,
            }}
        >
            <Text className="text-white text-lg font-bold text-center">{item}</Text>
        </View>
    );

    return (
        <SafeAreaView className='bg-[#09182D] h-full'>
            <ScrollView>
                <View className='w-full min-h-[85vh] flex flex-col px-4 my-6'>
                    <View className='flex-row w-full justify-center items-center'>
                        <Image
                            source={require('../../assets/images/logo sekawan light.png')}
                            className='w-40 h-40 mr-4'
                            resizeMode='contain'
                        />
                    </View>
                    <Text className='text-gray-200 text-md font-bold -top-12 text-center'>
                        Welcome to Meisha's Sekawan Media Selection App
                    </Text>
                    <Image
                        source={require('../../assets/images/iPhone 16 Pro - 1.png')}
                        className='w-96 h-96 my-5'
                        resizeMode='contain'
                    />
                    <View>
                        <Text className="text-gray-200 text-lg font-bold text-center mb-4">
                            Firebase Projects:
                        </Text>
                        {data.length > 0 ? (
                            <FlatList
                                ref={flatListRef}
                                data={data}
                                horizontal
                                keyExtractor={(_item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderItem}
                            />
                        ) : (
                            <Text className="text-gray-500 text-center">No data available.</Text>
                        )}

                    </View>
                </View>
            </ScrollView>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

export default Home