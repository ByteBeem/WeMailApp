import { View, Text, Image } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  SIZES, FONTS } from '../constants'
import Button from '../components/Button'
import LottieView from 'lottie-react-native';

export default function welcome({ navigation }) {
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
                            onPress={() => navigation.navigate('Home')}
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginBottom: 48,
                            }}
                        />
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}