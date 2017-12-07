import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text} from 'react-native';

import Tile from './Tile'
const window = Dimensions.get('window');

const imgs = [
                {uri: require('./../../../assets/img/travel.jpeg'), name: 'TRAVEL'},
                {uri: require('./../../../assets/img/venue.jpg'), name: 'VENUE'},
                {uri: require('./../../../assets/img/dress-code.jpg'), name: 'DRESS CODE'},
                {uri: require('./../../../assets/img/agenda.jpg'), name: 'AGENDA'},
                {uri: require('./../../../assets/img/stay.jpg'), name: 'STAY OVERVIEW'},
                {uri: require('./../../../assets/img/corner.jpg'), name: 'EXPERIENCE CORNER'},
                {uri: require('./../../../assets/img/information.png'), name: 'ORG. INFORMATION'},
                {uri: require('./../../../assets/img/assistance.png'), name: 'NEED ASSISTANCE'},
                {uri: require('./../../../assets/img/comments.jpg'), name: 'POST YOUR COMMENT'},
            ];

export default class Tiles extends React.Component {
  constructor(){
    super();
    this.state = {
      width: Dimensions.get('window').width,
    }
  }
  onLayout(e) {
    this.setState({
      width: Dimensions.get('window').width,
    });
  }
  
  render() {
    const tile = imgs.map((item,index)=><Tile tilewidth={(this.state.width- 50)/3} key={index} img_path = {item}/>)
    return (
        <View onLayout={() => this.onLayout(this)} style={styles.tileWrap}>
            {tile}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  tileWrap: {
    flex:1,
    flexDirection: 'row',   
    // justifyContent: 'space-between',
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 10,
  },
});
