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
  return (
    <View style={home_styles.container}>
      <TouchableOpacity
        style={home_styles.alamButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('alarm')}>
        <Image source={require('../asset/pet1.png')} resizeMode="stretch" />
      </TouchableOpacity>

      <View style={home_styles.container}>
        <ScrollView
          contentContainerStyle={home_styles.scrollView}
          horizontal={true}
          pagingEnabled={true}>
          <View style={home_styles.view}>
            <View style={home_styles.pet_box}>
              <View style={home_styles.imgContainer}>
                <Image
                  source={require('../asset/pet1.png')}
                  resizeMode="stretch"
                />
              </View>
              <View style={home_styles.nameContainer}>
                <Text style={home_styles.nameText}>쩨리</Text>
                <Text>권장 산책량 : 40min</Text>
              </View>
              <View style={home_styles.graphContainer}>
                <Text>월 55min</Text>
                <Text>화 42min</Text>
                <Text>수 21min</Text>
                <Text>목 41min</Text>
                <Text>금 </Text>
                <Text>토 </Text>
                <Text>일 </Text>
              </View>
            </View>
          </View>
          <View style={home_styles.view}>
            <View style={home_styles.pet_box}>
              <View style={home_styles.imgContainer}>
                <Image
                  source={require('../asset/pet2.png')}
                  resizeMode="stretch"
                />
              </View>
              <View style={home_styles.nameContainer}>
                <Text style={home_styles.nameText}>보리</Text>
                <Text>권장 산책량 : 45min</Text>
              </View>
              <View style={home_styles.graphContainer}>
                <Text>월 55min</Text>
                <Text>화 42min</Text>
                <Text>수 21min</Text>
                <Text>목 41min</Text>
                <Text>금 </Text>
                <Text>토 </Text>
                <Text>일 </Text>
              </View>
            </View>
          </View>
          <View style={home_styles.view}>
            <View style={home_styles.pet_box}>
              <View style={home_styles.imgContainer}>
                <Image
                  source={require('../asset/plus.png')}
                  resizeMode="stretch"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const home_styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
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
    backgroundColor: '#d3d3d3',
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
});

/*
<View style={home_styles.container}>
      <View style={home_styles.top_bar}>
        <Text>home screen</Text>
        <Button
          title="Go to alarm"
          onPress={() => navigation.navigate('alarm')}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        pagingEnabled
        horizontal
        contentContainerStyle={home_styles.scroll_container}>
        <View style={home_styles.pet_scroll}>
          <Text> 쩨리 </Text>
        </View>
        <View style={home_styles.pet_scroll}>
          <Text> 보리 </Text>
        </View>
      </ScrollView>
    </View>
*/
