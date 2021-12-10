import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

var month=new Date().getMonth();
var year=new Date().getFullYear();
var day=new Date().getDate();
let screenWidth=Dimensions.get('window').width;
let screenHeight=Dimensions.get('window').height;

export default function AlarmContainer({navigation}){
    
    return(
        <View style={styles.container}>
            <View style={styles.alarmlist}>
                <Image style={styles.icon} source={require('../asset/report_icon.png')} />
                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('report')}>
                    <Text style={styles.alarmheader}>{year}년 {month}월 활동 보고서</Text>
                    <Text style={styles.dateinfo}>{day-1}일전</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 25,
      width: screenWidth,
      //justifyContent: 'center',
      alignItems: 'center',
    },
    backbutton: {
      position: 'absolute',
      top: 10,
      left: 10,
      bottom: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
    header: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingBottom: 35,
      marginTop: 10,
      textAlign: 'center',
      color: 'black',
    },
    icon: {
        width: 60,
        height: 60,
        alignItems: 'flex-start',
        marginRight: 20,
    },
    alarmlist: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    alarmheader: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 5,
        marginTop: 10,
        textAlign: 'center',
        color: 'black',
    },
    dateinfo: {
        fontSize: 15,
        alignItems: 'center',
        color: '#999999',
        //paddingTop: 20,
        //paddingBottom: 20,
        marginTop: 5,
    },
});