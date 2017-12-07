import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Permissions, Notifications} from 'expo';

import Navigation from './src/RootNavigation'

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          notification: {}
      }
  }

  componentWillMount() {
      this.registerForPushNotificationsAsync();
      this._notificationSubscription = Notifications.addListener(this._handleNotification);
      
  }
  _handleNotification = (notification) => {
    this.setState({notification}, () => {
        console.log(this.state.notification)
    });
};


  async registerForPushNotificationsAsync() {
      // const {existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      // let finalStatus = existingStatus;
      // if (existingStatus !== 'granted') {      
      //     const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      //     finalStatus = status;
      // } 
      // if (finalStatus !== 'granted') {
      //     return;
      // }
      let token = await Notifications.getExpoPushTokenAsync();
      console.log('>>>',token)
  }
  
  render() {
    return (
        <Navigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
