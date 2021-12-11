import React from 'react';
import { View, Text,Button,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Loading from './screen/LoadingContainer';
import LogJoin from './screen/LogJoinContainer'
import Login from './screen/LoginContainer';
import Join from './screen/JoinContainer';
import Home from './screen/HomeContainer';
import Walk from './screen/WalkContainer';
import Profile from './screen/ProfileContainer';
import Alarm from './screen/AlarmContainer';
import Report from './screen/ReportContainer';
import Walk_add from './screen/Walk_addContainer';
import Walk_tracking from './screen/Walk_trackingContainer';
import Account from './screen/AccountContainer';
import Puppy_list from './screen/Puppy_listContainer';
import Puppy_info from './screen/Puppy_infoContainer';
import Puppy_add from './screen/Puppy_addContainer';
import Friend_list from './screen/Friend_listContainer';
import Friend_add from './screen/Friend_addContainer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogJoin_navi(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="logjoin" component={LogJoin} options={{headerShown:false}}/>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="join" component={Join} />
    </Stack.Navigator>
  );
}

function LogoTitle(){
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => navigation.navigate('home')}>
     <Image 
      style={{ width: 100, height: 25 }}
      source={require('./asset/logoTitle.png')}/>
    </TouchableOpacity>
  );
}

const TabBarIcon=(focused,name)=>{
  let iconName, iconSize, iconColor;
  
  if(name=='home'){
    iconName='home-outline'
  }else if(name=='walk'){
    iconName='paw-outline'
  }else if(name=='profile'){
    iconName='person-outline'
  } 

  iconSize=20
  iconColor=focused?'#FF9A17':'#A6A6A6'
  return (
    <Ionicons
    name={iconName}
    color={iconColor}
    size={iconSize} />
    )

}



function Tab_navi(){
  return(
    <Tab.Navigator initialRouteName="home"
      tabBarOptions={{
        activeTintColor:'#FF9A17',
        inactiveTintColor:'#A6A6A6',
      }}
      screenOptions={({route})=>({
        tabBarLabel:route.name,
        tabBarIcon:({focused})=>(
          TabBarIcon(focused,route.name)
        ),
        headerTitle:(props)=><LogoTitle{...props}/>
      })}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="walk" component={Walk} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}

function Walk_navi(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="walk_add" component={Walk_add} />
      <Stack.Screen name="walk_tracking" component={Walk_tracking} />
    </Stack.Navigator>
  );
}

function Puppy_navi({navigation}){
  return(
    <Stack.Navigator>
      <Stack.Screen name="puppy_list" component={Puppy_list} options={{ 
          title: ' ',
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('puppy_add')}>
              <Text style={{color:'#FF9A17', fontWeight:'bold',fontSize: 22,}}>추가</Text>
            </TouchableOpacity>
          ),}}/>
      <Stack.Screen name="puppy_info" component={Puppy_info} />
      <Stack.Screen name="puppy_add" component={Puppy_add} options={{ 
          title: ' ',
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.4} onPress={() => alert('완료')}>
              <Text style={{color:'#FF9A17', fontWeight:'bold',fontSize: 22,}}>완료</Text>
            </TouchableOpacity>
          ),}}/>
    </Stack.Navigator>
  );
}

function Friend_navi(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="friend_list" component={Friend_list} />
      <Stack.Screen name="friend_add" component={Friend_add} />
    </Stack.Navigator>
  );
}


export default function App(){
  return(
    <NavigationContainer  initialRouteName="loading">
      <Stack.Navigator>
        <Stack.Screen name="loading" component={Loading} options={{headerShown:false}}/>
        <Stack.Screen name="logjoin_navi" component={LogJoin_navi} options={{headerShown:false}} />
        <Stack.Screen name="tab_navi" component={Tab_navi} options={{headerShown:false}}/>
        <Stack.Screen name="alarm" component={Alarm} />
        <Stack.Screen name="report" component={Report} />
        <Stack.Screen name="walk_navi" component={Walk_navi} options={{headerShown:false}} />
        <Stack.Screen name="account" component={Account} options={{ 
          title: ' ',
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.4} onPress={() => alert('완료')}>
              <Text style={{color:'#FF9A17', fontWeight:'bold',fontSize: 22,}}>완료</Text>
            </TouchableOpacity>
          ),}}/>
        <Stack.Screen name="puppy_navi" component={Puppy_navi} options={{headerShown:false}}/>
        <Stack.Screen name="friend_navi" component={Friend_navi} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}