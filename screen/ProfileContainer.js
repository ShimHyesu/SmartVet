import React from 'react';
import { View, Text ,Button} from 'react-native';

export default function ProfileContainer({navigation}){
    return(
        <View>
            <Text>profile screen</Text>
            <Button
            title="Go to account"
            onPress={() => navigation.navigate('account')} />
            <Button
            title="Go to puppy_list"
            onPress={() => navigation.navigate('puppy_navi',{screen:'puppy_list'})} />
            <Button
            title="Go to friend_list"
            onPress={() => navigation.navigate('friend_navi',{screen:'friend_list'})} />
        </View>
    );
}