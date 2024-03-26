import React, { useeffect, useCallback, useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, FONTS } from '../constants'
import Button from '../components/Button'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function welcome({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const [appVersion, setAppVersion] = useState('1.0.0');

    const CheckUserStatus = useCallback(async () => {
        setIsLoading(true);
        try {
            const token = await AsyncStorage.getItem("token");
            if (!token) {
                Alert.alert("You are not logged in");
            } else {
                navigation.navigate("Home");
            }
        } catch (error) {
            console.error("Error fetching user status:", error);
            Alert.alert("Something went wrong, try again later");
        } finally {
            setIsLoading(false);
        }
    }, []);

    const CheckAppVersion = useCallback(async () => {

       await axios.get('/api/Appversion')
            .then(response => {
                const currentVersion = response.data.version;
                setAppVersion(currentVersion);

            })
            .catch(error => {
                console.error('Error fetching version information:', error);
            });


    }, []);

    useeffect (()=> {
        CheckAppVersion();
    }, []);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        marginHorizontal: 22,
                    }}
                >

                    <LottieView source={require("../../assets/json/animation.json")}
                        autoPlay
                        loop
                        style={{
                            width: SIZES.width * 0.7,
                            height: SIZES.width * 0.7,
                            marginVertical: 48,
                        }}
                    />



                    <Text
                        style={{
                            ...(SIZES.width <= 360
                                ? { ...FONTS.h2 }
                                : { ...FONTS.h1 }),
                            textAlign: 'center',
                            marginHorizontal: SIZES.padding * 0.8,
                        }}
                    >
                        Connect easily with your family and friends over
                        countries
                    </Text>

                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text
                            style={{
                                ...FONTS.body3,
                                marginVertical: 12,
                            }}
                        >
                            Terms and Privacy
                        </Text>

                        <Button
                            title="launch WeMail"
                            onPress={() => CheckUserStatus()}
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginBottom: 48,
                            }}
                        >
                            {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
                        </Button>

                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}