import React, { useCallback, useRef, useState, useEffect } from "react"; 
import Geolocation from "react-native-geolocation-service"; 
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { View, Text ,Button, Platform, PermissionsAndroid, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//

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
    return(
        <View>
            <Text>walk tracking screen</Text>
            
        </View>
    );
}