import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { AUTHOROZED_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

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
  const authStorage = useContext(AuthStorageContext);
  const {data} = useQuery(AUTHOROZED_USER);
  const apolloClient  = useApolloClient();

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();

  };
  
  return (
  <View style={styles.container} horizontal>   
   <ScrollView horizontal>
      <Link to='/' component={AppBarTab} >Repository</Link>
      {data && data.authorizedUser? 
        <AppBarTab onPress = {signOut}> Sign out</AppBarTab>
        : 
        <Link to="/Sign-in" component={AppBarTab} >Sign in</Link>
        
        }

      
    </ScrollView> 
  </View>
    
  
  );
};

export default AppBar;