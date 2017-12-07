import React from 'react';
import { StyleSheet, 
        Text, 
        View, 
        ScrollView, 
        Image,
        Dimensions} from 'react-native';

const window = Dimensions.get('window');

const bigBox = ['Box 1','Box 2','Box 3'];
// const roundBox = ['Box 1','Box 2','Box 3','Box 4'];
const smallBox = ['Box 1','Box 2','Box 3','Box 4','Box 5','Box 6','Box 7'];

export default class Content extends React.Component {
  render() {

    const bigTiles = bigBox.map((item, index)=> 
                        <View key={index} style={styles.BoxStyle}><Text style={{color: 'white'}}>{item}</Text></View>);
    const smallTiles = smallBox.map((item, index)=> 
                        <View key={index} style={styles.SmallBoxStyle}><Text style={{color: 'white'}}>{item}</Text></View>);
    const roundTiles = bigBox.map((item, index)=> 
                        <View key={index} style={styles.RoundBoxStyle}></View>);

    return (
      <View style={styles.content}>
        <ScrollView>
            <View style = {{padding: 10}}>
                <Image style={{width: window.width-20, height: 100}} source= {require('./../../assets/img/banner.jpg')}></Image>
            </View>
            <View style = {styles.HorizontalBox}>
                {bigTiles}
            </View>
            <View style = {styles.SmallHorizontalBox}>
                {smallTiles}
            </View>
            <View style = {[styles.HorizontalBox,styles.footer]}>
                {roundTiles}
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  HorizontalBox : {
    flex:1, 
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  BoxStyle: {
    height: 150, 
    width: 100, 
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SmallBoxStyle: {
    height: 50, 
    width: 50, 
    backgroundColor: 'teal',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  SmallHorizontalBox: {
    flex:1, 
    flexDirection:'row',
    flexWrap: 'wrap',
    marginTop: 10,
    alignContent: 'space-between',
    justifyContent: 'center',
    padding: 10,
  },
  RoundBoxStyle: {
    height: 60, 
    width: 60, 
    borderRadius: 30,
    backgroundColor: 'teal'
  },
  footer: {
    justifyContent: 'space-around'
  }
});
