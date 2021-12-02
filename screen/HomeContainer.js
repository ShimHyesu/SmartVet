import React from 'react';
import { View, Text, Button} from 'react-native';

export default function HomeContainer({navigation}){
    return(
        <View>
            <Text>home screen</Text>
            <Button
            title="Go to alarm"
            onPress={() => navigation.navigate('alarm')} />
        </View>
    );
}