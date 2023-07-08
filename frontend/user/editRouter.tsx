import { LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

async function requestPermissionAndLocation() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
        const currentPosition = await getCurrentPositionAsync();
        return currentPosition;
    } else {
        return null;
    }
}

export function PegarLocal() {
    const [location, setLocation] = useState<LocationObject | null>(null);

    useEffect(() => {
        const getLocation = async () => {
            const currentPosition = await requestPermissionAndLocation();
            setLocation(currentPosition);
        };
        getLocation();
    }, []);

    if (!location) {
        return <Text>Obtendo localização...</Text>;
    }

    return (
        <View>
            <Text>Geo</Text>
            <Text>Latitude: {location.coords.latitude}</Text>
            <Text>Longitude: {location.coords.longitude}</Text>
            {location &&
                <MapView

                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}

                >

                    <Marker

                        coordinate={{

                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,

                        }}
                    />

                </MapView>


            }

        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: "80%",
        height: "80%",
    },
});

