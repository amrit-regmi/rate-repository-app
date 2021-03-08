import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryListItem from './RepositoryListItem';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor:'#e1e4e8'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>  
            
        <Route path="/" exact>
          <RepositoryList />
        </Route>

        <Route path="/Sign-in" exact>
          <SignIn />
        </Route>

        <Route path="/repository/:id" exact>
          <RepositoryListItem />
        </Route> 

        
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;