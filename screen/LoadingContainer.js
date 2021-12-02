import React from 'react';
import { View, Text,Button} from 'react-native';

export default function LoadingContainer({navigation}){
    return(
        <View>
            <Text>loading screen</Text>
            <Button
            title="Go to login-join"
            onPress={() => navigation.navigate('logjoin_navi',{screen:'logjoin'})} />
        </View>
    );
}