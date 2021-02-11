import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display:'flex',
    flexDirection: 'row',
    alignContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor: theme.colors.appBar
  }, 
});

const AppBar = () => {
  return (
  <View style={styles.container} horizontal>   
   <ScrollView horizontal>
      <Link to='/' component={AppBarTab} >Repository</Link>
      <Link to="/Sign-in" component={AppBarTab} >Sign In</Link>
    </ScrollView> 
  </View>
    
  
  );
};

export default AppBar;