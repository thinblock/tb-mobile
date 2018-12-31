import React, { Component } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { CardSection, Button, Input, Spinner} from './common';


class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const {email,password} = this.props;
    this.props.loginUser({email, password})
  }

  renderButton(){
  if (this.props.loading) {
     return <Spinner size="large" />;
   }

   return (
     <Button onPress={this.onButtonPress.bind(this)}>
       LOGIN
     </Button>
   );
}

  render(){
    return(
      <View>
        <CardSection>
          <Input
            label="Email"
            placeholder='email@test.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            returnType="next"
            autoCapitalize='none'
            autoCorrect={false}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder='.........'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            returnType='go'
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
         {this.props.error}
        </Text>

          {this.renderButton()}

        <TouchableOpacity style={styles.buttonStyle}>
          <Text>Reset your password</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 13,
    alignSelf: 'center',
    color: 'grey'
  },
  textStyle: {
  color: 'grey',
  fontSize: 13
  },
  buttonStyle: {
  marginTop: 10,
  alignItems: 'center'
  }
};



const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect (mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm)
