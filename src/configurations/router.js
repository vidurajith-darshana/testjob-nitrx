import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";
import CreatePostScreen from "../views/CreatePostScreen";

const Stack = createStackNavigator();

const hide = {headerShown: false};

export default class Router extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={hide} />
        <Stack.Screen name="Home" component={HomeScreen} options={hide} />
        <Stack.Screen name="AddPost" component={CreatePostScreen} options={hide} />
      </Stack.Navigator>
    );
  }
}
