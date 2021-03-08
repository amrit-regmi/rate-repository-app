import React from 'react';
import { render } from '@testing-library/react-native';
import {RepositoryListContainer}  from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const {getAllByTestId} = render(<RepositoryListContainer repositories={repositories}></RepositoryListContainer>);

     for(let i = 0; i< 2;i +=1){
       const fullName = getAllByTestId('fullName');
       expect(fullName[i]).toHaveTextContent(i===0 ? 'jaredpalmer/formik' : 'async-library/react-async');

       const description = getAllByTestId('description');
       expect(description[i]).toHaveTextContent(i==0?'Build forms in React, without the tears':'Flexible promise-based React data loader');

       const language = getAllByTestId('language');
       expect(language[i]).toHaveTextContent(i==0?'TypeScript':'JavaScript');

       const stars = getAllByTestId('Stars');
       expect(stars[i]).toHaveTextContent('Stars');
       expect(stars[i]).toHaveTextContent(i==0?'21.9k':'1.8k');

       const forks = getAllByTestId('Forks');
       expect(forks[i]).toHaveTextContent('Forks');
       expect(forks[i]).toHaveTextContent(i==0?'1.6k':'69');

       const reviews = getAllByTestId('Reviews');
       expect(reviews[i]).toHaveTextContent('Reviews');
       expect(reviews[i]).toHaveTextContent(i==0?'3':'3');

       const ratings = getAllByTestId('Rating');
       expect(ratings[i]).toHaveTextContent('Rating');
       expect(ratings[i]).toHaveTextContent(i==0?'88':'72');
     }
      
    });
  });
});