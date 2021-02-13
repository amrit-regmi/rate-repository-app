import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { AUTHORIZE } from "../graphql/mutation";
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {

  const apolloClient=  useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const [mutate,result] = useMutation(AUTHORIZE);
  
  const signIn = async ({username,password}) => {
   const {data} = await mutate ({variables: {credentials:{username,password}}});
   await authStorage.setAccessToken(data.authorize.accessToken);
   apolloClient.resetStore();
   return {data};
    
  };

  return [signIn,result];

};

export default useSignIn;