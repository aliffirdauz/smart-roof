import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function BrightScreen() {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/Sun.png')} />
                <Text>BrightScreen</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29B2DD',
        alignItems: 'center',
        justifyContent: 'center',
    },
})