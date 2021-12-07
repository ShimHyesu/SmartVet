import React from 'react';
import { View, Text, Button, TouchableOpacity,Image} from 'react-native';

export default function HomeContainer({navigation}){
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.navigate('alarm')}>
                <Image
                style={{ width: 20, height: 25,marginRight:20}}
                source={require('../asset/alarm.png')}/>
            </TouchableOpacity>
          ),
        });
      });
    return(
        <View>
            <Text>home screen</Text>
        </View>
    );
}