import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import {useState} from 'react';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function HomeContainer({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('alarm')}>
          <Image
            style={{width: 20, height: 25, marginRight: 20}}
            source={require('../asset/alarm.png')}
          />
        </TouchableOpacity>
      ),
    });
  });

  const [recommended_walk_pet1, set_recommended_walk_pet1] = useState(40);
  const [pet1_mon_walk, set_pet1_mon_walk] = useState(41);
  const [recommended_walk_pet2, set_recommended_walk_pet2] = useState(40);
  const [pet2_mon_walk, set_pet2_mon_walk] = useState(30);
  const [today, setToday] = useState('mon');

  return (
    <View style={home_styles.container}>
      <ScrollView
        contentContainerStyle={home_styles.scrollView}
        horizontal={true}
        pagingEnabled={true}>
        <View style={home_styles.view}>
          <View style={home_styles.pet_box}>
            <View style={home_styles.imgContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('puppy_navi', {screen: 'puppy_info'})
                }>
                <Image source={require('../asset/pet1.png')} />
              </TouchableOpacity>
            </View>
            <View style={home_styles.nameContainer}>
              <Text style={home_styles.nameText}>쩨리</Text>
              <Text>권장 산책량 : {recommended_walk_pet1}min</Text>
            </View>
            <View style={home_styles.graphContainer}>
              <View style={home_styles.monday}>
                <Text
                  {...(today === 'mon'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  월
                </Text>
                <View
                  style={
                    pet1_mon_walk > recommended_walk_pet1
                      ? {
                          width: '60%',
                          backgroundColor: 'red',
                          marginLeft: 10,
                          borderRadius: 50,
                          height: '50%',
                        }
                      : {
                          width: `${
                            (pet1_mon_walk / recommended_walk_pet1) * 60
                          } %`,
                          backgroundColor: '#FF9A17',
                          marginLeft: 10,
                          borderRadius: 50,
                          height: '50%',
                        }
                  }></View>
                <Text style={home_styles.minText}>{pet1_mon_walk}min</Text>
              </View>
              <View style={home_styles.tuesday}>
                <Text
                  {...(today === 'tue'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  화
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.wednesday}>
                <Text
                  {...(today === 'wed'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  수
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.thursday}>
                <Text
                  {...(today === 'thu'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  목
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.friday}>
                <Text
                  {...(today === 'fri'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  금
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.saturday}>
                <Text
                  {...(today === 'sat'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  토
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.sunday}>
                <Text
                  {...(today === 'sun'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  일
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
            </View>
          </View>
        </View>
        <View style={home_styles.view}>
          <View style={home_styles.pet_box}>
            <View style={home_styles.imgContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('puppy_navi', {screen: 'puppy_info'})
                }>
                <Image source={require('../asset/pet2.png')} />
              </TouchableOpacity>
            </View>
            <View style={home_styles.nameContainer}>
              <Text style={home_styles.nameText}>보리</Text>
              <Text>권장 산책량 : {recommended_walk_pet2}min</Text>
            </View>
            <View style={home_styles.graphContainer}>
              <View style={home_styles.monday}>
                <Text
                  {...(today === 'mon'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  월
                </Text>
                <View
                  style={
                    pet2_mon_walk > recommended_walk_pet2
                      ? {
                          width: '60%',
                          backgroundColor: 'red',
                          marginLeft: 10,
                          borderRadius: 50,
                          height: '50%',
                        }
                      : {
                          width: `${
                            (pet2_mon_walk / recommended_walk_pet2) * 60
                          } %`,
                          backgroundColor: '#FF9A17',
                          marginLeft: 10,
                          borderRadius: 50,
                          height: '50%',
                        }
                  }></View>
                <Text style={home_styles.minText}>{pet2_mon_walk}min</Text>
              </View>
              <View style={home_styles.tuesday}>
                <Text
                  {...(today === 'tue'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  화
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.wednesday}>
                <Text
                  {...(today === 'wed'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  수
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.thursday}>
                <Text
                  {...(today === 'thu'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  목
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.friday}>
                <Text
                  {...(today === 'fri'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  금
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.saturday}>
                <Text
                  {...(today === 'sat'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  토
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.sunday}>
                <Text
                  {...(today === 'sun'
                    ? {style: home_styles.weekdayTextToday}
                    : {style: home_styles.weekdayText})}>
                  일
                </Text>
                <Text style={home_styles.minText}></Text>
              </View>
            </View>
          </View>
        </View>
        <View style={home_styles.view}>
          <View style={home_styles.pet_box}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('puppy_navi', {screen: 'puppy_add'})
              }>
              <Text style={home_styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const home_styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  text: {
    fontSize: 50,
  },
  pet_box: {
    borderRadius: 40,
    width: '80%',
    height: '90%',
    backgroundColor: '#EEEBEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    borderRadius: 50,
    marginTop: '15%',
    width: '30%',
    height: '20%',
  },
  nameContainer: {
    width: '90%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 50,
  },
  graphContainer: {
    marginTop: '-15%',
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alamButton: {
    width: '5%',
    height: '5%',
  },

  monday: {
    flexDirection: 'row',
    position: 'absolute',
    left: '15%',
    top: '25%',
  },
  tuesday: {
    flexDirection: 'row',
    position: 'absolute',
    left: '15%',
    top: '33%',
  },
  wednesday: {
    flexDirection: 'row',
    position: 'absolute',
    left: '15%',
    top: '41%',
  },
  thursday: {
    flexDirection: 'row',
    position: 'absolute',
    left: '15%',
    top: '49%',
  },
  friday: {
    flexDirection: 'row',
    position: 'absolute',
    left: '15%',
    top: '57%',
  },
  saturday: {
    flexDirection: 'row',
    position: 'absolute',
    left: '15%',
    top: '65%',
  },
  sunday: {
    flexDirection: 'row',
    position: 'absolute',
    left: '15%',
    top: '73%',
  },
  weekdayText: {
    lineHeight: 21,
    fontWeight: 'bold',
    fontSize: 18,
  },
  weekdayTextToday: {
    color: '#FF9A17',
    lineHeight: 21,
    fontWeight: 'bold',
    fontSize: 18,
  },
  minText: {
    marginLeft: '5%',
    fontSize: 13,
    fontWeight: 'normal',
  },
  barGraph: {
    backgroundColor: '#FF9A17',
    marginLeft: 10,
    borderRadius: 50,
    height: '50%',
    width: '60%',
  },
  barGraph1: {
    backgroundColor: '#FF9A17',
    marginLeft: 10,
    borderRadius: 50,
    height: '50%',
    width: '31.5%',
  },
  barGraph2: {
    backgroundColor: '#FF9A17',
    marginLeft: 10,
    borderRadius: 50,
    height: '50%',
    width: '48%',
  },
  barGraph3: {
    backgroundColor: '#FF9A17',
    marginLeft: 10,
    borderRadius: 50,
    height: '50%',
    width: '48%',
  },
  plusText: {
    fontSize: 150,
    fontWeight: '500',
  },
});
