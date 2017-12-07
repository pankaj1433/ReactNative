import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './src/Header';
import Content from './src/Content'

export default class LayoutOne extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
            <Header navigation = {this.props.navigation}/>
        </View>
        <View style={{flex:8}}>
            <Content/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: 20,
  }
});
