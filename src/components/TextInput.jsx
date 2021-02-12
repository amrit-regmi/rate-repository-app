import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text:{
     marginTop:10,
     height: 40, 
     backgroundColor: 'white',
     padding:5,
     borderRadius: theme.roundCorner,
     borderWidth: 2   
  },
  textValid: {
    borderColor: theme.colors.textSecondary, 
  },
  textInvalid: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.text, error? styles.textInvalid: styles.textValid];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;