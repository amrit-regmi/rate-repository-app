import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import theme from '../theme';
const styles = StyleSheet.create({
  tab: { 
    flexGrow:1,
    padding:10,
  },
  text: {
    color: 'white',
    fontSize: theme.fontSizes.heading,
    fontWeight:theme.fontWeights.bold,
    
  }
});

const AppBarTab = (props) => {
  return (
  <View style={styles.tab}>
    <TouchableWithoutFeedback onPress={() => props.onClick}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableWithoutFeedback>
  </View>
  );
};

export default AppBarTab;