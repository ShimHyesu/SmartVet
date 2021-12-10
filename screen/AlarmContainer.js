import React from 'react';
import { View, Text, Button} from 'react-native';

export default function AlarmContainer({navigation}){
    return(
        <View>
            <Text>alarm screen</Text>
            <Button
            title="Go to report"
            onPress={() => navigation.navigate('report')} />
        </View>
    );
}