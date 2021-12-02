import React from 'react';
import { View, Text ,Button} from 'react-native';

export default function Friend_listContainer({navigation}){
    return(
        <View>
            <Text>friend_list screen</Text>
            <Button
            title="Go to friend_add"
            onPress={() => navigation.navigate('friend_add')} />
        </View>
    );
}