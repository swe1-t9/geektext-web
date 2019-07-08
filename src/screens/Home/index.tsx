import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';

import { environment } from '../../graphql/relay';
import HelloWorldView from './HelloWorldView';
import { HelloWorldView_helloWorld$ref } from './__generated__/HelloWorldView_helloWorld.graphql';

const HomeQuery = graphql`
  query HomeQuery {
    ...HelloWorldView_helloWorld
  }
`;

const Home: React.FC = () => (
  <QueryRenderer
    environment={environment}
    query={HomeQuery}
    variables={{}}
    render={({ props, error }) => {
      if (error) return <div>{error.message}</div>;
      else if (props) {
        console.log(props);
        return (
          <HelloWorldView helloWorld={props as HelloWorldView_helloWorld$ref} />
        );
      } else return <div>loading</div>;
    }}
  />
);

export default Home;
