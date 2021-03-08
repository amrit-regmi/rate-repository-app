import { useQuery } from '@apollo/react-hooks';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';


const useSingleRepository = (variables) => {

  console.log(variables);
 
  const { loading, data ,error} = useQuery(GET_SINGLE_REPOSITORY,{ variables: {...variables}, skip : !variables.id ,
    fetchPolicy: 'cache-and-network',
  });

  const repository = data && data.repository;

  return { repository, loading ,error};
};

export default useSingleRepository;