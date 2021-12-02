import React from 'react';
import { View, Text,Button} from 'react-native';

export default function LogJoinContainer({navigation}){
    return(
        <View>
            <Text>login join screen</Text>
            <Button
            title="Go to Login"
            onPress={() => navigation.navigate('login')} />
            <Button
            title="Go to join"
            onPress={() => navigation.navigate('join')} />
        </View>
    );
}