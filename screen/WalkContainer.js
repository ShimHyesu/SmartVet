import React from 'react';
import { View, Text ,Button} from 'react-native';

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

// main
export default function WalkContainer({navigation}){
    return(
        <View>
            <Text>walk screen</Text>
            <Button
            title="Go to walk_add"
            onPress={() => navigation.navigate('walk_navi',{screen:'walk_add'})}/>
            <Button
            title="Go to walk_tracking"
            onPress={() => navigation.navigate('walk_navi',{screen:'walk_tracking'})}/>
        </View>
    );
}