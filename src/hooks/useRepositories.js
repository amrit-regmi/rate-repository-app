import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {
 
  const { loading, data ,error} = useQuery(GET_REPOSITORIES,{
    fetchPolicy: 'cache-and-network',
  });

  const repositories = data && data.repositories;

  return { repositories, loading ,error};
};

export default useRepositories;