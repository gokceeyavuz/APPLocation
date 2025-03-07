import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppMor1, AppMor2,AppMor3} from '../Screens';
import {RoutesName} from '../config';
import {Icons} from '../assets';

const Tab = createBottomTabNavigator();
const buttomTabRoutesAppMor = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AppMor2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AppMor2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.menu}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Bildirim"
        component={AppMor3}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.bell}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kullanıcı"
        component={AppMor2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.user2}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default buttomTabRoutesAppMor;
