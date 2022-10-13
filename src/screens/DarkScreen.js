import { Image, Switch, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Header } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';

function Mapicon() {
    return (
        <Image style={{ width: 27, height: 27 }} source={require('../assets/map.png')} />
    );
}

function Unionicon() {
    return (
        <Image style={{ width: 24, height: 24 }} source={require('../assets/Union.png')} />
    );
}

export default function BrightScreen() {
    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        setIsEnabled(true)
        navigation.navigate('Bright')
    };

    return (
        <>
            <Header
                placement="left"
                backgroundColor='#0C43AC'
                leftComponent={<Mapicon />}
                centerComponent={{ text: 'Bandung', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={<Unionicon />}

            />
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/Rain.png')} />
                <Text style={styles.suhu}>30°C</Text>
                <View style={{ flexDirection: 'row', width: 300, 'alignItems': 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.text}>Status :</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.details}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/Contour.png')} />
                        <Text style={styles.textdetail}>23%</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/humidity.png')} />
                        <Text style={styles.textdetail}>90%</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/wind.png')} />
                        <Text style={styles.textdetail}>19 km/h</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, backgroundColor: 'rgba(0, 13, 38, 0.3)', borderRadius: 20, padding: 10, width: 300, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={styles.textdetail}>Today</Text>
                        <Text style={styles.textdetail}>Mar, 10</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.textdetail}>29°C</Text>
                            <Image source={require('../assets/cloud.png')} />
                            <Text style={styles.textdetail}>15.00</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.textdetail}>29°C</Text>
                            <Image source={require('../assets/cloud.png')} />
                            <Text style={styles.textdetail}>15.00</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.textdetail}>29°C</Text>
                            <Image source={require('../assets/cloud.png')} />
                            <Text style={styles.textdetail}>15.00</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.textdetail}>29°C</Text>
                            <Image source={require('../assets/cloud.png')} />
                            <Text style={styles.textdetail}>15.00</Text>
                        </View>
                    </View>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C43AC',
        alignItems: 'center',
    },
    suhu: {
        fontSize: 70,
        color: '#fff',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        backgroundColor: 'rgba(0, 13, 38, 0.3)',
    },
    textdetail: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        marginTop: 20,
        backgroundColor: 'rgba(0, 13, 38, 0.3)',
        borderRadius: 20,
        padding: 10,
    },
    switch: {
        transform: [{ scaleX: 3.0 }, { scaleY: 3.0 }],
        marginTop: 20,
        marginRight: 35,
    },
    logo: {
        width: 250,
        height: 250,
    }
})