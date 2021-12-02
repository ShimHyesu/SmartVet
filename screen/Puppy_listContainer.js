import React from 'react';
import { View, Text ,Button} from 'react-native';

export default function Puppy_listContainer({navigation}){
    return(
        <View>
            <Text>puppy_list screen</Text>
            <Button
            title="Go to puppy_info"
            onPress={() => navigation.navigate('puppy_info')} />
            <Button
            title="Go to puppy_add"
            onPress={() => navigation.navigate('puppy_add')} />
        </View>
    );
}