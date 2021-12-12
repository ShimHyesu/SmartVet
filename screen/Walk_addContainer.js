import React, { useState, useEffect, Component } from 'react';
import { CheckBox, StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';

export default function Walk_addContainer({navigation}){

    return(
        <View style={pf_styles.container}>
            

            <View style={pf_styles.select}>
              <TouchableOpacity style={s_styles.button}>
                  <View style={s_styles.block_l}>
                    <Text style={s_styles.text_l}>     날짜</Text>
                  </View>
                  <View style={s_styles.block_r}>
                    <Text style={s_styles.text_r}>{'  2021년 11월 3일      '}</Text>
                  </View>
                  </TouchableOpacity>
              
              <View style={s_styles.block_b}></View>
              <TouchableOpacity style={s_styles.button}>
                  <View style={s_styles.block_l}>
                    <Text style={s_styles.text_l}>     산책할 아이</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={pf_styles.checkboxContainer_1}>
                
              <CheckBox
                style={pf_styles.checkbox_1}
                />

              <Text style={pf_styles.label}>쩨리
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={pf_styles.checkboxContainer_2}>
              <CheckBox
                style={pf_styles.checkbox_2}
              />
              <Text style={pf_styles.label}>보리
              </Text>
            </TouchableOpacity>

              <TouchableOpacity style={s_styles.button}>
                  <View style={s_styles.block_l}>
                    <Text style={s_styles.text_l}>     산책 시간</Text>
                  </View>
                  <View style={s_styles.block_r}>
                    <Text style={s_styles.text_r}>{'  47분  >      '}</Text>
                  </View>
              </TouchableOpacity>

            </View>
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

  //