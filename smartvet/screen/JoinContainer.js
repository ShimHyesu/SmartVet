import React from 'react';
import { View, Text, Button } from 'react-native';

export default function JoinContainer({navigation}){
    return(
        <View>
            <Text>join screen</Text>
            <Button
            title="Go to home"
            onPress={() => navigation.navigate('tab_navi')} />
        </View>
    );
}