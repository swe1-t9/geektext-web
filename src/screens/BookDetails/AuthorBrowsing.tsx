import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { environment } from '../../graphql/relay';
import AuthorBrowsingView from './AuthorBrowsingView';
import { AuthorBrowsingQueryResponse } from './__generated__/AuthorBrowsingQuery.graphql';

const AuthorBrowsingQuery = graphql`
  query AuthorBrowsingQuery($input: SortedBooksInput!) {
    ...AuthorBrowsingView_authorBrowsing
  }
`;

const AuthorBrowsing: React.FC = (componentProps: any) => (
  <QueryRenderer
    environment={environment}
    query={AuthorBrowsingQuery}
    variables={{ input: { field_to_sort_by: 'title', sort_direction: 'asc' } }}
    render={({ props, error }) => {
      if (error) return <div>{error.message}</div>;
      else if (props) {
        console.log(props);
        return (
          <AuthorBrowsingView
            //@ts-ignore
            authorId={componentProps.location.state.id}
            authorBrowsing={props as AuthorBrowsingQueryResponse}
          />
        );
      } else return <div>loading</div>;
    }}
  />
);

export default AuthorBrowsing;
