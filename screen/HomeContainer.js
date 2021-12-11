import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
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
                onPress={() => navigation.navigate('alarm')}>
                <Image source={require('../asset/pet1.png')} />
              </TouchableOpacity>
            </View>
            <View style={home_styles.nameContainer}>
              <Text style={home_styles.nameText}>쩨리</Text>
              <Text>권장 산책량 : 40min</Text>
            </View>
            <View style={home_styles.graphContainer}>
              <View style={home_styles.monday}>
                <Text style={home_styles.weekdayText}>월</Text>
                <View style={home_styles.barGraph}></View>
                <Text style={home_styles.minText}>55min</Text>
              </View>
              <View style={home_styles.tuesday}>
                <Text style={home_styles.weekdayText}>화</Text>
                <View style={home_styles.barGraph}></View>
                <Text style={home_styles.minText}>42min</Text>
              </View>
              <View style={home_styles.wednesday}>
                <Text style={home_styles.weekdayText}>수</Text>
                <View style={home_styles.barGraph1}></View>
                <Text style={home_styles.minText}>21min</Text>
              </View>
              <View style={home_styles.thursday}>
                <Text style={home_styles.weekdayText}>목</Text>
                <View style={home_styles.barGraph}></View>
                <Text style={home_styles.minText}>41min</Text>
              </View>
              <View style={home_styles.friday}>
                <Text style={home_styles.weekdayText}>금</Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.saturday}>
                <Text style={home_styles.weekdayText}>토</Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.sunday}>
                <Text style={home_styles.weekdayText}>일</Text>
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
                onPress={() => navigation.navigate('alarm')}>
                <Image source={require('../asset/pet2.png')} />
              </TouchableOpacity>
            </View>
            <View style={home_styles.nameContainer}>
              <Text style={home_styles.nameText}>보리</Text>
              <Text>권장 산책량 : 40min</Text>
            </View>
            <View style={home_styles.graphContainer}>
              <View style={home_styles.monday}>
                <Text style={home_styles.weekdayText}>월</Text>
                <View style={home_styles.barGraph}></View>
                <Text style={home_styles.minText}>48min</Text>
              </View>
              <View style={home_styles.tuesday}>
                <Text style={home_styles.weekdayText}>화</Text>
                <View style={home_styles.barGraph2}></View>
                <Text style={home_styles.minText}>12min</Text>
              </View>
              <View style={home_styles.wednesday}>
                <Text style={home_styles.weekdayText}>수</Text>
                <View style={home_styles.barGraph}></View>
                <Text style={home_styles.minText}>55min</Text>
              </View>
              <View style={home_styles.thursday}>
                <Text style={home_styles.weekdayText}>목</Text>
                <View style={home_styles.barGraph3}></View>
                <Text style={home_styles.minText}>32min</Text>
              </View>
              <View style={home_styles.friday}>
                <Text style={home_styles.weekdayText}>금</Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.saturday}>
                <Text style={home_styles.weekdayText}>토</Text>
                <Text style={home_styles.minText}></Text>
              </View>
              <View style={home_styles.sunday}>
                <Text style={home_styles.weekdayText}>일</Text>
                <Text style={home_styles.minText}></Text>
              </View>
            </View>
          </View>
        </View>
        <View style={home_styles.view}>
          <View style={home_styles.pet_box}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('alarm')}>
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
