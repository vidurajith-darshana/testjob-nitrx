import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,

  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
  import {greenColor, secondaryDarkColor, yellowColor} from '../constants';
  import InputForm from '../components/FormInput';
  import { TouchableOpacity } from 'react-native-gesture-handler';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import { Checkbox } from 'react-native-paper';
  class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidePassword: props.spyMode,
      isFocus: false,
    };
  }
  showHidePassword = () => {
    const icoImage = !this.state.hidePassword ? 'eye' : 'eye-slash';
    return (
      <View style={{position: 'absolute', end: 0, top: 32}}>
        <TouchableOpacity
          onPress={() =>
            this.setState({hidePassword: !this.state.hidePassword})
          }>
          <Icon
            style={{marginEnd: 12}}
            name={icoImage}
            size={24}
            color="#20B2AA"
          />
        </TouchableOpacity>

        
      </View>
    );
  };
  render() {
    const {errorMsg, onChangeText, placeholder, spyMode} = this.props;
    const borderWidth = this.state.isFocus ? 2 : 1;

    return (
      <View>
        <Text
          style={{
            color: greenColor,
            fontSize: 12,
            marginStart: 12,
            marginBottom: 8 ,
            
          }}>
          {errorMsg}
        </Text>
        <TextInput
        
          onFocus={() => this.setState({isFocus: true})}
          onBlur={() => this.setState({isFocus: false})}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={this.state.hidePassword}
          style={[styles.inputForm, {borderWidth: borderWidth}]}
          
        />
       
        
        {spyMode && this.showHidePassword()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputForm: {
    backgroundColor:"#F8F8FF",
    borderRadius: 10,
    paddingHorizontal: 12,
    color: "#000000",
    borderColor: '#088F8F',
  },
});

export default FormInput;
