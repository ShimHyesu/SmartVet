import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginContainer({navigation}){
    return(
        <View>
            <Text>login screen</Text>
            <Button
            title="Go to home"
            onPress={() => navigation.navigate('tab_navi')} />
        </View>
    );
}