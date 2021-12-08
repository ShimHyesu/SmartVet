import React , { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,  Dimensions } from 'react-native';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

LogBox.ignoreLogs(['Setting a timer']);

const firebaseConfig = {
  apiKey: "AIzaSyAdMdxnx6Biw2-7fZ-gnXIyiAYNFs6TMyI",
  authDomain: "smartvet-19c4a.firebaseapp.com",
  projectId: "smartvet-19c4a",
  storageBucket: "smartvet-19c4a.appspot.com",
  messagingSenderId: "368551242209",
  appId: "1:368551242209:web:d0261bf6d4c57eac320aa0",
  measurementId: "G-E83ZQ0S2C3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
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
    var month=new Date().getMonth();
    var year=new Date().getFullYear();
    const daysNum=new Date(year, month-1, 0);//전달 일수
    const calStart=new Date(year, month-1, 1);//전달 1일부터
    const calEnd=new Date(year, month-1, 31);//전달 말일까지
    
    const petName="쩨리";
    const outNum=6;
    const outTime="00:09;
    const NumBool="감소";
    const TimeBool="감소";
    
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('alarm')}>
            <Image style={styles.image} source={require('../asset/arrow_back.png')} />
          </TouchableOpacity>
          <Text style={styles.header}>{year}년 {month}월 활동 보고서</Text>
          <Image style={styles.petimage} source={require('../asset/pet1.png')} />
          <Text style={styles.name}>{petName}</Text>
          <View style={styles.numavg}>
            <Text style={styles.outinfo}>
              {outNum}회<Text style={styles.textinfo}>{"\n"}산책 횟수</Text>
            </Text>
            <Text style={styles.outinfo}>
              {outTime}<Text style={styles.textinfo}>{"\n"}평균 산책 시간</Text>
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
            <Text style={styles.explainnum}>{ NumBool },</Text>
            <Text style={styles.explains}> 산책 시간 </Text>
            <Text style={styles.explainnum}>{ TimeBool }</Text>
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
