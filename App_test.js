import React from 'react';
import { StyleSheet,
   Text,
   View, 
   Button, 
   TouchableOpacity, 
   ActivityIndicator, 
   TouchableHighlight, 
   ScrollView,
   FlatList,
   Image
  } from 'react-native';
  const a = [1,3,4,5,6,7,8,9,20,2,3,4,5,6,8,9,20,2,3,4,5,6,8,9,20,2,3,4,5,6,7,8,9,20,2,3,4,5,6,7,8,9,20,2,3,4,5,6,7,8,9,20,2]
export default class App extends React.Component {
  handler = e => {
    alert('Hello');
  }
  scrollToItem = () => {
    this.refs.flat.scrollToIndex ({index:20,animate:true}); 
  }
  
  render() {
    const b = a.map((item,index)=> <TouchableOpacity onPress = {this.handler}>
    <View style={styles.button}>
      <Text>
        this is also a button
      </Text>
    </View>
  </TouchableOpacity>)
    return (
      <View style={{backgroundColor: "red", flex: 1}}>
        <View style={{backgroundColor: "green", flex: 1}}>
          <Text>1</Text>
        </View>
        <View style={{backgroundColor: "yellow", flex: 1}}>
          <Text>2</Text>
        </View>





      {/* <ActivityIndicator size="small" /> */}
        {/* <TouchableOpacity onPress = {this.scrollToItem}>
          <View style={styles.button}>
            <Text>
              this is also a button
            </Text>
          </View>
        </TouchableOpacity> */}
        {/* <FlatList

          ref='flat'
          data = {[
            {name:'abc',id:5},
            {name:'abc',id:6},
            {name:'abc',id:7},
            {name:'abc',id:8},
            {name:'abc',id:9},
          ]}
          renderItem = {({item}) => <Text>{item.id}</Text>}
          keyExtractor = {item => item.id} /> */}
        {/* <ScrollView>{b}</ScrollView> */}
        {/* <TouchableHighlight onPress = {this.handler}>
          <View style={styles.button}> 
            <Text>
              This is Highlight
            </Text>
          </View>
        </TouchableHighlight> */}
        {/* <Button title="this is a button" onPress = {this.handler}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#b5b5b5',
    borderRadius: 5,
  }
});
