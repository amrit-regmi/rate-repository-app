import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useParams } from 'react-router';
import { convertToK } from '../helper';
import * as Linking from 'expo-linking';
import useSingleRepository from '../hooks/useSingleRepository';
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
  },
  button: {
    alignItems:'center',
    height:50,
    paddingVertical:10,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundCorner,
    marginVertical: 10
   
  },

  buttonText: {
   height:50,
   color: 'white',
   fontWeight:theme.fontWeights.bold,
   fontSize: theme.fontSizes.heading,
   
 }

});

const ItemStat = ( { statDescription, stat } ) => {
  return (
    <View style={styles.itemStat} testID={statDescription}>
      <Text style={styles.itemStatText}>
        {convertToK(stat)}
      </Text>
      <Text style={{color: theme.colors.textSecondary}}>{statDescription}</Text>
    </View>
  );
};

const RepositoryListItem = (props) => {
  const params =  useParams();
  const id = params.id;

  const { repository  } = useSingleRepository({id:id});

  const data =  props.repository || repository ;

  if(!data){
    return null;
  }

  return( 
    <View style={styles.container}>
      <View style={styles.topContainer}> 
        <View style={styles.avatarContainer} >
          <Image style={styles.avatar} source={{uri:data.ownerAvatarUrl}}></Image>
        </View>
        <View style={styles.contentContainer}>
              <Text testID= 'fullName' style={styles.nameText}>{data.fullName}</Text>          
              <Text testID= 'description' style={styles.descriptionText}>{data.description}</Text>
              <View style={styles.languageContainer}>
                 <Text testID= 'language' style={styles.languageText}>{data.language}</Text>
              </View>
             
        </View>
      </View>

      <View style={styles.bottomContainer}>
          <ItemStat stat = {data.stargazersCount} statDescription= 'Stars' />
          <ItemStat stat = {data.forksCount} statDescription= 'Forks' />
          <ItemStat stat = {data.reviewCount} statDescription= 'Reviews' />
          <ItemStat stat = {data.ratingAverage} statDescription= 'Rating' />
      </View>
      {id && <TouchableWithoutFeedback onPress={()=> {
        Linking.openURL(data.url);
      }}>
        <View style={styles.button}>
          <Text style= {styles.buttonText} >Open in Github</Text>
        </View>
      </TouchableWithoutFeedback>}
      

    </View>
      )
      ;
}; 

export default RepositoryListItem;