import React , { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

LogBox.ignoreLogs(['Setting a timer']);

LocaleConfig.locales['ko'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'Jun', 'Jul.', 'Aug', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = 'ko';

let screenWidth=Dimensions.get('window').width;
let screenHeight=Dimensions.get('window').height;

export default function ReportContainer({navigation}){
    /*
    return(
        <View>
            <Text>report screen</Text>
        </View>
    );
    */

    const[ouID, setOuID]=useState('');//회원번호 찾기
    const[opetList, setOpetList]=useState([]);//해당 회원의 반려동물번호 리스트 찾기
    const[opetN, setOpetN]=useState([]);//반려동물번호에 해당하는 반려동물 이름찾기
    const[opetURL, setOpetURL]=useState([]);

    var month=new Date().getMonth();
    var year=new Date().getFullYear();
    const daysNum=new Date(year, month-1, 0);//전달 일수
    const calStart=new Date(year, month-1, 1);//전달 1일부터
    const calEnd=new Date(year, month-1, 31);//전달 말일까지
    
    const petName="쩨리";
    const outNum=6;
    const outTime="00:09";
    const NumBool="감소";
    const TimeBool="감소";

    const petUserMatching = async() => {
      let uID='0';
      let petList=[];
      let petN=[];
      let petURL=[];
      firestore()
        .collection('users')
        .where('email', '==', 'hong12@konkuk.ac.kr')//로그인된 사용자 이메일
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
          //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          setOuID(documentSnapshot.id);
          uID=documentSnapshot.id;
        });
      });
      //if(opetList.length<2) {
        firestore()
          .collection('petlist')
          .where('userID', '==', ouID)//사용자 반려동물 목록
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
            console.log('User pets: ', documentSnapshot.id, documentSnapshot.data());
            setOpetList(opetList => [...opetList, documentSnapshot.data().petID]);
            petList.push(documentSnapshot.data().petID);
          });
        });
        console.log(opetList);
        //var leng=opetList.length;
        for(var i=0;i<opetList.length;i++) {
          firestore()
            .collection('pets')
            .where('petID', '==', opetList[i])//사용자 반려동물 이름목록
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
              //console.log('pet names: ', documentSnapshot.id, documentSnapshot.data());
              setOpetN(opetN => [...opetN, documentSnapshot.data().name]);
              petN.push(documentSnapshot.data().name);
            });
          });
          firestore()
            .collection('pets')
            .where('petID', '==', opetList[i])//사용자 반려동물 사진주소목록
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
              //console.log('pet urls: ', documentSnapshot.id, documentSnapshot.data());
              setOpetURL(opetURL => [...opetURL, documentSnapshot.data().photo]);
              petURL.push(documentSnapshot.data().photo);
            });
          });
        }
      //}     
    };

    useEffect(() => {
      petUserMatching();
    }, []);
    
    //console.log(ouID);
    //console.log(opetList);
    //console.log(opetN);
    //console.log(opetURL);

    const petNamea=opetN[0];
    const outNuma=6;
    const outTimea="00:09";
    const NumBoola="감소";
    const TimeBoola="감소";
    const petNameb=opetN[1];
    const outNumb=3;
    const outTimeb="00:03";
    const NumBoolb="증가";
    const TimeBoolb="증가";

    return (
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('alarm')}>
            <Image style={styles.image} source={require('../asset/arrow_back.png')} />
          </TouchableOpacity>
          <Text style={styles.header}>{year}년 {month}월 활동 보고서</Text>
          <Image style={styles.petimage} source={require('../asset/pet1.png')} />
          <Text style={styles.name}>{petNamea}</Text>
          <View style={styles.numavg}>
            <Text style={styles.outinfo}>
              {outNuma}회<Text style={styles.textinfo}>{"\n"}산책 횟수</Text>
            </Text>
            <Text style={styles.outinfo}>
              {outTimea}<Text style={styles.textinfo}>{"\n"}평균 산책 시간</Text>
            </Text>
          </View>
          <Calendar style={{
            width: screenWidth, 
            borderWidth: 5, 
            borderTopColor: '#FF9900', 
            borderBottomColor: '#FF9900', 
            borderLeftColor: '#FFFFFF', 
            borderRightColor: '#FFFFFF',
            paddingHorizontal: 10, 
          }}
            current={calStart}
            minDate={calStart}
            maxDate={calEnd}
            markedDates= {{
              '2021-11-02': {marked: true, selected: true, selectedColor: '#FF6600', dotColor: '#FF6600'},
              '2021-11-03': {marked: true, selected: true, selectedColor: '#FFCC66', dotColor: '#FFCC66'},
              '2021-11-06': {marked: true, selected: true, selectedColor: '#FFCC66', dotColor: '#FFCC66'},
              '2021-11-07': {marked: true, selected: true, selectedColor: '#FF6600', dotColor: '#FF6600'}
           }}
            monthFormat={'yyyy MM'}
            hideArrows={true}
            renderArrow={(direction) => (<Arrow/>)}
            hideExtraDays={false}
            disableMonthChange={true}
            firstDay={7}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={true}
            disableArrowRight={true}
            disableAllTouchEventsForDisabledDays={true}
            renderHeader={(date) => {/*Return JSX*/}}
          />
          <View>
            <Text style={styles.explain}>지난달 대비</Text>
          </View>
          <View style={styles.numavg}>
            <Text style={styles.explains}>산책 횟수 </Text>
            <Text style={styles.explainnum}>{ NumBoola },</Text>
            <Text style={styles.explains}> 산책 시간 </Text>
            <Text style={styles.explainnum}>{ TimeBoola }</Text>
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('alarm')}>
            <Image style={styles.image} source={require('../asset/arrow_back.png')} />
          </TouchableOpacity>
          <Text style={styles.header}>{year}년 {month}월 활동 보고서</Text>
          <Image style={styles.petimage} source={require('../asset/pet2.png')} />
          <Text style={styles.name}>{petNameb}</Text>
          <View style={styles.numavg}>
            <Text style={styles.outinfo}>
              {outNumb}회<Text style={styles.textinfo}>{"\n"}산책 횟수</Text>
            </Text>
            <Text style={styles.outinfo}>
              {outTimeb}<Text style={styles.textinfo}>{"\n"}평균 산책 시간</Text>
            </Text>
          </View>
          <Calendar style={{
            width: screenWidth, 
            borderWidth: 5, 
            borderTopColor: '#FF9900', 
            borderBottomColor: '#FF9900', 
            borderLeftColor: '#FFFFFF', 
            borderRightColor: '#FFFFFF',
            paddingHorizontal: 10,
          }}
            current={calStart}
            minDate={calStart}
            maxDate={calEnd}
            markedDates= {{
              '2021-11-04': {marked: true, selected: true, selectedColor: '#FF6600', dotColor: '#FF6600'},
              '2021-11-09': {marked: true, selected: true, selectedColor: '#FFCC66', dotColor: '#FFCC66'},
              '2021-11-13': {marked: true, selected: true, selectedColor: '#FFCC66', dotColor: '#FFCC66'},
              '2021-11-17': {marked: true, selected: true, selectedColor: '#FF6600', dotColor: '#FF6600'}
           }}
            monthFormat={'yyyy MM'}
            hideArrows={true}
            renderArrow={(direction) => (<Arrow/>)}
            hideExtraDays={false}
            disableMonthChange={true}
            firstDay={7}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={true}
            disableArrowRight={true}
            disableAllTouchEventsForDisabledDays={true}
            renderHeader={(date) => {/*Return JSX*/}}
          />
          <View>
            <Text style={styles.explain}>지난달 대비</Text>
          </View>
          <View style={styles.numavg}>
            <Text style={styles.explains}>산책 횟수 </Text>
            <Text style={styles.explainnum}>{ NumBoolb },</Text>
            <Text style={styles.explains}> 산책 시간 </Text>
            <Text style={styles.explainnum}>{ TimeBoolb }</Text>
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 25,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backbutton: {
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 5,
    textAlign: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    paddingTop: 30,
    textAlign: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  petimage: {
    width: '100%',
    height: '20%',
    top: 30,
    resizeMode:'contain',
  },
  numavg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outinfo: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: '8%',
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  textinfo: {
    fontSize: 15,
    alignItems: 'center',
    color: '#999999',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
  },
  explain: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 1,
    paddingTop: 5,
    textAlign: 'center',
  },
  explains: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 1,
    paddingTop: 3,
    textAlign: 'center',
    paddingLeft: '5%',
  },
  explainnum: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 1,
    paddingTop: 3,
    textAlign: 'center',
    color: '#FF9900',
    paddingLeft: '3%',
  },
});
