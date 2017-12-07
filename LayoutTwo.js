import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Constants } from 'expo';
import Header from './hilti/Header';
import Container from './hilti/Container';

export default class LayoutTwo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.headerWrap}>
          <Header/>
        </View>
        <View style = {{flex: 11}}>
          <Container />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: Constants.statusBarHeight,
  },
  headerWrap: {
    // flex: 1,
    borderColor: '#c3c1bd',
    borderBottomWidth: 2,
    height: 50,
  }
});
