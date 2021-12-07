import React, { Component } from 'react';
import {View, Text,StyleSheet,Image, TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native';


export default class AccountContainer extends Component{
    //const [text, onChangeText] = React.useState(null);
    state={
      email: 'hong12@konkuk.ac.kr',
      name: "홍길동",
      src: "https://ifh.cc/g/U8hH86.png",
    };
    onChangeInput_name = event => {
      this.setState({
        name: event,
      });
    };

    render(){
    return(
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={ac_styles.container}>
           <View style={ac_styles.photo}>
              <TouchableOpacity style ={ph_styles.photo} 
                activeOpacity={0.8} onPress={() => alert('카메라')}>
                  <View style={ph_styles.background}>
                    <Image
                    style={{height:'95%',width:'100%',resizeMode:'contain'}}
                    source={{uri:this.state.src}}/>
                  </View>
                  <View style={ph_styles.icon}>
                  <Image 
                      source={require('../asset/photo_edit.png')}/>
                  </View>
              </TouchableOpacity>
            </View>
            <View style={ac_styles.info}>
                <View style={in_styles.button}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     이메일</Text>
                    </View>
                    <View style={in_styles.block_m}>
                        <Text style={in_styles.text_m}>{this.state.email}</Text>
                    </View>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'      '}</Text>
                    </View>
                </View>
                <TouchableOpacity style={in_styles.button} activeOpacity={1}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     닉네임</Text>
                    </View>
                    <View style={in_styles.block_m}>
                        <TextInput style={in_styles.text_m}
                            onChangeText={this.onChangeInput_name}
                            value={this.state.name}
                            placeholder="(닉네임)"/>
                    </View>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'  >      '}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
}

const ac_styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    photo:{
      width:"100%",
      height:"30%",
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    info:{
      width:"100%",
      height:"25%",
      backgroundColor: '#000000',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

  const ph_styles =StyleSheet.create({
    photo:{
      top:20,
      width:"30%",
      height:"90%",
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: {
        width:"100%",
        height:"100%",
        backgroundColor: '#ffffff',
      },
    icon:{
        position: 'absolute',                                                                                                                                                                                                
        left: 70,                                                                                                                                                                                                    
        top: 110,
    }
  });

  const in_styles=StyleSheet.create({
    button: {
      width:"100%",
      height:"50%",
      flexDirection: 'row',
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: 8,
    }, 
    block_l:{
        flex:1,
        backgroundColor: '#ffffff',
    },
    block_m:{
        backgroundColor: '#ffffff',
    },
      block_r:{
        backgroundColor: '#ffffff',
    },
    text_l:{
        fontSize: 20,
        color: '#000000',
        alignItems: 'center',
    },
    text_m:{
        fontSize: 19,
        color: '#A6A6A6',
    },
      text_r:{
        fontSize: 20,
        color: '#A6A6A6',
        fontWeight: "bold",
    },
  });