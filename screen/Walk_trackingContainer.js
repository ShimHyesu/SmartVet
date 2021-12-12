import React, { useCallback, useRef, useState, useEffect } from "react"; 
import Geolocation from "react-native-geolocation-service"; 
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { View, Text ,Button, Platform, PermissionsAndroid, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// 타이머 + 지도 구현

async function requestPositionPermission() {
  try {
      
    if (Platform.OS === "android") {
        return await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    }
    
  } catch (e) {
    console.log(e);
  }
}

const useCounter = ({initialValue, ms}) => {
    const [count, setCount] = useState(initialValue);
    const intervalRef = useRef(null);
    const start = useCallback(() => {
        if (intervalRef.current != null) {
            return;
        }
        intervalRef.current = setInterval(() => {
            setCount(c => c+1);
        }, ms);
    }, []);

    const stop = useCallback(() => {
        if (intervalRef.current === null) {
            return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
}, []);


    const reset = useCallback(() => {
        setCount(0);
        stop()
    }, []);
    return {count, start, stop, reset};
}



export default function Walk_trackingContainer(){
    
    const [location, setLocation] = useState();
    useEffect(() => {
      requestPositionPermission().then(result => {
        console.log({ result });
  
        if (result === "granted") {
          Geolocation.watchPosition(
            position => {
              const {latitude, longitude} = position.coords;
              const newCoordinate = {
                latitude,
                longitude,
              }
              setLocation({
                latitude,
                longitude,
            });
  
          },
            error => {
              console.log(error.code, error.message);
            },

            trackingCount = coordinates.push(newCoordinate);

            {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000},
          );
        }
  
        
      });
    }, []);

    const [currentHours, setCurrentHours] = useState(0);
    const [currentMinutes, setCurrentMinutes] = useState(0);
    const [currentSeconds, setCurrentSeconds] = useState(0);
    const {count, start, stop, reset} = useCounter(0, 1000);

    const timer = () => {
        const checkMinutes = Math.floor(count / 60);
        const hours = Math.floor(count / 3600);
        const minutes = checkMinutes % 60;
        const seconds = count % 60;
        setCurrentHours(hours)
        setCurrentMinutes(minutes)
        setCurrentSeconds(seconds)
    }

    useEffect(timer, [count]);
    return(
        <View>
            {location && (
              <MapView>
                initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                style={[styles.map]}
                provider={PROVIDER_GOOGLE}
                
                <Marker
                  coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
              }}
            />


                <Polyline

                  coordinates={newCoordinate}

                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                      '#7F0000',
                      '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                      '#B24112',
                      '#E5845C',
                      '#238C23',
                      '#7F0000'
                    ]}
                    strokeWidth={5}
                    />

                </MapView>

                 )}
            
                {currentHours < 10 ? `0${currentHours}` : currentHours}: 
                {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}: 
                {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
                
                <Button>
                style={[styles.startButton]}
                onClick={start}
                title = "Start"
                </Button>
                
                <Button>
                style={[styles.stopButton]}
                onClick={stop}
                title = "Stop"
                </Button>

                <Button>
                style={[styles.resetButton]}
                onClick={reset}
                title = "Reset"
                </Button>
                
        </View>
    )
}

  const styles = StyleSheet.create({
  
      
    map: {
      position: 'absolute',
      left: 540,                                                                                                                                                                                                    
      top: 0
    },

    startButton: {
      position: 'absolute',                                                                                                                                                                                                
      left: 300,                                                                                                                                                                                                    
      top: 1800
  
    },

    stopButton: {
      position: 'absolute',                                                                                                                                                                                                
      left: 500,                                                                                                                                                                                                    
      top: 1800

    },

    resetButton: {
      position: 'absolute',                                                                                                                                                                                                
      left: 700,                                                                                                                                                                                                    
      top: 1800

    }
  })
