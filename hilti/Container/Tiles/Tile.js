import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text} from 'react-native';

const window = Dimensions.get('window');

export default class Tile extends React.Component {

  render() {
    return (
        <View style={[styles.tile,{width: this.props.tilewidth, height: this.props.tilewidth+55}]} >
            <Image style={styles.tileImage} source= {this.props.img_path.uri}/>
            <View style={styles.tileTitle}>
                <Text style={styles.title}>{this.props.img_path.name}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: 5,
    // flex: 1,
  },
  tileImage: {
    flex: 1,
    width: null,
    height: null,
    // width: window.width / 3 - 10,
    // height: window.width / 3 - 10,
  },
  tileTitle: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    height: 55,
  },
  title: {
    flexWrap: 'wrap',
    flex: 1,
    color: '#dd2329',
    textAlign:'center',
  }
});
