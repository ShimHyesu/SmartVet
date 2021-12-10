import React from 'react';
import { StyleSheet,View, Text ,Button,FlatList,StatusBar, TouchableOpacity,Image} from 'react-native';
import {List,ListItem,SearchBar} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Puppy = [
    {
      id: "1",
      name:"쩨리",
      src:"https://ifh.cc/g/QW45mB.png",
    },
    {
      id: "2",
      name: "보리",
      src:"https://ifh.cc/g/xisNGP.png",
    },
  ];



export default function Puppy_listContainer({navigation}){
const renderPuppy = ({ item }) => {
    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.block} 
            onPress={() => navigation.navigate('puppy_info')}>
            <View style={styles.block_l}>
                <Image source={{uri:item.src}} style={{height:'100%',width:'100%',resizeMode:'contain'}}/>
            </View>
            <View style={styles.block_r}>
                <Text style={{fontSize:22, padding:23, fontWeight:'bold'}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

    return(
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={Puppy}
                    renderItem={renderPuppy}
                    keyExtractor={(name) => name.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    list:{
        width:"100%",
        height:"40%",
        backgroundColor: '#ffffff',
        paddingHorizontal:30,
        padding:10,
    },
    block:{
        flex:1,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor:'#FFFFFF',
        padding:10,
        borderBottomWidth:1,
        borderColor:"#A6A6A6",
    },
    block_l:{
        width:"20%",
        height:"100%",
        backgroundColor:"#FFFFFF",
    },
    block_r:{
        flex:1,
        backgroundColor:"#FFFFFF",
    },
});