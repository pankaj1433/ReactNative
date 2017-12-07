import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import ProfileImage from './../../assets/img/profile.jpg';

export default class Navigation extends React.Component {
    flashMessage = (msg) => {
        alert(msg)
    }
  render() {
    return (
      <View style={styles.navigation}>
          <TouchableOpacity style={{marginRight: 10}} onPress = {() => this.props.navigation.navigate('LayoutTwo')}>
            <View style={styles.button}>
                <Text>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('LayoutThree')}>
            <View style={styles.button}>
                <Text>Save</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  }
});
