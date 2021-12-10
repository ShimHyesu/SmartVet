import React, {useState } from 'react';
import { View, Text ,Button,StyleSheet,TouchableOpacity,Image,TextInput,FlatList,PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from "react-native-modal";

const Puppy_code=[
    { id:"1",name:"말티즈",},
    { id:"2",name:"푸들",},
    { id:"3",name:"포메라니안",},
    { id:"4",name:"치와와",},
    { id:"5",name:"시츄",},
    { id:"6",name:"요크셔테리어",},
    { id:"7",name:"골든 리트리버",},
    { id:"8",name:"닥스훈트",},
    { id:"9",name:"비숑 프리제",},
    { id:"10",name:"시바",},
    { id:"11",name:"스피츠",},
    { id:"12",name:"웰시 코기",},
];

//Modal_code, zender, size, active 모두 modal관련 함수
  export function Modal_code({code,onChangeInput_code}){
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const onChange=(name)=>{
      onChangeInput_code(name);
    }
  
    const renderCode = ({ item }) => {
      return(
          <TouchableOpacity activeOpacity={0.8} style={m_style.flat} onPress={() => {
            onChange(item.name);
            setModalVisible(false)
          }}>
            <Text style={m_style.text}>{item.name}</Text>
            <View style={m_style.none_n}></View>
          </TouchableOpacity>
      );
  }
  
    return(
      <View style={{ flex: 1 }}>
        <Modal isVisible={isModalVisible}
          backdropColor='#E5E5E5'
          onBackdropPress={() => setModalVisible(false)}
          style={{ flex: 1, flexDirection:"row" ,alignItems: "flex-end" }}
          >
            <View style={{ flex: 1 }}>
                <FlatList
                  data={Puppy_code}
                  renderItem={renderCode}
                  keyExtractor={(name) => name.id}
                />
                <View style={m_style.none_f}></View>
                <TouchableOpacity style={m_style.select} onPress={toggleModal}>
                  <Text style={m_style.cancel}>취소</Text>
                </TouchableOpacity>
            </View>
          </Modal>
  
          <TouchableOpacity activeOpacity={0.8} onPress={toggleModal} style={{paddingTop:17}}>
            <Text style={{fontSize: 19,color: '#A6A6A6',}}>{code}</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  export function Modal_zender({zender,onChangeInput_zender}){
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const onChange=(zen)=>{
      onChangeInput_zender(zen);
    }
  
    return (
      <View style={{ flex: 1 }}>
  
        <Modal isVisible={isModalVisible}
          backdropColor='#E5E5E5'
          onBackdropPress={() => setModalVisible(false)}
          style={{ flex: 1, flexDirection:"row" ,alignItems: "flex-end" }}
          >
          <View style={{ flex: 1 }}>
            <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                onChange("남아")
                setModalVisible(false)
              }}>
              <Text style={m_style.text}>남아</Text>
            </TouchableOpacity>
            <View style={m_style.none_n}></View>
            <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                onChange("여아")
                setModalVisible(false)
              }}>
              <Text style={m_style.text}>여아</Text>
            </TouchableOpacity>
            <View style={m_style.none_f}></View>
            <TouchableOpacity style={m_style.select} onPress={toggleModal}>
              <Text style={m_style.cancel}>취소</Text>
            </TouchableOpacity>
          </View>
        </Modal>
  
        <TouchableOpacity activeOpacity={0.8} onPress={toggleModal} style={{paddingTop:17}}>
            <Text style={{fontSize: 19,color: '#A6A6A6',}}>{zender}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export function Modal_size({size,onChangeInput_size}) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const onChange=(sz)=>{
      onChangeInput_size(sz);
    }
  
    return (
      <View style={{ flex: 1 }}>
  
        <Modal isVisible={isModalVisible}
          backdropColor='#E5E5E5'
          onBackdropPress={() => setModalVisible(false)}
          style={{ flex: 1, flexDirection:"row" ,alignItems: "flex-end" }}
          >
          <View style={{ flex: 1 }}>
            <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                onChange("대형")
                setModalVisible(false)
              }}>
              <Text style={m_style.text}>대형</Text>
            </TouchableOpacity>
            <View style={m_style.none_n}></View>
            <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                onChange("중형")
                setModalVisible(false)
              }}>
              <Text style={m_style.text}>중형</Text>
            </TouchableOpacity>
            <View style={m_style.none_n}></View>
            <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                onChange("소형")
                setModalVisible(false)
              }}>
              <Text style={m_style.text}>소형</Text>
            </TouchableOpacity>
            <View style={m_style.none_f}></View>
            <TouchableOpacity style={m_style.select} onPress={toggleModal}>
              <Text style={m_style.cancel}>취소</Text>
            </TouchableOpacity>
          </View>
        </Modal>
  
        <TouchableOpacity activeOpacity={0.8} onPress={toggleModal} style={{paddingTop:17}}>
            <Text style={{fontSize: 19,color: '#A6A6A6',}}>{size}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export function Modal_active({active,onChangeInput_active}) {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const onChange=(ac)=>{
      onChangeInput_active(ac);
    }
  
    return (
      <View style={{ flex: 1 }}>
  
        <Modal isVisible={isModalVisible}
          backdropColor='#E5E5E5'
          onBackdropPress={() => setModalVisible(false)}
          style={{ flex: 1, flexDirection:"row" ,alignItems: "flex-end" }}
          >
          <View style={{ flex: 1 }}>
            <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                onChange("많음")
                setModalVisible(false)
              }}>
              <Text style={m_style.text}>많음</Text>
            </TouchableOpacity>
            <View style={m_style.none_n}></View>
            <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                onChange("보통")
                setModalVisible(false)
              }}>
              <Text style={m_style.text}>보통</Text>
            </TouchableOpacity>
            <View style={m_style.none_n}></View>
            <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                onChange("적음")
                setModalVisible(false)
              }}>
              <Text style={m_style.text}>적음</Text>
            </TouchableOpacity>
            <View style={m_style.none_f}></View>
            <TouchableOpacity style={m_style.select} onPress={toggleModal}>
              <Text style={m_style.cancel}>취소</Text>
            </TouchableOpacity>
          </View>
        </Modal>
  
        <TouchableOpacity activeOpacity={0.8} onPress={toggleModal} style={{paddingTop:17}}>
            <Text style={{fontSize: 19,color: '#A6A6A6',}}>{active}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default function Puppy_addContainer(){
    const [name, setName] = useState(null);
    const [birth, setBirth] = useState(null);
    const [code, setCode] = useState("입력");
    const [zender, setZender] = useState("입력");
    const [size, setSize] = useState("입력");
    const [weight, setWeight] = useState(null);
    const [active, setActive] = useState("입력");

    const [avatar,setAvatar] = useState('https://ifh.cc/g/HC6FUO.png');
    const [grant, setGrant] = useState();
    const [isModalVisible, setModalVisible] = useState(false);

    const onChangeInput_name = () => {
        setName(name);
      };
    const onChangeInput_birth = () => {
        setBirth(birth);
    };
    const onChangeInput_code = (code) => {
        setCode(code);
    };
    const onChangeInput_zender = (zen) => {
        setZender(zen);
    };
    const onChangeInput_size = (size)=> {
        setSize(size)
    };
    const onChangeInput_weight =()=> {
        setWeight(weight)
    };
    const onChangeInput_active =(active)=> {
        setActive(active)
    };

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    
    //사진 관련 함수
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "App Camera Permission",
            message:"App needs access to your camera",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
    
        setGrant(granted);
      } catch (err) {
        console.warn(err);
      }
    };
    const addImage = async () => {
      await requestCameraPermission();
    
      if (grant === 'granted') {
        const options = {
          //noData: true,
          mediaType: 'photo',
          saveToPhotos: true,
        };
        launchCamera(options, response => {
          setAvatar(response.assets[0].uri)
        });
      } else {
        // ?
      }
    };
    const showImage = () => {
      const options = {
        //noData: true,
        mediaType: 'photo',
      };
      launchImageLibrary(options, response => {
        setAvatar(response.assets[0].uri)
      });
    };


    return(
        <View style={pa_styles.container}>
            
            <View style={pa_styles.photo}>
              <TouchableOpacity style={ph_styles.photo} onPress={toggleModal}>
                <Image source={{uri: avatar}} style={{width:"95%",height:"100%",borderRadius:100}}/>
              </TouchableOpacity>
              <Modal isVisible={isModalVisible}
                backdropColor='#E5E5E5'
                onBackdropPress={() => setModalVisible(false)}
                style={{ flex: 1, flexDirection:"row" ,alignItems: "flex-end" }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                      addImage();
                      setModalVisible(false)
                    }}>
                     <Text style={m_style.text}>카메라</Text>
                    </TouchableOpacity>
                    <View style={m_style.none_n}></View>
                    <TouchableOpacity activeOpacity={0.8} style={m_style.select} onPress={() => {
                      showImage();
                      setModalVisible(false)
                    }}>
                      <Text style={m_style.text}>이미지 선택</Text>
                    </TouchableOpacity>
                    <View style={m_style.none_f}></View>
                    <TouchableOpacity style={m_style.select} onPress={toggleModal}>
                      <Text style={m_style.cancel}>취소</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
                  <View style={ph_styles.icon}>
                    <Image
                      source={require('../asset/photo_edit.png')}/>
                  </View>
            </View>
            <View style={pa_styles.info}>
                <View style={in_styles.button}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     이름</Text>
                    </View>
                    <View style={in_styles.block_m}>
                        <TextInput style={in_styles.text_m}
                            onChangeText={onChangeInput_name}
                            name={name}
                            placeholder="입력"/>
                    </View>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'  >      '}</Text>
                    </View>
                </View>
                <View style={in_styles.button}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     생년월일</Text>
                    </View>
                    <View style={in_styles.block_m}>
                        <TextInput style={in_styles.text_m}
                            onChangeText={onChangeInput_birth}
                            birth={birth}
                            keyboardType="number-pad"
                            placeholder="입력"/>
                    </View>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'  >      '}</Text>
                    </View>
                </View>
                <View style={in_styles.button}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     품종</Text>
                    </View>
                    <TouchableOpacity style={in_styles.block_m}>
                        <Modal_code 
                          code={code}
                          onChangeInput_code={onChangeInput_code}/>
                    </TouchableOpacity>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'  >      '}</Text>
                    </View>
                </View>
                <View style={in_styles.button}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     성별</Text>
                    </View>
                    <TouchableOpacity style={in_styles.block_m}>
                        <Modal_zender 
                          zender={zender}
                          onChangeInput_zender={onChangeInput_zender}/>
                    </TouchableOpacity>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'  >      '}</Text>
                    </View>
                </View>
                <View style={in_styles.button}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     사이즈</Text>
                    </View>
                    <TouchableOpacity style={in_styles.block_m}>
                        <Modal_size 
                          size={size}
                          onChangeInput_size={onChangeInput_size}/>
                    </TouchableOpacity>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'  >      '}</Text>
                    </View>
                </View>
                <View style={in_styles.button}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     무게</Text>
                    </View>
                    <View style={in_styles.block_m}>
                        <TextInput style={in_styles.text_m}
                            onChangeText={onChangeInput_weight}
                            value={weight}
                            keyboardType="number-pad"
                            placeholder="입력"/>
                    </View>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'  >      '}</Text>
                    </View>
                </View>
                <View style={in_styles.button}>
                    <View style={in_styles.block_l}>
                        <Text style={in_styles.text_l}>     활동수준</Text>
                    </View>
                    <TouchableOpacity style={in_styles.block_m}>
                        <Modal_active 
                          active={active}
                          onChangeInput_active={onChangeInput_active}/>
                    </TouchableOpacity>
                    <View style={in_styles.block_r}>
                        <Text style={in_styles.text_r}>{'  >      '}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}


const pa_styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    photo:{
        width:"100%",
        height:"30%",
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    info:{
        width:"100%",
        height:"70%",
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const ph_styles =StyleSheet.create({
    photo:{
      top:25,
      width:"35%",
      height:"75%",
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode:'contain'
    },
    icon:{
        position: 'absolute',                                                                                                                                                                                
        left: 220,                                                                                                                                                                                                    
        top: 130,
    }
  });

  const in_styles=StyleSheet.create({
    button: {
      width:"100%",
      height:"13%",
      flexDirection: 'row',
      alignItems: "center",
      backgroundColor: "#ffffff",
      //padding: 15,
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

  const m_style=StyleSheet.create({
    select:{
      backgroundColor:"#ffffff",
      height:"8%",
      borderRadius:10,
      justifyContent: "center",
      alignItems: "center",
    },
    none_n:{
      height:2,
      backgroundColor:"#e5e5e5",
    },
    none_f:{
      height:5,
      backgroundColor:"#e5e5e5",
    },
    text:{
      color:"#000000",
      fontSize: 18,
    },
    cancel:{
      color:"#FF1B1B",
      fontWeight:"bold",
      fontSize: 18,
    },
    flat:{
      backgroundColor:"#ffffff",
      height:50,
      borderRadius:10,
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth:2,
      borderColor:"#E5E5E5",
    }
  })