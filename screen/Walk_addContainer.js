import React, { useState, useEffect, Component } from 'react';
import { CheckBox, StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';

export default function Walk_addContainer(){
    return(
        <View>
            <Text>walk add screen</Text>
            
        </View>
    );
}

const cb_styles = StyleSheet.create({

});

const pf_styles = StyleSheet.create({
    container:{
      flex: 0.9,
      backgroundColor: '#FFFFFF',
    },
    checkboxContainer_1: {
      width:"100%",
      height:"35%",
      flexDirection: "row",
      marginBottom: 0,
    },
    checkboxContainer_2: {
      width:"100%",
      height:"35%",
      flexDirection: "row",
      marginBottom: 5,
    },
    checkbox_1: {
      alignSelf: "center",
    },
    checkbox_2: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
    user:{
      width:"100%",
      height:"35%",
      backgroundColor: '#FFFFFF',
    },
    select:{
      width:"100%",
      height:"40%",
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

  const s_styles =StyleSheet.create({
    button: {
      width:"100%",
      height:"33%",
      flexDirection: 'row',
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: 10,
    },
    block_l:{
      flex:1,
      backgroundColor: '#ffffff',
    },
    block_r:{
      backgroundColor: '#ffffff',
    },
    block_b:{
      width:"85%",
      height:0.8,
      backgroundColor: '#A6A6A6',
      opacity:0.8,
    },
    text_l:{
      fontSize: 20,
      color: '#000000',
      alignItems: 'center',
    },
    text_r:{
      fontSize: 20,
      color: '#A6A6A6',
      fontWeight: "bold",
    },
  });
