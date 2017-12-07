import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


import LayoutOne from '../LayoutOne';
import LayoutTwo from '../LayoutTwo';
import LayoutThree from '../LayoutThree';

const RootNavigator = StackNavigator({
    LayoutOne: {
      screen: LayoutOne,
      navigationOptions: {
        headerTitle: 'First Session',
      },
    },
    LayoutTwo: {
      screen: LayoutTwo,
      navigationOptions: {
        headerTitle: 'Second Session',
      },
    },
    LayoutThree: {
      screen: LayoutThree,
      navigationOptions: {
        headerTitle: 'API call and Platform code',
      },
    },
  });
  
  export default RootNavigator;