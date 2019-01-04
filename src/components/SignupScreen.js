import React, { Component } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { nameChanged, surnameChanged, emailChanged, passwordChanged, signupUser } from '../actions';
import { CardSection, Button, Input, Spinner} from './common';


class SignupScreen extends Component {

  onNameChange(text){
    this.props.nameChanged(text);
  }

  onSurnameChange(text){
    this.props.surnameChanged(text);
  }

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const {name, surname, email,password} = this.props;
    this.props.signupUser({name, surname, email, password})
  }

  renderButton(){
  if (this.props.loading) {
     return <Spinner size="large" />;
   }

   return (
     <Button onPress={this.onButtonPress.bind(this)}>
       CONTINUE
     </Button>
   );
}

  render(){
    return(
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder='Jone'
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
            returnType="next"
            autoCapitalize='none'
            autoCorrect={false}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Surname"
            placeholder='Smith'
            onChangeText={this.onSurnameChange.bind(this)}
            value={this.props.surname}
            returnType="next"
            autoCapitalize='none'
            autoCorrect={false}
          />
        </CardSection>

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


        <View style={styles.signUpTextCont}>
          <Text style={styles.textStyle}>I agree to Thinblock's </Text>
          <Text style={styles.signUpText}> Terms of Service </Text>
          <Text style={styles.textStyle}> & </Text>
          <Text style={styles.signUpText}> Privacy Policy</Text>
        </View>

          {this.renderButton()}

      </View>
    )
  }
}


const styles = {
  textStyle: {
  color: 'grey',
  fontSize:13
  },
  signUpTextCont: {
  flexGrow:1,
  alignItems: 'flex-end',
  justifyContent: 'center',
  paddingVertical: 15,
  flexDirection:'row'
  },
  signUpText: {
  color: 'grey',
  fontSize:13,
  textDecorationLine: 'underline'
  }

};



const mapStateToProps = state => {
  return {
    name: state.auth.name,
    surname: state.auth.surname,
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect (mapStateToProps, {
  nameChanged, surnameChanged, emailChanged, passwordChanged, signupUser
})(SignupScreen)
