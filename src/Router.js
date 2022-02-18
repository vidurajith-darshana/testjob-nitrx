import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './pages/Splashscreen';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import AddPost from './pages/AddPost';
const Stack = createStackNavigator();

const hide = {headerShown: false};

export default class Router extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={hide} />
        <Stack.Screen name="Login" component={LoginScreen} options={hide} />
       
        <Stack.Screen name="Home" component={HomeScreen} options={hide} />
        <Stack.Screen name="AddPost" component={AddPost} options={hide} />

      </Stack.Navigator>
    );
  }
}
