import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { convertToK } from '../helper';
import theme from '../theme';

const styles = StyleSheet.create({
  container:{
    padding:15,
    backgroundColor:'white'
  },

  topContainer:{
    flexDirection:'row',  
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },

  avatarContainer: {
    flexGrow:0, 
  },

  avatar: {  
    width: 60,
    height: 60,
    borderRadius:theme.roundCorner
  },

  contentContainer: {
    flex:1, 
    marginLeft:15 ,
    
  },

  nameText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.heading,
    fontWeight:theme.fontWeights.bold,  
    paddingVertical:2,
    paddingHorizontal:2
  },

  descriptionText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
    fontWeight:theme.fontWeights.normal,
    textAlign:'justify',
    paddingVertical:2,
    paddingHorizontal:2,
    flexGrow: 1,
      
  },

  languageContainer: {
    flexDirection: "row",
  },

  languageText: {
    flexGrow:0,
    backgroundColor: theme.colors.primary ,
    margin:5,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    color:'white'
  },

  itemStat:{
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,   
  },

  itemStatText: {
    fontWeight:'bold' ,
    marginBottom: 5
  }

});

const ItemStat = ( { statDescription, stat } ) => {
  return (
    <View style={styles.itemStat}>
      <Text style={styles.itemStatText}>
        {convertToK(stat)}
      </Text>
      <Text style={{color: theme.colors.textSecondary}}>{statDescription}</Text>
    </View>
  );
};

const RepositoryListItem = (props) => {
  return( 
    <View style={styles.container}>
      <View style={styles.topContainer}> 
        <View style={styles.avatarContainer} >
          <Image style={styles.avatar} source={{uri:props.repository.ownerAvatarUrl}}></Image>
        </View>
        <View style={styles.contentContainer}>
              <Text style={styles.nameText}>{props.repository.fullName}</Text>          
              <Text style={styles.descriptionText}>{props.repository.description}</Text>
              <View style={styles.languageContainer}>
                 <Text style={styles.languageText}>{props.repository.language}</Text>
              </View>
             
        </View>
      </View>

      <View style={styles.bottomContainer}>
          <ItemStat stat = {props.repository.stargazersCount} statDescription= 'Stars' />
          <ItemStat stat = {props.repository.forksCount} statDescription= 'Forks' />
          <ItemStat stat = {props.repository.reviewCount} statDescription= 'Reviews' />
          <ItemStat stat = {props.repository.ratingAverage} statDescription= 'Rating' />
      </View>

    </View>
      )
      ;
}; 

export default RepositoryListItem;