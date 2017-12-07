import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text} from 'react-native';

export default class Banner extends React.Component {
  constructor(){
    super();
    this.state = {
      width: Dimensions.get('window').width,
      height: null,
    }
  }
  onLayout(e) {
    const aspectRatio = 1920/1080;
    const measuredHeight = Dimensions.get('window').width/ aspectRatio;

    this.setState({
      width: Dimensions.get('window').width,
      height: measuredHeight,
    });
  }
  render() {
    return (
        <View style={styles.bannerWrap} onLayout={() => this.onLayout(this)}>
            <Image style={[{width: this.state.width, height: this.state.height}, styles.banner]}  source= {require('./../../assets/img/banner-1.jpg')}/>
            <View style={styles.overText}>
              <Text style={[styles.paragraph,]}>WELCOME MESSAGE BY GM</Text>
            </View>
            <View style={[styles.overlay,{borderTopWidth: this.state.width,borderRightWidth: this.state.width/2}]}></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerWrap: {
    flex:1,
    borderColor: '#c3c1bd',
    borderWidth: 3,
    borderTopWidth: 1,
    position:'relative',
  },
  banner: {
    flex:1,
    alignSelf: 'center',
  },
  paragraph: {
    backgroundColor: 'transparent',
    color:'white',
    fontSize: 20,
    color: '#dd2329',
    fontWeight: 'bold',
  },
  overlay: {
    width: 300,
    position: 'absolute',
    borderTopColor: '#FFFFFF80',
    borderRightColor: 'transparent',
    borderStyle: 'solid',
  },
  overText: {
    position:'absolute',
  }
});
