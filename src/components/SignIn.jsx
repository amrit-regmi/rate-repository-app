import { Formik } from 'formik';
import React from 'react';
import {  Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
   backgroundColor:'white',
   paddingHorizontal:10,
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

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

export const SignInContainer  = ({initialValues, onSubmit}) => {
  return <Formik 
    validationSchema={validationSchema}
    initialValues= {initialValues} 
    onSubmit={ onSubmit }>
    {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
  </Formik>;
};

const LoginForm = ({ onSubmit }) => {
  return(
    <View style={styles.container}>
      <FormikTextInput testID = 'usernameField' name='username' placeholder='Username'></FormikTextInput>
      <FormikTextInput testID = 'passwordField' name='password' placeholder='Password' secureTextEntry></FormikTextInput>
      <TouchableWithoutFeedback onPress={onSubmit} testID = 'submitButton'>
        <View style={styles.button}>
          <Text style= {styles.buttonText} >Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
  </View>
  );
};


const SignIn = () => {
  const history = useHistory(); 
  const [signIn] = useSignIn();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if(data.authorize && data.authorize.accessToken){
        history.push('/repositories');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit= {onSubmit} initialValues= {{username:'',password:''}} ></SignInContainer>
  );
};

export default SignIn;