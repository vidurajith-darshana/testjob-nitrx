import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {backgroundColor} from '../constants';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      const isLogin = this.props.userLogin.isLogin;
      if (isLogin) {
        this.props.navigation.replace('Home');
      } else {
        this.props.navigation.replace('Login');
      }
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo3.png')} />
        <Text style={{fontSize:30,color:'#088F8F',paddingTop:20,fontWeight:'bold'}}>P O S T E R</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStatetoProps = (state) => {
  return {
    userLogin: state.AuthReducer.userLogin,
  };
};
export default connect(mapStatetoProps)(SplashScreen);
