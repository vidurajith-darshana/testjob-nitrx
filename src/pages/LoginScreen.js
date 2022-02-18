import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import ButtonCustom from '../components/ButtonCustom';
import InputForm from '../components/InputForm';
import { backgroundColor, secondaryColor } from '../constants';
import { setUserLoged } from '../redux/actions/AuthAction';

class LoginScreen extends Component {




  handelButtonLogin = () => {
    
   

  };



  render() {

    return (
      <View style={styles.container}>
        <Image
          style={{ marginTop: 42, marginBottom: 32 }}
          source={require('../assets/logo3.png')}
        />


        <Text style={{ fontSize: 35, color: '#088F8F' }}>Login</Text>
        {/* base Form */}
        <View style={styles.baseForm}>
          <InputForm

            placeholder={'Username'}
            
            onChangeText={('inputUsername')}
          />
          <InputForm
            onChangeText={('inputPassword')}
            placeholder={'Password'}
            // spyMode
           
          />
          <View style={{ marginTop: 70 }}>
            <ButtonCustom

              title="LOGIN"
              onPress={() => this.props.navigation.navigate('Home')}
            />
        
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  baseForm: {
    paddingTop: 10,
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 54,
    // borderRadius: 25,
    // elevation: 10,
    paddingHorizontal: 16,
  },
});



export default LoginScreen;
