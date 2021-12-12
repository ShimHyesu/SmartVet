import React, { useState } from 'react';
import { StyleSheet, View, Text, Button,TextInput,FlatList,TouchableOpacity} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Puppy = [
  {
    id: "1",
    name:"쩨리",
  },
  {
    id: "2",
    name: "보리",
  },
];

export default function Walk_addContainer({navigation}){
  const [today] = useState('2021년 12월 13일');
  const [time,setTime]=useState('');
  const [checked, setChecked] = useState(false);

  const onChangeInput_time= () => {
    setTime(time);
  };

  const renderPuppy = ({ item }) => {
    return(
        <View style={wa_styles.check}>
          <BouncyCheckbox
            style={{ marginTop: 16 }}
            isChecked={checked}
            text={item.name}
            textStyle={{
              textDecorationLine: "none",
            }}
            onPress={() => setChecked(!checked)}
          />
      </View>
    );
  }

    return(
        <View style={wa_styles.container}>
            <View style={in_styles.button}>
              <View style={in_styles.block_l}>
                  <Text style={in_styles.text_l}>     날짜</Text>
              </View>
              <View style={in_styles.block_m}>
                  <Text style={in_styles.text_m}>{today}</Text>
              </View>
              <View style={in_styles.block_r}>
                  <Text style={in_styles.text_r}>{'      '}</Text>
              </View>
            </View>
            <View style={in_styles.button}>
              <View style={in_styles.block_l}>
                  <Text style={in_styles.text_l}>     산책할 아이</Text>
              </View>
            </View>
            <View style={wa_styles.check_container}>
                <FlatList
                  data={Puppy}
                  renderItem={renderPuppy}
                  keyExtractor={(name) => name.id}
                />
            </View>
            <View style={in_styles.button}>
              <View style={in_styles.block_l}>
                  <Text style={in_styles.text_l}>     산책 시간</Text>
              </View>
              <View style={in_styles.block_m}>
                  <TextInput style={in_styles.text_m}
                      onChangeText={onChangeInput_time}
                      time={time}
                      keyboardType="number-pad"
                      placeholder=""/>
              </View>
              <View style={in_styles.block_m}>
                  <Text style={in_styles.text_m}>분</Text>
              </View>
              <View style={in_styles.block_r}>
                  <Text style={in_styles.text_r}>{'  >      '}</Text>
              </View>
            </View>

            
        </View>
    );
}

const wa_styles = StyleSheet.create({
    container:{
     flex: 1,
     backgroundColor: '#ffffff',
    },
    check_container:{
      width:"100%",
      height:"20%",
      backgroundColor:'#ffffff'
    },
    check:{
      flex:1,
      backgroundColor:'#ffffff',
      paddingLeft:30,
    }
    
  });

  const in_styles=StyleSheet.create({
    button: {
      width:"100%",
      height:"15%",
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