
import React from 'react';
import { StyleSheet, Text, View,Platform} from 'react-native';
import { Constants } from 'expo';

export default class LayoutThree extends React.Component {
  
    state = {
        user: []
    }
    async componentDidMount() {
       
        const response = await fetch('https://api.onename.com/v1/search?query=wenger&app-id=demo-1234&app-secret=demo-1234');
        const data=await response.json()
        .then((data) =>{
            const userData = {
                username: data.results[0].username,
                facebook:  data.results[0].profile.facebook.proof.url
            }
            let newob = Object.assign({},this.state.user,userData)
            this.setState({
                user: newob
            })
        })
        .catch(err => {
            console.log("Error: "+err );
        });
    }
    
    render() {
        console.log(this.state.user);
        const Comp = Platform.select({
            ios: () => <Text>this is IOS</Text>,
            android: () => <Text>this is android</Text>
        })
    return (
      <View style={styles.container}>
        <Comp/>
        <Text style={{color: "#fff"}}>UserName: {this.state.user.username}</Text>
        <Text style={{color: "#fff"}}>Facebook: {this.state.user.facebook}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      ...Platform.select ({
        ios: {
            backgroundColor:'#5b5b5b',
        },
        android: {
            backgroundColor: 'yellow'
        }
      }),
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
