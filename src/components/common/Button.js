import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle, buttonContainer, buttonText } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonContainer}>
      <Text style={buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainer: {
  margin: 20,
  padding: 18,
  paddingLeft: 25,
  paddingRight: 25,
  backgroundColor:'#b224ef',
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  },
  buttonText: {
  color: '#fff',
  fontSize: 15,
  fontWeight: 'bold'
  },
  textStyle: {
    color: 'grey',
    fontSize: 13
  },
  buttonStyle: {
    marginTop:10,
    alignItems: 'center'
  }


};

export { Button };
