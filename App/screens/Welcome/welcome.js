import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import Constants from 'expo-constants';
import PageContainer from '../../components/PageContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES, FONTS } from '../../constants'
import Button from '../../components/Button'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import ErrorModal from "../../components/Modals/ErrorModal";

export default function welcome() {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const [appVersion, setAppversion] = useState(null);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [message, setMessage] = useState('')

    const CheckUserStatus = useCallback(async () => {
        setIsLoading(true);
        try {
            const token = await retrieveToken();
            if (!token) {
                setMessage("You are not logged in");
                setErrorModalOpen(true);
            } else {
                navigation.navigate("Home");
            }
        } catch (error) {
            console.error("Error fetching user status:", error);
            setMessage("Something went wrong, try again later");
            setErrorModalOpen(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const CheckAppVersion = useCallback(async () => {

        await axios.post('/api/Appversion')
            .then(response => {
                const message = response.data;
                setMessage(message);
                setErrorModalOpen(true);
            })
            .catch(error => {
                console.error('Error fetching version information:', error);
            });
    }, []);

    useEffect(() => {
        const CurrentAppVersion = Constants.manifest.version;
        setAppversion(CurrentAppVersion);
        CheckAppVersion();
    }, []);


    const retrieveToken = async () => {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
                return credentials.password;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                {!errorModalOpen && (
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

                            <Text
                                style={{
                                    ...FONTS.body3,
                                    marginVertical: 12,
                                }}
                            >
                                {`version ${appVersion}`}
                            </Text>
                        </View>
                    </View>
                )}
                <ErrorModal
                    message={message}
                    isOpen={errorModalOpen}
                    onClose={() => setErrorModalOpen(false)}
                    onSignup={()=> navigation.navigate("Signup")}
                    onLogin={()=> navigation.navigate("Login")}
                />
            </PageContainer>
        </SafeAreaView>
    )
}
