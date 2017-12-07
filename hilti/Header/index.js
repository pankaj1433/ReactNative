import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';



export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
          <View style={styles.logoWrap}>
            <Image style={styles.logo} source={require('./../../assets/img/logo.png')} ></Image>
          </View>
          <View style={styles.navWrap}>
              <View style = {{flex:1,flexDirection:'row'}}>
                <Image source={require('./../../assets/img/bell.png')} style={styles.navIcons}/>
                <Image source={require('./../../assets/img/profile.jpg')} style={[styles.navIcons,styles.profile]}/>
              </View>            
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  logoWrap: {
    flex: 3,
    justifyContent: 'center',
    padding: 10,
  },
  logo: {    
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  navWrap: {
    flex: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navIcons: {
    height: 34,
    width:34,
    marginHorizontal: 10,
  },
  profile: {
    borderRadius: 17,
    borderColor: 'black',
    borderWidth: 2,
  },
});
