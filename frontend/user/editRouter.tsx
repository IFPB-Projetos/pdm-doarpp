import { LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useState } from 'react';
import { Text, View } from 'react-native';

async function requestPermision() {

    const [location, setLocaion] = useState<LocationObject | null>(null);
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {

        const currentPosition = await getCurrentPositionAsync();

    }

}


export function PegarLocal() {

    return (

        <View>

            <Text>Geo</Text>

        </View>


    )


}