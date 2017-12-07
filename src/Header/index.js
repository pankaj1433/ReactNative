import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import ProfileImage from './../../assets/img/profile.jpg';
import Navigation from './Navigation'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
          <View style={{flex:1,padding:5}}>
            <Image source={require('./../../assets/img/profile.jpg')} style={styles.profileImage}/>
          </View>
          <View style={{flex:4,alignItems:'flex-end'}}>
            <Navigation navigation = {this.props.navigation}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'teal',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  profileImage: {
      height: 50,
      width:50,
      borderRadius: 25,
  }
});
