import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';

import Banner from './Banner';
import Tiles from './Tiles'

export default class Container extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
            <ScrollView>
              <View style={{flex:1}}>
                <Banner />
              </View>
              <View style={{flex:1}}>
                <Tiles />
              </View>                
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3ee',
  },
});
