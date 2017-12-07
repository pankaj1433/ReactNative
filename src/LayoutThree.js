
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Constants } from 'expo';

export default class LayoutThree extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
