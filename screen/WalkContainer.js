import React, { useState, useEffect } from "react"; 
import Geolocation from "react-native-geolocation-service"; 
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { View, Text ,Button, Platform, PermissionsAndroid, StyleSheet } from "react-native";


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

export default function WalkContainer({navigation}){

    const [location, setLocation] = useState();
    useEffect(() => {
      requestPositionPermission().then(result => {
        console.log({ result });
  
        if (result === "granted") {
          Geolocation.watchPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setLocation({
                latitude,
                longitude,
            });
  
          },
            error => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 5000},
          );
        }
  
        
      });
    }, []);


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
              </MapView>

            )}

            <Button
            style={[styles.goToWalkAdd]}
            title="Go to walk_add"
            onPress={() => navigation.navigate('walk_navi',{screen:'walk_add'})}/>

            <Button
            style={[styles.goToWalkTracking]}
            title="Go to walk_tracking"
            onPress={() => navigation.navigate('walk_navi',{screen:'walk_tracking'})}/>

        </View>
    );

}

const styles = StyleSheet.create({
  

  map: {
    width: 500,
    height: 500,
    flexDirection: 'row'
  } ,

  goToWalkAdd: {
    width: 50,
    height: 50,
    flexDirection: 'row'

  },

  goToWalkTracking: {
    width: 50,
    height: 50,
    flexDirection: 'row'

  }

});