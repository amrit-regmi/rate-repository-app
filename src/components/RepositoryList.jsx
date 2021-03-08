import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router';
import useRepositories from '../hooks/useRepositories';
import RepositoryListItem from './RepositoryListItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const RepositoryList = () => {
  const {repositories} =useRepositories();
  const history = useHistory();
  const  onPress = (id) => {
    console.log(history,id);
    history.push('repository/'+id);
  };
 
   return (
     <RepositoryListContainer repositories={repositories} onPress= {onPress}></RepositoryListContainer>
   );
 };



export const RepositoryListContainer = ({ repositories,onPress }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem = {({item})=>(
        <TouchableOpacity onPress ={() => onPress(item.id)}>
           <RepositoryListItem repository = {item}/>
        </TouchableOpacity>
       
      )}
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;



export default RepositoryList;