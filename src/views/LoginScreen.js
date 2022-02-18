import React  from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Loader from "../components/Loader";

const LoginScreen = () =>{

  return (
      <View style={styles.container}>

        <Image
            style={{ marginTop: 42, marginBottom: 32 }}
            source={require('../assets/logo3.png')}
        />


        <Text style={{ fontSize: 35, color: '#088F8F' }}>Login</Text>
        {/* base Form */}
        <View style={styles.baseForm}>
          <TextInput
              placeholder={'Username'}

          />
          <TextInput
              placeholder={'Password'}
              // spyMode

          />
          <View style={{ marginTop: 70 }}>
            <Button
                title="LOGIN"
                onPress={() => this.props.navigation.navigate('Home')}
            />

          </View>
        </View>

        <Loader isVisible={false}/>

      </View>
  );
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
    paddingHorizontal: 16,
  },
});



export default LoginScreen;
