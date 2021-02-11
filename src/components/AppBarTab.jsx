import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import theme from '../theme';
const styles = StyleSheet.create({
  touchable:{
    flexGrow: 0,
  },
  tab: { 
    flexGrow:1,
    padding:10,
  },

  text: {
    color: 'white',
    padding:2,
    fontSize: theme.fontSizes.heading,
    fontWeight:theme.fontWeights.bold,
    
  }
});

const AppBarTab = (props) => {
  return (
  <TouchableWithoutFeedback style={styles.touchable} onPress={props.onPress}>
      <View style={styles.tab}>
          <Text style={styles.text}>{props.children}</Text>
      </View>
  </TouchableWithoutFeedback>
  );
};

export default AppBarTab;