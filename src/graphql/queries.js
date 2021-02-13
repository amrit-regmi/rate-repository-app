import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query{
  repositories {
    edges{
      cursor,
      node {
        id,
        fullName,
        name,
        ownerName,
        ownerAvatarUrl,
        ratingAverage,
        reviewCount,
        stargazersCount,
        description,
        language,forksCount,
        watchersCount
      }
    }
  }
}
`;

export const AUTHOROZED_USER = gql`
query{
  authorizedUser {
    id
    username
  }
}
`;
